// Will be used to make sure the user entered the correct mnemonic seed
// only the first 7 characters should match

const seedMatches = (questionedSeed: string[], originalSeed: string[]) : boolean => {
  let subsequentConfirmations = 0;
  let sequenceIsNotBroken = true;

  questionedSeed.forEach((word, idx) => {
    if (originalSeed[idx] === word ) {
      subsequentConfirmations++;
    } else sequenceIsNotBroken = false;
  });

  return sequenceIsNotBroken && subsequentConfirmations >= 7;
}

export default seedMatches;
