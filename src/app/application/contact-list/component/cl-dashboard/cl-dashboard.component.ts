    import { Component, OnInit, ViewChild } from "@angular/core";
    import { MatDialog } from "@angular/material/dialog";
    import { MatTable } from "@angular/material/table";
    import { ACTION_TYPE } from "../../enum";

    import { ContactDialogModel, ContactListData } from "../../model";
    import { ContactListDataService } from "../../service";
import { ClAddEditContactComponent } from "../cl-addEdit-contact/cl-addEdit-contact.component";

    @Component({
        selector: 'app-cl-dashboard',
        templateUrl: './cl-dashboard.component.html',
        styleUrls: ['./cl-dashboard.component.css']
    })
    export class ClDashboardComponent implements OnInit {

        contactList: Array<ContactListData> = []
        actionType = ACTION_TYPE;
        displayedColumns: string[] = ['id','firstName', 'lastName', 'phone','actions'];
        showContactListTable: boolean = false;
        contactDialogData = new ContactDialogModel()
        @ViewChild(MatTable,{static:true}) table: MatTable<any>;

        constructor(
            private _contactData: ContactListDataService,
            public dialogService: MatDialog    ) {}

        ngOnInit() { 
            this.getContactList()
            if(this.contactList.length){
                this.showContactListTable = true
            }
        }


        getContactList(){
            this._contactData.fetchContactDetails().subscribe((response: ContactListData[]) => {
                if(response){
                    this.contactList = response.map((contact: ContactListData) => {
                        let record = new ContactListData();
                        record.firstName = contact.firstName;
                        record.id = contact.id;
                        record.lastName = contact.lastName;
                        record.phone = contact.phone
                        return record;
                    })
                }
            })
        } 
    
        deleteContact(contact: ContactListData){
            this.contactList = this.contactList.filter((value,key)=>{
            return value.id != contact.id;
            });
        }


        openAddDialog(action: ACTION_TYPE) {
            const dialogRef = this.dialogService.open(ClAddEditContactComponent, {
            data: {contact:{},action:action}
            });
        
            dialogRef.afterClosed().subscribe(result => {
                if(result)
                result.id = this.contactList.length + 1;
                this.contactList.push(result);
                this.table.renderRows();
            });
        }

        openEditDialog(action: ACTION_TYPE, actionOn: ContactListData) {            
            const dialogRef = this.dialogService.open(ClAddEditContactComponent, {
                data: {contact:actionOn,action:action}
            });
        
            dialogRef.afterClosed().subscribe(result => {                
                if(result){
                    let contact = this.contactList.find((value,key) => value.id == result.id)
                    contact.firstName = result.firstName;
                    contact.lastName = result.lastName;
                    contact.phone = result.phone;
                }
            
            })

        }
        actionHandler(action:ACTION_TYPE,actionOn?:ContactListData){
            switch(action){
                case ACTION_TYPE.ADD:
                    this.openAddDialog(action);
                    break;
                case ACTION_TYPE.UPDATE:
                    this.openEditDialog(action,actionOn);
                    break;
                case ACTION_TYPE.DELETE:
                    this.deleteContact(actionOn);
                    break;
                }
            }

    }