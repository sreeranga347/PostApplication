import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-custom-dialog',
  templateUrl: './alert-custom-dialog.component.html',
  styleUrls: ['./alert-custom-dialog.component.css']
})
export class AlertCustomDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AlertCustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
