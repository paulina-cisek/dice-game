import { BaseComboScoreChecker } from './score-checkers/BaseComboScoreChecker';
import { ChanceScoreChecker } from './score-checkers/ChanceScoreChecker';
import { PokerScoreChecker } from './score-checkers/PokerScoreChecker';
import { FourOfKindScoreChecker } from './score-checkers/FourOfKindScoreChecker';
import { ThreeOfKindScoreChecker } from './score-checkers/ThreeOfKindScoreChecker';
import { FullHouseScoreChecker } from './score-checkers/FullHouseScoreChecker';
import { LargeStraightScoreChecker } from './score-checkers/LargeStraightScoreChecker';
import { SmallStraightScoreChecker } from './score-checkers/SmallStraightScoreChecker';
import { OnePairScoreChecker } from './score-checkers/OnePairScoreChecker';
import { TwoPairsScoreChecker } from './score-checkers/TwoPairsScoreChecker';

const checks = {
  ones: new BaseComboScoreChecker('Ones', 1),
  twos: new BaseComboScoreChecker('Twos', 2),
  threes: new BaseComboScoreChecker('Threes', 3),
  fours: new BaseComboScoreChecker('Fours', 4),
  fives: new BaseComboScoreChecker('Fives', 5),
  sixes: new BaseComboScoreChecker('Sixes', 6),
  onePair: new OnePairScoreChecker(),
  twoPairs: new TwoPairsScoreChecker(),
  chance: new ChanceScoreChecker(),
  poker: new PokerScoreChecker(),
  fourOfKind: new FourOfKindScoreChecker(),
  threeOfKind: new ThreeOfKindScoreChecker(),
  fullHouse: new FullHouseScoreChecker(),
  largeStraight: new LargeStraightScoreChecker(),
  smallStraight: new SmallStraightScoreChecker(),
};

export const updateValues = (scores, diceValues, isFirstRoll) => {
  let newScores = { ...scores };
  for (let check in checks) {
    if (newScores[check].used === false) {
      newScores[check] = {
        ...newScores[check],
        value:
          isFirstRoll && !BonusKeys.includes(check)
            ? checks[check].update(diceValues) * 2
            : checks[check].update(diceValues),
      };
    }
  }
  newScores['bonus'] = getBonus(scores);
  return newScores;
};

export const BonusKeys = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'];

export const ScoresDisplay = {
  ones: 'Ones',
  twos: 'Twos',
  threes: 'Threes',
  fours: 'Fours',
  fives: 'Fives',
  sixes: 'Sixes',
  onePair: 'One pair',
  twoPairs: 'Two pairs',
  threeOfKind: 'Three of a kind',
  fourOfKind: 'Four of a kind',
  fullHouse: 'Full house',
  smallStraight: 'Small straight',
  largeStraight: 'Large straight',
  chance: 'Chance',
  poker: 'Poker',
};

export const getScoreBoardValues = (scores) => {
  if (!scores) return {};
  let scoreBoard = {};
  for (let item in ScoresDisplay) {
    scoreBoard[item] = {
      name: item,
      displayName: ScoresDisplay[item],
      value: scores.hasOwnProperty(item) ? scores[item] : 0,
      used: scores.hasOwnProperty(item),
    };
  }
  scoreBoard['bonus'] = getBonus(scores);
  return scoreBoard;
};

export const getTotalScore = (selected, userTotal) => {
  if (!selected || !selected.value) return userTotal;
  return selected.value + userTotal;
};

export const getBonus = (scores) => {
  let sum = 0;
  BonusKeys.forEach((key) => {
    if (scores.hasOwnProperty(key)) {
      if (scores[key].value !== undefined) sum += scores[key].value;
      else sum += scores[key];
    }
  });
  return sum >= 63 ? 35 : 0;
};
