import { BaseScoreChecker } from './BaseScoreChecker';

export class FourOfKindScoreChecker extends BaseScoreChecker {
  constructor() {
    super('Four of a kind');
  }

  update = (values) => {
    let counter = this.getCount(values);
    for (let item in counter) {
      if (counter[item] >= 4) return 4 * parseInt(item);
    }
    return 0;
  };
}
