import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ContactListDataService } from '../../service';
import { ContactDialogModel } from '../../model';
import { ACTION_TYPE } from '../../enum';

@Component({
  selector: 'cl-addEdit-contact',
  templateUrl: './cl-addEdit-contact.component.html',
  styleUrls: ['./cl-addEdit-contact.component.css']
})
export class ClAddEditContactComponent {

  constructor(public dialogRef: MatDialogRef<ClAddEditContactComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ContactDialogModel, public clService: ContactListDataService) { }

  formControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
  duplicateData = {...this.data.contact};
  action = this.data.action;
  actionType = ACTION_TYPE;

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
    this.dialogRef.close(this.duplicateData);
  }
}
