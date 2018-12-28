import React, { useState } from 'react';
import { Row, Col, Button, Steps, Icon } from 'antd';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { Link } from 'route-lite';

import 'antd/lib/steps/style/css'
import 'antd/lib/icon/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/button/style/css';
import './CreateWallet.css';

type Props = any;
const { Step } = Steps;

function CreateWallet(props: Props) {
  const [slideNo, setSlideNo] = useState(0);

  function stepStatus(current: number): 'finish' | 'wait' | 'process' {
    if (slideNo > current) return 'finish';
    if (slideNo < current) return 'wait';
    return 'process';
  }  

  return (
    <Row>
      <Col span={20} offset={2} style={{overflow: 'hidden'}}>
        <Row style={{marginTop: 15, marginBottom: 15}}>
          <Steps size="small">
            <Step
              status={stepStatus(0)}
              title="Start"
              onClick={() => setSlideNo(0)}
            />
            <Step
              status={stepStatus(1)}
              title="Seed"
              onClick={() => setSlideNo(1)}
            />
            <Step
              status={stepStatus(2)}
              title="Confirm"
              onClick={() => setSlideNo(2)}
            />
            <Step
              status={stepStatus(3)}
              title="Done"
              icon={<Icon type="smile-o"/>}
              onClick={() => setSlideNo(3)}
            />
          </Steps>
        </Row>
        <Flipper flipKey={slideNo}>
          <div className="slidingBox" style={{left: -458 * slideNo}}>
            <Flipped flipId="1">
              <div className="slidingBoxItem">
                <Row>
                  <p>You don't have a wallet yet, click below to create an encrypted Bitcoin Cash wallet inside your browser.</p>
                </Row>
                <Row>
                  <Button type="primary" onClick={() => setSlideNo(slideNo + 1)}>Create New Wallet</Button>
                </Row>
              </div>
            </Flipped>
            
          </div>
        </Flipper>
          
      </Col>
    </Row>
  )
}

export default CreateWallet;
