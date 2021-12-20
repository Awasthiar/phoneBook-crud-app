import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { 
    ClAddContactComponent,
    ClDashboardComponent
} from "./component";
import { ClEditContactComponent } from "./component/cl-edit-contact/cl-edit-contact.component";
import { ContactListDataService, ContactListEndpointService } from "./service";

export const components = [
    ClDashboardComponent,
    ClAddContactComponent,
    ClEditContactComponent
];

export const providers = [ContactListDataService, ContactListEndpointService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }]

export const exports = []
