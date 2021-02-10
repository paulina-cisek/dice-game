import { BaseScoreChecker } from './BaseScoreChecker';

export class LargeStraightScoreChecker extends BaseScoreChecker {
  constructor() {
    super('Large Straight');
    this.match = [2, 3, 4, 5, 6];
  }

  update = (values) => {
    var isEqual = JSON.stringify(values.sort()) === JSON.stringify(this.match);
    if (isEqual) return 35;
    else return 0;
  };
}
