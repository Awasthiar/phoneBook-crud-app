import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ContactListData } from '../../model';
import { ContactListDataService } from '../../service';

@Component({
  selector: 'cl-add-contact',
  templateUrl: './cl-add-contact.component.html',
  styleUrls: ['./cl-add-contact.component.css']
})

export class ClAddContactComponent {
  constructor(public dialogRef: MatDialogRef<ClAddContactComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ContactListData,
              public clService: ContactListDataService) { }

  formControl = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
        '';
  }

  submit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public addContact(): void {
    this.dialogRef.close(this.data);
  }
}
