import { Bid } from '@model/index';

export function scoreToWinLose(score: number): string {
  const bid = scoreToBid(score < 0 ? -score : score);
  return `${score < 0 ? '-' : ''}${printBid(bid)}`;
}

export function scoreToBid(score: number): Bid {
  const mod = (score - 40) % 100;
  const hands = Math.floor((score - 40) / 100) + 6;
  let suit: 'S' | 'C' | 'D' | 'H' | 'N' = null;
  switch (mod) {
    case 80:
      suit = 'N';
      break;
    case 60:
      suit = 'H';
      break;
    case 40:
      suit = 'D';
      break;
    case 20:
      suit = 'C';
      break;
    case 0:
      suit = 'S';
      break;
  }
  return { hands: hands, suit };
}

export function bidToScore(bid: Bid): number {
  let mod = 0;
  switch (bid.suit) {
    case 'N':
      mod = 20;
      break;
    case 'H':
      mod = 0;
      break;
    case 'D':
      mod = -20;
      break;
    case 'C':
      mod = -40;
      break;
    case 'S':
      mod = -60;
      break;
  }
  return (bid.hands - 5) * 100 + mod;
}

export function printBid(bid: Bid): string {
  if (!bid || !bid.hands || !bid.suit) return null;

  switch (bid.suit) {
    case 'N':
      return `${bid.hands}⊗`;
    case 'H':
      return `${bid.hands}♡`;
    case 'D':
      return `${bid.hands}♢`;
    case 'C':
      return `${bid.hands}♧`;
    case 'S':
      return `${bid.hands}♤`;
  }
}
