import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { DeleteHandDialog } from './score-sheet/delete-hand-dialog/delete-hand-dialog';
import { NewGameDialog } from './score-sheet/new-game-dialog/new-game-dialog';
import { ScoreSheetComponent } from './score-sheet/score-sheet.component';
import { TeamNameChangeDialog } from './score-sheet/team-name-change-dialog/team-name-change-dialog';
import { gameReducer } from './state/game.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ScoreSheetComponent,
    DeleteHandDialog,
    NewGameDialog,
    TeamNameChangeDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({ game: gameReducer }, {}),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
