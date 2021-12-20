import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LandingComponent } from "./component";

export const components = [
    LandingComponent
]

export const providers = [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
]

export const exports = []