import { Hand } from '@model/game';
import { createAction, props } from '@ngrx/store';

export const newHand = createAction('Game-NewHand');
export const endGame = createAction('Game-EndGame');
export const deleteHand = createAction(
  'Game-DeleteHand',
  props<{ handId: number }>()
);
export const updateHand = createAction(
  'Game-UpdateHand',
  props<{ hand: Hand }>()
);
