import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./component";


const routes:Routes = [
{
    path: '',
    component: LandingComponent,
    children: [
        {
            path: '',
           loadChildren: () => import('../contact-list').then(cl => cl.ContactListModule)
            
        }
    ]
}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LandingRoutingModule {

}