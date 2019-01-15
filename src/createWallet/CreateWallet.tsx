import React, { useState } from 'react';
import { Row, Col, Button, Steps, Icon } from 'antd';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { Link } from 'route-lite';


import './CreateWallet.css';
import CreateWalletStart from './CreateWalletStart';
import GenerateSeed from './GenerateSeed';
import ConfirmSeed from './ConfirmSeed';
import Done from './Done';

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
            <Flipped flipId="1" key="1">
              <div className="slidingBoxItem">
                <CreateWalletStart
                  goToNextStep={() => setSlideNo(slideNo + 1)}
                />
              </div>
            </Flipped>

            <Flipped flipId="2" key="2">
              <div className="slidingBoxItem">
                {slideNo === 1 &&
                  <GenerateSeed
                    goToNextStep={() => setSlideNo(slideNo + 1)}
                    onGenerateSeed={handleGeneratedSeed}
                  />
                }
              </div>
            </Flipped>

            <Flipped flipId="3" key="3">
              <div className="slidingBoxItem">
                {slideNo === 2 &&
                  <ConfirmSeed
                    goToNextStep={() => setSlideNo(slideNo + 1)}
                    seed={currentSeed}
                  />
                }
              </div>
            </Flipped>

            <Flipped flipId="4">
              <div className="slidingBoxItem">
                {slideNo === 3 &&
                  <Done />
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
