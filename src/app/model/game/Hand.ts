import { Bid } from '@model/game';
import { Team } from '@model/game';

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
