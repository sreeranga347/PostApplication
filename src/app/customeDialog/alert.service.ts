import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertCustomDialogComponent } from './alert-custom-dialog/alert-custom-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private dialog:MatDialog) { }

  openDialog(msg) {
    return this.dialog.open(AlertCustomDialogComponent,
      {
        width: '280px',
        disableClose: true,
        data: {
          message: msg
        }
      }
    )
  }
}





 


