    import { Component, OnInit, ViewChild } from "@angular/core";
    import { MatDialog } from "@angular/material/dialog";
    import { MatTable } from "@angular/material/table";
    import { ClAddContactComponent } from "..";
    import { ACTION_TYPE } from "../../enum";

    import { ContactListData } from "../../model";
    import { ContactListDataService } from "../../service";
    import { ClEditContactComponent } from "../cl-edit-contact/cl-edit-contact.component";

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


        openAddDialog() {
            const dialogRef = this.dialogService.open(ClAddContactComponent, {
            data: this.contactList
            });
        
            dialogRef.afterClosed().subscribe(result => {
                if(result)
                this.contactList.push(result)
                this.table.renderRows();
            });
        }

        openEditDialog(actionOn: ContactListData) {            
            const dialogRef = this.dialogService.open(ClEditContactComponent, {
                data: actionOn
            });
        
            dialogRef.afterClosed().subscribe(result => {                
                if(result){
                    this.contactList = this.contactList.filter((value,key)=>{
                        if(value.id == result.id){
                        value.firstName = result.firstName;
                        value.lastName = result.lastName;
                        value.phone = result.phone;
                        }
                        return true;
                    }) 
                
                }
            
            })

        }
        actionHandler(action:ACTION_TYPE,actionOn?:ContactListData){
            switch(action){
                case ACTION_TYPE.ADD:
                    this.openAddDialog();
                    break;
                case ACTION_TYPE.UPDATE:
                    this.openEditDialog(actionOn);
                    break;
                case ACTION_TYPE.DELETE:
                    this.deleteContact(actionOn);
                    break;
                }
            }

    }