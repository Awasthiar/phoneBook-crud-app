import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClDashboardComponent } from './component';

const routes: Routes = [
    {
        path: '',
        component: ClDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactListRoutingModule { }
