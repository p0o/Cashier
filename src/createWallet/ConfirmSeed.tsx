import React, { useState, useEffect } from 'react';
import { Row, Button, Select } from 'antd';

const Option = Select.Option;

type Props = {
  goToNextStep: () => void,
  seed: string,
};

function ConfirmSeed({ goToNextStep, seed }: Props) {
  const seedSelectChildren = seed.split(' ').map(mnemonicWord =>
    <Option key={mnemonicWord}>{mnemonicWord}</Option>
  );

  return (
    <React.Fragment>
      <Row>Please enter your seed below so we can confirm you stored it safely. Press Enter after each word.</Row>
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
