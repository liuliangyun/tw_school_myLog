import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import Top from './components/Top'
import Left from './components/Left'
import Middle from './components/Middle';

class App extends Component {
  render() {
    return (
      <Layout>
            <Top />
            <Layout>
              <Left />
              <Middle />
            </Layout>
          </Layout>
    );
  }
}

export default App;
