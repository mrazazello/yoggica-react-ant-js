import React from 'react';

import 'antd/dist/antd.css';
import './AdminCommonTemplate.css';

import { Layout } from 'antd';

import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import UserHeaderAuthorization from './UserHeaderAuthorization';

const { Header, Sider, Content } = Layout;

export default class AdminCommonTemplate extends React.Component {
  render() {
    const { children } = this.props;
    return (
        <Layout>
          <Sider>
            <div className="logo" />
            <SideMenu />
          </Sider>
          <Layout className="site-layout">
            <Header className="header-layout-background">
              <TopMenu />
              <UserHeaderAuthorization />
            </Header>
            <Content className="site-layout-background">
                {children}
            </Content>
          </Layout>
        </Layout>
    );
  }
}