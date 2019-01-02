import React, { useState, useEffect } from 'react';
import { Row, Popover, Progress, Button } from 'antd';

import 'antd/lib/popover/style/css';
import 'antd/lib/progress/style/css';
import 'antd/lib/button/style/css';

type Props = {
  goToNextStep: () => void
};

const sampleMnemonic = 'disagree tide elbow citizen jazz cinnamon bridge certain april settle pact film always inmate border inform solution that submit produce cloth balcony upper maid';

function GenerateSeed({ goToNextStep }: Props) {
  const [fakeProgress, setFakeProgress] = useState(0);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    if (fakeProgress >= 100) return;
    // don't take it seriously, just giving a false sense of progress for UX reasons
    const increment =  fakeProgress < 80 ? 40 : fakeProgress >= 80 ? 18 : 10; 
    setTimeout(() => setFakeProgress(fakeProgress + increment), 300);
  }, [fakeProgress]);

  return (
    <div>
      { fakeProgress < 100 &&
        <Row>
          Generating Recovery Seed
          <Progress percent={fakeProgress} />
        </Row>
      }

      { fakeProgress >= 100 &&
        <div>
          <Row style={{textAlign: 'left'}}>
            A very strong recovery seed has been generated for you!
            {' '}
            <Popover
              title="What is a Recovery Seed"
              content={<p style={{maxWidth: '400px'}}>A recover seed is a series of phrases that can be used to recover all your wallets.</p>}
              visible={showGuide}
              onVisibleChange={() => setShowGuide(!showGuide)}
            >
              <span style={{color: '#595959', fontSize: '12px', fontWeight: 'bold'}}>
                (What is this?)
              </span>
            </Popover>

            <br />
            <p style={{fontWeight: 'bold', textAlign: 'center'}}>Write it down on paper and keep it secretly.</p>
            <div style={{textAlign: 'center', background: '#d9d9d9', borderRadius: '5px', padding: '5px'}}>
              { sampleMnemonic }
            </div>
          </Row>
          <Row style={{marginTop: 10}}>
            <Button type="dashed" onClick={goToNextStep}>I did safely write it down</Button>
          </Row>
        </div>
      }
    </div>
  );
}

export default GenerateSeed;