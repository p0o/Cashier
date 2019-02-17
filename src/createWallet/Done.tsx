import React, { useState } from 'react';
import { Row, Button, Input } from 'antd';
import { goTo } from 'route-lite';
import { saveWallet } from '../storage';

import WalletManager from '../walletManager/WalletManager';

type Props = {
  mnemonic: string;
};

function Done({ mnemonic }: Props) {
  const [accName, setAccName] = useState('');

  function handleSaveWallet() {
    saveWallet({
      mnemonic,
      profileName: accName,
    });
    goTo(WalletManager);
  }

  return (
    <React.Fragment>
      <Row>
        <p>
          Pick a name for your profile. With every profile you can have a
          different BCH address and personal details.
        </p>
        <Input
          placeholder="Enter Account Name"
          onChange={e => setAccName(e.target.value)}
          value={accName}
        />
      </Row>
      <Row style={{ marginTop: 16 }}>
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
