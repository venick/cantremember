import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bid, Hand, Team } from '@model/game';
import { Store } from '@ngrx/store';
import {
  deleteHand,
  endGame,
  newHand,
  updateHand,
  updateTeams,
} from 'app/state/game.actions';
import { GameState } from 'app/state/game.state';
import { printBid, scoreToWinLose } from 'app/state/game.utils';
import { Observable } from 'rxjs';

import { DeleteHandDialog } from './delete-hand-dialog/delete-hand-dialog';
import { NewGameDialog } from './new-game-dialog/new-game-dialog';
import { TeamNameChangeDialog } from './team-name-change-dialog/team-name-change-dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss'],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatButtonToggleModule,
  ],
})
export class ScoreSheetComponent implements OnInit {
  game$: Observable<GameState>;
  displayedColumns = [
    'handNo',
    'leftTotal',
    'leftBid',
    'rightBid',
    'rightTotal',
  ];
  leftTeam: Team | undefined;
  rightTeam: Team | undefined;
  selectedRow: Hand | null | undefined = null;
  dataSource: Hand[] = [];

  constructor(
    private dialog: MatDialog,
    private store: Store<{ game: GameState }>
  ) {
    this.game$ = store.select('game');
  }

  ngOnInit(): void {
    this.game$.subscribe((x) => {
      this.dataSource = x.hands;
      this.leftTeam = x.leftTeam;
      this.rightTeam = x.rightTeam;
      if (x.hands.length > 0) {
        this.selectedRow = x.hands.find((x) => x.id === this.selectedRow?.id);
        if (!this.selectedRow) {
          this.selectedRow = x.hands[x.hands.length - 1];
        }
      }
    });
  }

  isLeft(hand: Hand) {
    return hand?.team?.id == this.leftTeam?.id && this.isRowValid(hand);
  }
  isRight(hand: Hand) {
    return hand?.team?.id == this.rightTeam?.id && this.isRowValid(hand);
  }

  get toWinLoseLeft(): string {
    const rev = this.dataSource
      .filter((x) => x.team?.id == this.leftTeam?.id)
      .reverse();
    return rev.length > 0 && rev[0].total
      ? rev[0].total > 0
        ? scoreToWinLose(500 - rev[0].total)
        : scoreToWinLose(-500 - rev[0].total)
      : scoreToWinLose(500);
  }

  get toWinLoseRight(): string {
    const rev = this.dataSource
      .filter((x) => x.team?.id == this.rightTeam?.id)
      .reverse();
    return rev.length > 0 && rev[0].total
      ? rev[0].total > 0
        ? scoreToWinLose(500 - rev[0].total)
        : scoreToWinLose(-500 - rev[0].total)
      : scoreToWinLose(500);
  }

  onTeamNameClick() {
    const dialogRef = this.dialog.open(TeamNameChangeDialog, {
      width: '290px',
      data: {
        left: this.leftTeam,
        right: this.rightTeam,
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.store.dispatch(updateTeams(result));
      }
    });
  }

  get isNewHandPermitted() {
    if (this.dataSource.length === 0) return true;

    const last = this.dataSource[this.dataSource.length - 1];
    return this.isRowValid(last);
  }

  isRowValid(row: Hand) {
    return (
      row &&
      row.bid?.hands &&
      row.bid?.suit &&
      row.team &&
      (row.win === true || row.win === false)
    );
  }

  printBid(bid: Bid) {
    return printBid(bid);
  }

  get selectedTeam(): string | null {
    return this.selectedRow?.team?.id === this.leftTeam?.id
      ? 'left'
      : this.selectedRow?.team?.id === this.rightTeam?.id
      ? 'right'
      : null;
  }
  onTeamChange(team: string) {
    if (this.selectedRow && team) {
      this.store.dispatch(
        updateHand({
          hand: {
            id: this.selectedRow.id,
            team: team === 'left' ? this.leftTeam : this.rightTeam,
          },
        })
      );
    }
  }

  get selectedHands(): string | undefined {
    return this.selectedRow?.bid?.hands?.toString();
  }
  onHandsChange(handCount: string) {
    if (this.selectedRow) {
      this.store.dispatch(
        updateHand({
          hand: {
            id: this.selectedRow.id,
            bid: { hands: parseInt(handCount) },
          },
        })
      );
    }
  }

  get selectedSuit(): string | undefined | null {
    return this.selectedRow?.bid?.suit;
  }
  onSuitChange(suit: 'S' | 'C' | 'D' | 'H' | 'N') {
    if (this.selectedRow && suit) {
      this.store.dispatch(
        updateHand({
          hand: {
            id: this.selectedRow.id,
            bid: { suit },
          },
        })
      );
    }
  }

  get selectedOutcome(): string | undefined {
    return this.selectedRow?.win?.toString();
  }
  onOutcomeChange(outcome: string) {
    if (this.selectedRow) {
      this.store.dispatch(
        updateHand({
          hand: { id: this.selectedRow.id, win: outcome === 'true' },
        })
      );
    }
  }

  get selectedHandsWon(): string | undefined {
    return this.selectedRow?.handsWon?.toString();
  }
  onHandsWonChange(handsWon: string) {
    if (this.selectedRow) {
      this.store.dispatch(
        updateHand({
          hand: { id: this.selectedRow.id, handsWon: parseInt(handsWon) },
        })
      );
    }
  }

  onNewHandClick() {
    if (this.isNewHandPermitted) {
      this.selectedRow = null;
      this.store.dispatch(newHand());
    }
  }

  onDeleteClick() {
    if (this.selectedRow) {
      const thisSelectedRow = this.selectedRow;
      const dialogRef = this.dialog.open(DeleteHandDialog, {
        width: '260px',
        data: {},
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.store.dispatch(deleteHand({ handId: thisSelectedRow.id }));
        }
      });
    }
  }

  get isGameComplete() {
    return (
      this.dataSource.findIndex(
        (x) => !!x.total && (x.total >= 500 || x.total <= -500)
      ) >= 0
    );
  }

  onEndGameClick() {
    const dialogRef = this.dialog.open(NewGameDialog, {
      width: '260px',
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(endGame());
      }
    });
  }
}
