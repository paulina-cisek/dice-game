import { BaseScoreChecker } from './BaseScoreChecker';

export class SmallStraightScoreChecker extends BaseScoreChecker {
  constructor() {
    super('Small Straight');
    this.match = [1, 2, 3, 4, 5];
  }

  update = (values) => {
    var isEqual = JSON.stringify(values.sort()) === JSON.stringify(this.match);
    if (isEqual) {
      return 30;
    }
    return 0;
  };
}
