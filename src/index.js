import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import './index.css';

import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import UserHeaderAuthorization from './UserHeaderAuthorization';

import Yoggis from './Yoggis';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Sider>
            <div className="logo" />
            <SideMenu />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <TopMenu />
              <UserHeaderAuthorization />
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="/Yogis" element={<Yoggis />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));