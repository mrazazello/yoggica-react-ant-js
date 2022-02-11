import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import SideMenu from './SideMenu.js';
import TopMenu from './TopMenu.js';

import UserHeaderAuthorization from './UserHeaderAuthorization.js';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
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
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));