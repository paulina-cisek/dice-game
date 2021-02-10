import { BaseScoreChecker } from './BaseScoreChecker';

export class ChanceScoreChecker extends BaseScoreChecker {
  constructor() {
    super('Chance');
  }

  update = (values) => {
    let result = values.reduce((prev, curr) => {
      return prev + curr;
    });
    return result;
  };
}
