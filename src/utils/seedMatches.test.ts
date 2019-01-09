
import seedMatches from './seedMatches';
import shuffle from './shuffle';

const sampleMnemonic = 'disagree tide elbow citizen jazz cinnamon bridge certain april settle pact film always inmate border inform solution that submit produce cloth balcony upper maid';
const seed = sampleMnemonic.split(' ');

it('match correct first seven or more words', () => {
  expect(seedMatches(seed.slice(0, 7), seed)).toEqual(true);
  expect(seedMatches(seed.slice(0, 8), seed)).toEqual(true);
  expect(seedMatches(seed.slice(0, 12), seed)).toEqual(true);
});

it('doesn\'t match a shuffled seven words', () => {
  const shuffledSeed = shuffle(seed.slice(0, 7));
  expect(seedMatches(shuffledSeed, seed)).toEqual(false);
});
