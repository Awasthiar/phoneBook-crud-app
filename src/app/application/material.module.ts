import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";





@NgModule({
    imports: [
        CommonModule,
        // Material Modules 
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        
    
    ]
})
export class MaterialModule { 

}