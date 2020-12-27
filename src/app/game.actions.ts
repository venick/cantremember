import { Hand } from '@model/index';
import { createAction, props } from '@ngrx/store';

export const newHand = createAction('Game-NewHand');
export const deleteHand = createAction('Game-DeleteHand',props<{handId: number}>());
export const updateHand = createAction('Game-UpdateHand',props<{hand: Hand}>());
