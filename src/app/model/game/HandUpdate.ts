import { Bid } from '@model/game';
import { Team } from '@model/game';

export interface HandUpdate {
  id: number;
  bid?: Bid | null;
  team?: Team | null;
  win?: boolean | null;
  handsWon?: number | null;
}