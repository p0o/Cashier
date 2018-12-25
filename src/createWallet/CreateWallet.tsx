import React from 'react';
import { Row, Col, Button, Steps, Icon } from 'antd';
import { Link } from 'route-lite';

import 'antd/lib/steps/style/css'
import 'antd/lib/icon/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/button/style/css';

type Props = any;
const { Step } = Steps;

function CreateWallet(props: Props) {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Row style={{marginTop: 15, marginBottom: 15}}>
          <Steps size="small">
            <Step status="process" title="Start" />
            <Step status="wait" title="Seed"  />
            <Step status="wait" title="Confirm" />
            <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
          </Steps>
        </Row>
        <Row>
          <p>You don't have a wallet yet, click below to create a local Bitcoin Cash wallet.</p>
        </Row>
        <Row>
          <Button type="primary">Create New Wallet</Button>
        </Row>
      </Col>
    </Row>
  )
}

export default CreateWallet;
