import { BaseScoreChecker } from './BaseScoreChecker';

export class FullHouseScoreChecker extends BaseScoreChecker {
  constructor() {
    super('Full House');
  }

  update = (values) => {
    const set = new Set(values);
    if (set.size === 2) {
      for (let item of set) {
        let count = this.getMatchCount(values, item);
        if (count === 3 || count === 2) {
          return 25;
        } else return 0;
      }
    }
    return 0;
  };
}
