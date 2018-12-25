import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/lib/layout/style/css';
import Router, { Link, goBack } from 'route-lite';

import CreateWallet from './createWallet/CreateWallet';

const { Header, Footer, Content } = Layout;

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{background: '#fff'}}>Cashier</Header>
        <Content>
          <Router>
            <CreateWallet />
          </Router>
        </Content>
        <Footer>All rights reserved</Footer>
      </Layout>
    );
  }
}

export default App;
