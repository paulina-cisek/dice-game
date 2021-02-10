import { BaseScoreChecker } from './BaseScoreChecker';

export class ThreeOfKindScoreChecker extends BaseScoreChecker {
  constructor() {
    super('Three of a kind');
  }

  update = (values) => {
    let counter = this.getCount(values);
    for (let item in counter) {
      if (counter[item] >= 3) return 3 * parseInt(item);
    }
    return 0;
  };
}
