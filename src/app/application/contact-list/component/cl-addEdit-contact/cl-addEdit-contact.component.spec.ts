import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing"
import { FormsModule } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/app/application/material.module";
import { ContactListRoutingModule } from "../../contact-list-routing.module";
import { ContactListDataService, ContactListEndpointService } from "../../service";
import { ClAddEditContactComponent } from "./cl-addEdit-contact.component";

describe('ClAddEditContactComponent', () => {
    let component: ClAddEditContactComponent;
    let fixture: ComponentFixture<ClAddEditContactComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                ContactListRoutingModule,
                MaterialModule,
                FormsModule,
                HttpClientModule,
                BrowserAnimationsModule
            ],
            declarations: [ClAddEditContactComponent],
            providers:[
                ContactListDataService, ContactListEndpointService,
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} }
            ],
        })
        .compileComponents();
        
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClAddEditContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    })

    it('testing action', () => {
       expect(component.actionType.ADD).toBe('ADD')
    });

    it('testing action', () => {
        expect(component.actionType.UPDATE).toBe('UPDATE')
    });
      
     
});