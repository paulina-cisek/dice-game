export class BaseScoreChecker {
  constructor(name) {
    this.match = 0;
    this.name = name;
  }

  getCount = (values) => {
    let matches = {};
    values.forEach((item) => {
      if (matches[item]) matches[item] += 1;
      else matches[item] = 1;
    });
    return matches;
  };

  getMatchCount = (arr, val) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) if (arr[i] === val) count++;
    return count;
  };

  update = (values) => {};
}
