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
import CreateWalletStart from './CreateWalletStart';
import GenerateSeed from './GenerateSeed';

type Props = any;
const { Step } = Steps;
const steptTitleList = ['Start', 'Seed', 'Confirm', 'Done'];

function CreateWallet(props: Props) {
  const [slideNo, setSlideNo] = useState(0);
  const [currentSeed, setCurrentSeed] = useState('');

  function stepStatus(current: number): 'finish' | 'wait' | 'process' {
    if (slideNo > current) return 'finish';
    if (slideNo < current) return 'wait';
    return 'process';
  }

  function handleGeneratedSeed(seed: string): void {
    setCurrentSeed(seed);
  }

  return (
    <Row>
      <Col span={20} offset={2} style={{overflow: 'hidden'}}>
        <Row style={{marginTop: 15, marginBottom: 15}}>
          <Steps size="small">
            {
              steptTitleList.map((title, stepIndex) => (
                <Step
                  status={stepStatus(stepIndex)}
                  title={title}
                  onClick={() => setSlideNo(stepIndex)}
                />
              ))
            }
          </Steps>
        </Row>
        <Flipper flipKey={slideNo}>
          <div className="slidingBox" style={{left: -458 * slideNo}}>
            <Flipped flipId="1">
              <div className="slidingBoxItem">
                <CreateWalletStart
                  goToNextStep={() => setSlideNo(slideNo + 1)}
                />
              </div>
            </Flipped>

            <Flipped flipId="2">
              <div className="slidingBoxItem">
                {slideNo === 1 &&
                  <GenerateSeed
                    goToNextStep={() => setSlideNo(slideNo + 1)}
                    onGenerateSeed={handleGeneratedSeed}
                  />
                }
              </div>
            </Flipped>
            
          </div>
        </Flipper>
          
      </Col>
    </Row>
  )
}

export default CreateWallet;
