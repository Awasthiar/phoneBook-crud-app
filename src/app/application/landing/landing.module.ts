import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ContactListModule } from "../contact-list";
import { MaterialModule } from "../material.module";
import { components, providers } from "./declaration";
import { LandingRoutingModule } from "./landing-routing.module";

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        LandingRoutingModule,
        HttpClientModule,
        ContactListModule,
        MaterialModule
    ],
    providers: providers,
    exports: components
})
export class LandingModule { }
