import { Bid } from '@model/index';
import { Team } from '@model/index';

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
