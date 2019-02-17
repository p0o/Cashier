import React, { useState, useEffect } from 'react';
import { Row, Button, Select } from 'antd';
import shuffle from '../utils/shuffle';
import seedMatches from '../utils/seedMatches';

const Option = Select.Option;

type Props = {
  goToNextStep: () => void;
  mnemonic: string;
};

function ConfirmSeed({ goToNextStep, mnemonic }: Props) {
  const [enteredMnemonic, setEnteredMnemonic] = useState(['']);
  const wordList: Array<string> = mnemonic.split(' ');

  const mnemonicSelectChildren = shuffle(
    wordList
      .filter(x => !enteredMnemonic.includes(x))
      .slice(0, 3)
      .map(mnemonicWord => <Option key={mnemonicWord}>{mnemonicWord}</Option>)
  );

  const handleMnemonicConfirmation = (mnemonicValues: any): void => {
    setEnteredMnemonic(mnemonicValues);
  };

  const mnemonicIsMatched = seedMatches(enteredMnemonic, wordList);

  return (
    <React.Fragment>
      {!mnemonicIsMatched ? (
        <Row>
          Please type-in your seed below so we can confirm you stored it safely.
          The first 7 words are enough to confirm.
        </Row>
      ) : (
        <Row>
          Seems like you really wrote down your seed! Click on the button below
          to get into your wallet soon!
        </Row>
      )}

      <Row style={{ marginTop: 16 }}>
        <Select
          style={{ width: '100%' }}
          mode="multiple"
          placeholder="Choose your recovery seed words, one by one"
          onChange={handleMnemonicConfirmation}
          disabled={mnemonicIsMatched}
          open={!mnemonicIsMatched}
        >
          {mnemonicSelectChildren}
        </Select>
      </Row>

      <Row style={{ marginTop: 16 }}>
        {mnemonicIsMatched && (
          <Button type="primary" onClick={goToNextStep}>
            Open Wallet
          </Button>
        )}
      </Row>
    </React.Fragment>
  );
}

export default ConfirmSeed;
