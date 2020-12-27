import { Hand, Team} from '@model/index';

export interface GameState{
    leftTeam: Team;
    rightTeam: Team;
    teamList: Team[];
    hands: Hand[];
}