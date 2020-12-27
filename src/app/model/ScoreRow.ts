import { Bid } from '@model/Bid';
import { Team } from '@model/Team';

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
