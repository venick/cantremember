import { Hand, Team } from '@model/index';
import { createReducer, on } from '@ngrx/store';
import { newHand, deleteHand, updateHand, endGame } from './game.actions';
import { GameState } from './game.state';
import { bidToScore } from './game.utils';

const initialLeft: Team = {
  name: 'Left Team',
};
const initialRight: Team = {
  name: 'Right Team',
};
const initialGameState: GameState = {
  hands: [
    {
      id: 1,
      bid: { hands: null, suit: null },
      handsWon: null,
      team: null,
      win: null,
    },
  ],
  leftTeam: initialLeft,
  rightTeam: initialRight,
  teamList: [initialLeft, initialRight],
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
    const newState = {
      ...state,
      hands: state.hands.concat({ id: maxNo + 1, bid: {} }),
    };
    saveSate(newState);
    return newState;
  }),

  on(endGame, (state) => {
    saveSate(initialGameState);
    return { ...initialGameState };
  }),

  on(deleteHand, (state, props) => {
    if (props?.handId) {
      const newState = {
        ...state,
        hands: recalculate(
          state.hands.filter((x) => x.id !== props.handId),
          state.leftTeam?.name
        ),
      };
      saveSate(newState);
      return newState;
    }
  }),

  on(updateHand, (state, props) => {
    const newHand = props?.hand;
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

    const newState = { ...state, hands: recalculate(hands, state.leftTeam.name) };
    saveSate(newState);
    return newState;
  })
);

const recalculate = (oldHands: Hand[], leftTeamName: string): Hand[] => {
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
      if (hand.team?.name === leftTeamName) {
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

export function gameReducer(state, action) {
  return _gameReducer(state, action);
}
