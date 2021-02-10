import { BaseScoreChecker } from './BaseScoreChecker';

export class OnePairScoreChecker extends BaseScoreChecker {
  constructor() {
    super('Pair');
  }

  update = (values) => {
    let counter = this.getCount(values);
    let matches = [];
    for (let item in counter) {
      if (counter[item] >= 2) matches.push(2 * parseInt(item));
    }
    if (matches.length === 0) return 0;
    if (matches.length === 1) return matches[0];
    else return Math.max(...matches);
  };
}
