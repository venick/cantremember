import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Team } from '@model/game';

@Component({
  selector: 'team-name-change-dialog',
  templateUrl: './team-name-change-dialog.html',
  styleUrls: ['./team-name-change-dialog.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
  ],
})
export class TeamNameChangeDialog {
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { left: Team; right: Team }
  ) {
    this.form = new FormGroup({
      leftTeam: new FormControl(data?.left?.name, Validators.minLength(1)),
      rightTeam: new FormControl(data?.right?.name),
    });
  }
}
