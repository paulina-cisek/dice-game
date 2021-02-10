import { BaseScoreChecker } from './BaseScoreChecker';

export class TwoPairsScoreChecker extends BaseScoreChecker {
  constructor() {
    super('Two Pairs');
  }

  update = (values) => {
    let counter = this.getCount(values);
    let matches = [];
    for (let item in counter) {
      if (counter[item] >= 4) {
        return 4 * parseInt(item);
      } else if (counter[item] >= 2) {
        matches.push(2 * parseInt(item));
      }
    }
    if (matches.length !== 2) return 0;
    else return matches[0] + matches[1];
  };
}
