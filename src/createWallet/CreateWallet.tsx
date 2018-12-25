import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'route-lite';

type Props = {name?: string};

function CreateWallet(props: Props) {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Row>
          <p>You don't have a wallet yet, click below to create a local Bitcoin Cash wallet.</p>
        </Row>
        <Row>
          <Button>Create New Wallet</Button>
        </Row>
      </Col>
    </Row>
  )
}

export default CreateWallet;
