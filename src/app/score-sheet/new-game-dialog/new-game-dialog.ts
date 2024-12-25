import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'new-game-dialog',
  templateUrl: './new-game-dialog.html',
  styleUrls: ['./new-game-dialog.scss'],
  imports: [MatDialogModule],
})
export class NewGameDialog {}
