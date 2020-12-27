import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bid, Hand, Team } from '@model/index';
import { Store } from '@ngrx/store';
import { deleteHand, newHand, updateHand } from 'app/game.actions';
import { GameState } from 'app/game.state';
import { Observable } from 'rxjs';
import { scoreToWinLose, printBid } from '../game.utils';

import { DeleteHandDialog } from './delete-hand-dialog/delete-hand-dialog';
import { TeamNameChangeDialog } from './team-name-change-dialog/team-name-change-dialog';

@Component({
  selector: 'score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss'],
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
  leftTeam: Team;
  rightTeam: Team;
  selectedRow: Hand = null;
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
    return hand?.team?.name == this.leftTeam?.name && this.isRowValid(hand);
  }
  isRight(hand: Hand) {
    return hand?.team?.name == this.rightTeam?.name && this.isRowValid(hand);
  }

  get toWinLoseLeft(): string {
    const rev = this.dataSource
      .filter((x) => x.team?.name == this.leftTeam?.name)
      .reverse();
    return rev.length > 0
      ? rev[0].total > 0
        ? scoreToWinLose(500 - rev[0].total)
        : scoreToWinLose(-500 - rev[0].total)
      : scoreToWinLose(500);
  }

  get toWinLoseRight(): string {
    const rev = this.dataSource
      .filter((x) => x.team?.name == this.rightTeam?.name)
      .reverse();
    return rev.length > 0
      ? rev[0].total > 0
        ? scoreToWinLose(500 - rev[0].total)
        : scoreToWinLose(-500 - rev[0].total)
      : scoreToWinLose(500);
  }

  onTeamNameClick() {
    const dialogRef = this.dialog.open(TeamNameChangeDialog, {
      width: '260px',
      data: {
        left: this.leftTeam,
        right: this.rightTeam,
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.leftTeam.name = result.left.name ?? 'Left';
        this.rightTeam.name = result.right.name ?? 'Right';
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
      row && row.bid && row.team && (row.win === true || row.win === false)
    );
  }
  
  printBid(bid: Bid) {
    return printBid(bid);
  }

  get selectedTeam(): string {
    return this.selectedRow?.team == this.leftTeam
      ? 'left'
      : this.selectedRow?.team == this.rightTeam
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

  get selectedHands(): string {
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

  get selectedSuit(): string {
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

  get selectedOutcome(): string {
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

  get selectedHandsWon(): string {
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
      const dialogRef = this.dialog.open(DeleteHandDialog, {
        width: '260px',
        data: {},
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.store.dispatch(deleteHand({ handId: this.selectedRow.id }));
        }
      });
    }
  }
}
