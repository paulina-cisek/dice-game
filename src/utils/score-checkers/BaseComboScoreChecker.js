import { BaseScoreChecker } from './BaseScoreChecker';

export class BaseComboScoreChecker extends BaseScoreChecker {
  constructor(name, match) {
    super(name);
    this.match = match;
  }

  update = (values) => {
    let result = values.filter((item) => item === this.match);
    return result.length * this.match;
  };
}
