import { Component } from '@angular/core';
import { ScoreSheetComponent } from './score-sheet/score-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ScoreSheetComponent],
  providers: [],
})
export class AppComponent {
  title = "Can't Remember";
}
