import React from 'react';
import { Row, Button } from 'antd';
type Props = {
  goToNextStep: () => void
};

function CreateWalletStart({ goToNextStep }: Props) {
  return (
    <React.Fragment>
      <Row>
        <p>You don't have a wallet yet, click below to create an encrypted Bitcoin Cash wallet inside your browser.</p>
      </Row>
      <Row>
        <Button type="primary" onClick={goToNextStep}>Create New Wallet</Button>
      </Row>
    </React.Fragment>
  );
}

export default CreateWalletStart;