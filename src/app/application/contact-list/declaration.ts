import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { 
    ClAddEditContactComponent,
    ClDashboardComponent
} from "./component";
import { ContactListDataService, ContactListEndpointService } from "./service";

export const components = [
    ClDashboardComponent,
    ClAddEditContactComponent
];

export const providers = [ContactListDataService, ContactListEndpointService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }]

export const exports = []
