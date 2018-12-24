import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/lib/layout/style/css';

const { Header, Footer, Content } = Layout;

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{background: '#fff'}}>Cashier</Header>
        <Content></Content>
        <Footer>All rights reserved</Footer>
      </Layout>
    );
  }
}

export default App;
