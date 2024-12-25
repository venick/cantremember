import { Bid } from '@model/game';
import { Team } from '@model/game';

export interface Hand {
  id: number;
  bid?: Bid | null;
  team?: Team | null;

  delta?: number | null;
  win?: boolean | null;
  handsWon?: number | null;
  total?: number | null;

  selected?: boolean;
}
