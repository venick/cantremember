export interface ScoreRow {
  handNo: number;

  leftTotal?: number;
  leftDelta?: number;
  leftBid?: Bid;

  rightTotal?: number;
  rightDelta?: number;
  rightBid?: Bid;

  selected?: boolean;
}

export interface Hand {
  id: number;
  bid?: Bid;
  team?: Team;

  delta?: number;
  win?: boolean;
  handsWon?: number;
  total?: number;

  selected?: boolean;
}

export interface Bid {
  hands?: number;
  suit?: 'S' | 'C' | 'D' | 'H' | 'N';
}

export interface Team {
  name: string;
  side: 'left' | 'right';
}
