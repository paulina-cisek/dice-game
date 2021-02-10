import { BaseScoreChecker } from './BaseScoreChecker';

export class PokerScoreChecker extends BaseScoreChecker {
  constructor() {
    super('Poker');
  }

  update = (values) => {
    const set = new Set(values);
    if (set.size === 1) return 50;
    return 0;
  };
}
