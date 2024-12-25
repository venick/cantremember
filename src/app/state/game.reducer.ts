import { Hand, HandUpdate, Team } from '@model/game';
import { Action, createReducer, on } from '@ngrx/store';
import {
  newHand,
  deleteHand,
  updateHand,
  endGame,
  updateTeams,
} from './game.actions';
import { GameState } from './game.state';
import { bidToScore } from './game.utils';

const initialLeft: Team = {
  id: 'l1',
  name: 'Team 1',
};
const initialRight: Team = {
  id: 'r1',
  name: 'Team 2',
};
const initialGameState: GameState = {
  deviceId: 'did' + new Date().getTime() / 2,
  gameId: 'gid' + new Date().getTime(),
  gameStarted: new Date(),
  hands: [
    {
      id: 1,
      bid: { hands: null, suit: null },
      handsWon: null,
      team: null,
      win: null,
      started: new Date(),
      ended: null,
    },
  ],
  leftTeam: initialLeft,
  rightTeam: initialRight,
};

const saveSate = (state: GameState) => {
  localStorage.setItem('game', JSON.stringify(state));
};
const loadSate = (): GameState => {
  const state = localStorage.getItem('game');
  try {
    if (state) {
      const gameState: GameState = JSON.parse(state);
      return gameState;
    }
  } catch {}
  return initialGameState;
};

export const initialState: GameState = loadSate();

const _gameReducer = createReducer(
  initialState,
  on(newHand, (state) => {
    const maxNo =
      state.hands.length > 0
        ? Math.max.apply(
            Math,
            state.hands.map((o) => o.id)
          )
        : 0;

    // copy exisitng hands
    let newHands = [...state.hands];
    // end the last hand
    newHands[newHands.length - 1] = {
      ...newHands[newHands.length - 1],
      ended: new Date(),
    };
    // add a new blank hand
    newHands = newHands.concat({
      id: maxNo + 1,
      bid: {},
      started: new Date(),
      ended: null,
    });

    const newState = {
      ...state,
      hands: newHands,
    };
    saveSate(newState);
    return newState;
  }),

  on(endGame, (state) => {
    const newState = {
      ...state,
      hands: initialGameState.hands,
      gameId: 'gid' + new Date().getTime(),
      gameStarted: new Date(),
    };
    saveSate(newState);
    return { ...newState };
  }),

  on(deleteHand, (state, props) => {
    if (!!props?.handId) {
      const newState = {
        ...state,
        hands: recalculate(
          state.hands.filter((x) => x.id !== props.handId),
          state.leftTeam?.id
        ),
      };
      saveSate(newState);
      return newState;
    }
    return state;
  }),

  on(updateTeams, (state, props) => {
    if (!props?.left || !props?.right) return state;
    const newState = {
      ...state,
      leftTeam: props.left,
      rightTeam: props.right,
    };
    saveSate(newState);
    return newState;
  }),

  on(updateHand, (state, props) => {
    if (!props?.hand) return state;

    const newHand: HandUpdate = props?.hand;
    let index = state.hands.findIndex((x) => x.id === props.hand.id);
    let hand = state.hands[index];

    if (newHand.bid?.hands != null) {
      if (!hand.bid) hand.bid = {};
      hand = {
        ...hand,
        bid: { ...hand.bid, hands: newHand.bid.hands },
      };
    }
    if (newHand.bid?.suit != null) {
      if (!hand.bid) hand.bid = {};
      hand = {
        ...hand,
        bid: { ...hand.bid, suit: newHand.bid.suit },
      };
    }
    if (newHand.handsWon != null) {
      hand = { ...hand, handsWon: newHand.handsWon };
    }
    if (newHand.team != null) {
      hand = { ...hand, team: newHand.team };
    }
    if (newHand.win != null) {
      hand = { ...hand, win: newHand.win };
    }

    const hands: Hand[] = state.hands.map((x) => x);
    hands[index] = hand;

    const newState = {
      ...state,
      hands: recalculate(hands, state.leftTeam.id),
    };
    saveSate(newState);
    return newState;
  })
);

const recalculate = (oldHands: Hand[], leftTeamId: string): Hand[] => {
  let leftTotal = 0;
  let rightTotal = 0;
  let hands: Hand[] = [];
  for (let i = 0; i < oldHands.length; i++) {
    const hand = { ...oldHands[i] };
    if (isHandValid(hand)) {
      hand.delta = (hand.win ? 1 : -1) * bidToScore(hand.bid);
      if (hand.handsWon === 10 && hand.win) {
        hand.delta = Math.max(hand.delta, 250);
      }
      if (hand.team?.id === leftTeamId) {
        leftTotal += hand.delta;
        hand.total = leftTotal;
      } else {
        rightTotal += hand.delta;
        hand.total = rightTotal;
      }
    }
    hands.push(hand);
  }
  return hands;
};

const isHandValid = (hand: Hand) => {
  return (
    hand && hand.bid && hand.team && (hand.win === true || hand.win === false)
  );
};

export function gameReducer(state: GameState | undefined, action: Action) {
  return _gameReducer(state, action);
}
