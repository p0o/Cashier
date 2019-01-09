import React, { useState, useEffect } from 'react';
import { Row, Button, Select } from 'antd';
import shuffle from '../utils/shuffle';

const Option = Select.Option;

type Props = {
  goToNextStep: () => void,
  seed: string,
};

function ConfirmSeed({ goToNextStep, seed }: Props) {
  const seedSelectChildren = shuffle(seed.split(' ')).map(mnemonicWord =>
    <Option key={mnemonicWord}>{mnemonicWord}</Option>
  );

  return (
    <React.Fragment>
      <Row>Please type-in your seed below so we can confirm you stored it safely. The first 7 words are enough to confirm.</Row>
      <Row style={{marginTop: 16}}>
        <Select
          style={{width: '100%'}}
          mode="tags"
          placeholder="Choose your recovery seed words, one by one"
        >
          { seedSelectChildren }
        </Select>
      </Row>
    </React.Fragment>
  );
}

export default ConfirmSeed;
