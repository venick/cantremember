import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'delete-hand-dialog',
  templateUrl: './delete-hand-dialog.html',
  styleUrls: ['./delete-hand-dialog.scss'],
  imports: [MatDialogModule],
})
export class DeleteHandDialog {}
