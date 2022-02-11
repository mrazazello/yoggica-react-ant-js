import React from 'react';

import { Menu } from 'antd';

export default class TopMenu extends React.Component {
  render() {
    return (
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ float: 'left'}}> 
        <Menu.Item key="1">
          Schedule
        </Menu.Item>
        <Menu.Item key="2">
          Teachers
        </Menu.Item>
        <Menu.Item key="3">
          Prices
        </Menu.Item>
        <Menu.Item key="4">
          About
        </Menu.Item>
      </Menu>
    );
  }
}
