import React, { useState, useEffect } from 'react';
import { Row, Button, Select } from 'antd';
import shuffle from '../utils/shuffle';
import seedMatches from '../utils/seedMatches';

const Option = Select.Option;

type Props = {
  goToNextStep: () => void,
  seed: string,
};

function ConfirmSeed({ goToNextStep, seed }: Props) {
  const [enteredSeed, setEnteredSeed] = useState(['']);
  const seedList = seed.split(' ');

  const seedSelectChildren = shuffle(
    seedList.filter(x => !enteredSeed.includes(x))
    .slice(0, 3)
    .map(mnemonicWord => <Option key={mnemonicWord}>{mnemonicWord}</Option>)
  );

  const handleSeedConfirmation = (seedValues : any) : void => {
    setEnteredSeed(seedValues);
  }

  return (
    <React.Fragment>
      <Row>Please type-in your seed below so we can confirm you stored it safely. The first 7 words are enough to confirm.</Row>
      <Row style={{marginTop: 16}}>
        <Select
          style={{width: '100%'}}
          mode="multiple"
          placeholder="Choose your recovery seed words, one by one"
          onChange={handleSeedConfirmation}
        >
          { seedSelectChildren }
        </Select>
      </Row>
      <Row>
        { seedMatches(enteredSeed, seedList) &&
          <Button onClick={goToNextStep}>Done</Button>
        }
      </Row>
    </React.Fragment>
  );
}

export default ConfirmSeed;
