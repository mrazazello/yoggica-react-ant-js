import React from 'react';

import 'antd/dist/antd.css';
import './FrontendTemplate.css'

import { Layout } from 'antd';

import TopMenu from '../TopMenu/TopMenu';
import UserHeaderAuthorization from '../UserHeaderAuthorization/UserHeaderAuthorization';

const { Header, Content } = Layout;

export default class FrontendTemplate extends React.Component {
  render() {
    const { children } = this.props;
    return (
        <Layout>
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