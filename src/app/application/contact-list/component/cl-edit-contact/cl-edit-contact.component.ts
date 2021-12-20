import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ContactListDataService } from '../../service';

@Component({
  selector: 'cl-edit-contact',
  templateUrl: './cl-edit-contact.component.html',
  styleUrls: ['./cl-edit-contact.component.css']
})
export class ClEditContactComponent {

  constructor(public dialogRef: MatDialogRef<ClEditContactComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public clService: ContactListDataService) { }

  formControl = new FormControl('', [Validators.required, Validators.minLength(10)]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
    this.formControl.hasError('minlength') ? 'Minlength is 10':
        '';
  }


  submit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateContact(): void {
        this.dialogRef.close(this.data);
  }
}
