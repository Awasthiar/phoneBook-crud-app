import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { ContactListRoutingModule } from "./contact-list-routing.module";
import { components, providers } from "./declaration";

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        ContactListRoutingModule,
        MaterialModule,
        FormsModule

        
    ],
    providers: providers,
    exports: components
})
export class ContactListModule { }