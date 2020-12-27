import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Team } from '@model/index';

@Component({
  selector: 'team-name-change-dialog',
  templateUrl: './team-name-change-dialog.html',
  styleUrls: ['./team-name-change-dialog.scss'],
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
