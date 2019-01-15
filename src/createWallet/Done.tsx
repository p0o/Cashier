import React, { useState, useEffect } from 'react';
import { Row, Button, Input, Checkbox } from 'antd';
import { goTo } from 'route-lite';

import WalletManager from '../walletManager/WalletManager';

type Props = {
  
};

function Done(props : Props) {

  const [accName, setAccName] = useState('');

  function handleSaveWallet() {
    goTo(WalletManager);
  }

  return (
    <React.Fragment>
      <Row>
        <p>Pick a name for your profile. With every profile you can have a different BCH address and personal details.</p>
        <Input
          placeholder="Enter Account Name"
          onChange={e => setAccName(e.target.value)}
          value={accName}
        />
      </Row>
      <Row style={{marginTop: 16}}>
        <Button
          type="primary"
          onClick={handleSaveWallet}
          disabled={accName === ''}
        >
          Save Wallet
        </Button>
      </Row>
    </React.Fragment>
  );
}

export default Done;
