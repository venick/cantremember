import { Hand, Team } from '@model/game';

export interface GameState {
  deviceId: string,
  gameId: string,
  leftTeam: Team;
  rightTeam: Team;
  hands: Hand[];
  gameStarted: Date;
}
