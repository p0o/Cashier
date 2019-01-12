import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/lib/layout/style/css';
import Router, { Link, goBack } from 'route-lite';

import 'antd/lib/steps/style/css'
import 'antd/lib/icon/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/checkbox/style/css';

import CreateWallet from './createWallet/CreateWallet';

const { Header, Footer, Content } = Layout;

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header
          style={{background: '#eee', lineHeight: 1.1}}>
          <h3 style={{marginTop: 10}}>Cashier</h3>
          <p>Bitcoin Cash wallet for micro-payments</p>
        </Header>
        <Content style={{height: '246px', overflow: 'hidden'}}>
          <Router>
            <CreateWallet />
          </Router>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default App;
