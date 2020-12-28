import { Hand, Team} from '@model/game';

export interface GameState{
    leftTeam: Team;
    rightTeam: Team;
    hands: Hand[];
}