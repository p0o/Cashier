import React from 'react';
import { storiesOf } from '@storybook/react';
import CreateWallet from '../createWallet/CreateWallet';

import 'antd/lib/steps/style/css'
import 'antd/lib/icon/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/checkbox/style/css';
import '../App.css';

storiesOf('CreateWallet', module).add('simple rende', () => <CreateWallet />);
