import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bid, Hand, Team } from '@model/ScoreRow';

import { DeleteHandDialog } from './delete-hand-dialog/delete-hand-dialog';
import { TeamNameChangeDialog } from './team-name-change-dialog/team-name-change-dialog';

@Component({
  selector: 'score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss'],
})
export class ScoreSheetComponent implements OnInit {
  displayedColumns = [
    'handNo',
    'leftTotal',
    'leftBid',
    'rightBid',
    'rightTotal',
  ];
  leftTeam: Team = { name: 'Dream Team', side: 'left' };
  rightTeam: Team = { name: 'Shit Cunts', side: 'right' };
  selectedRow: Hand = null;
  dataSource: Hand[] = [];
  //   {
  //     id: 1,
  //     team: this.leftTeam,
  //     delta: 120,
  //     bid: { hands: 6, suit: 'N' },
  //     total: 120,
  //     win: true,
  //   },
  //   {
  //     id: 2,
  //     team: this.rightTeam,
  //     delta: -200,
  //     bid: { hands: 7, suit: 'H' },
  //     total: -200,
  //     handsWon: 7,
  //     win: false,
  //   },
  //   {
  //     id: 3,
  //     team: this.leftTeam,
  //     delta: 60,
  //     bid: { hands: 10, suit: 'C' },
  //     total: 400,
  //     win: true,
  //   },
  //   {
  //     id: 4,
  //     team: this.rightTeam,
  //     delta: 250,
  //     handsWon: 10,
  //     bid: { hands: 7, suit: 'D' },
  //     total: 120,
  //     win: true,
  //   },
  //   {
  //     id: 5,
  //     team: this.rightTeam,
  //     delta: 120,
  //     bid: { hands: 6, suit: 'H' },
  //     total: 120,
  //     win: true,
  //   },
  //   {
  //     id: 6,
  //     team: this.leftTeam,
  //     delta: -200,
  //     bid: { hands: 7, suit: 'H' },
  //     total: 340,
  //     win: false,
  //   },
  // ];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = [];
    this.onNewHandClick();
  }

  get toWinLoseLeft(): number {
    const rev = this.dataSource
      .filter((x) => x.team == this.leftTeam)
      .reverse();
    return rev.length > 0
      ? rev[0].total > 0
        ? 500 - rev[0].total
        : -500 - rev[0].total
      : 0;
  }

  get toWinLoseRight(): number {
    const rev = this.dataSource
      .filter((x) => x.team == this.rightTeam)
      .reverse();
    return rev.length > 0
      ? rev[0].total > 0
        ? 500 - rev[0].total
        : -500 - rev[0].total
      : 0;
  }

  printBid(bid: Bid) {
    if (!bid) return null;

    switch (bid.suit) {
      case 'N':
        return `${bid.hands}⊗`;
      case 'H':
        return `${bid.hands}♡`;
      case 'D':
        return `${bid.hands}♢`;
      case 'C':
        return `${bid.hands}♧`;
      case 'S':
        return `${bid.hands}♤`;
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
          this.dataSource = this.dataSource.filter(
            (x) => x.id !== this.selectedRow.id
          );
          this.recalculate();
        }
      });
    }
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

  get selectedTeam(): string {
    return this.selectedRow?.team?.side;
  }
  onTeamChange(team: string) {
    if (this.selectedRow && team) {
      this.selectedRow.team = team === 'left' ? this.leftTeam : this.rightTeam;
    }
  }

  get selectedHands(): string {
    return this.selectedRow?.bid?.hands?.toString();
  }
  onHandsChange(handCount: string) {
    if (this.selectedRow && handCount) {
      if (!this.selectedRow.bid) {
        this.selectedRow.bid = {};
      }
      this.selectedRow.bid.hands = parseInt(handCount);
    }
  }

  get selectedSuit(): string {
    return this.selectedRow?.bid?.suit;
  }
  onSuitChange(suit: 'S' | 'C' | 'D' | 'H' | 'N') {
    if (this.selectedRow && suit) {
      if (!this.selectedRow.bid) {
        this.selectedRow.bid = {};
      }
      this.selectedRow.bid.suit = suit;
    }
  }

  get selectedOutcome(): string {
    return this.selectedRow?.win?.toString();
  }
  onOutcomeChange(outcome: string) {
    if (this.selectedRow && outcome) {
      this.selectedRow.win = outcome === 'true';
    }
  }
  get selectedHandsWon(): string {
    return this.selectedRow?.handsWon?.toString();
  }
  onHandsWonChange(handsWon: string) {
    if (this.selectedRow && handsWon) {
      this.selectedRow.handsWon = parseInt(handsWon);
    }
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

  recalculate() {
    let leftTotal = 0;
    let rightTotal = 0;
    this.dataSource.forEach((x: Hand) => {
      if (this.isRowValid(x)) {
        x.delta = (x.win ? 1 : -1) * this.getBidValue(x.bid);
        if (x.handsWon === 10 && x.win) {
          x.delta = Math.max(x.delta, 250);
        }
        if (x.team.side === 'left') {
          leftTotal += x.delta;
          x.total = leftTotal;
        } else {
          rightTotal += x.delta;
          x.total = rightTotal;
        }
      }
    });
  }

  getBidValue(bid: Bid): number {
    let mod = 0;
    switch (bid.suit) {
      case 'N':
        mod = 20;
        break;
      case 'H':
        mod = 0;
        break;
      case 'D':
        mod = -20;
        break;
      case 'C':
        mod = -40;
        break;
      case 'S':
        mod = -60;
        break;
    }
    return (bid.hands - 5) * 100 + mod;
  }

  onNewHandClick() {
    const maxNo =
      this.dataSource?.length > 0
        ? Math.max.apply(
            Math,
            this.dataSource.map((o) => o.id)
          )
        : 0;
    this.recalculate();
    this.dataSource = this.dataSource.concat({
      id: maxNo + 1,
    });
    this.selectedRow = this.dataSource[this.dataSource.length - 1];
  }
}
