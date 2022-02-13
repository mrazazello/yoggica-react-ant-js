import React from 'react';

import { Link } from 'react-router-dom';

import { Menu } from 'antd';

export default class TopMenu extends React.Component {
  render() {
    return (
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ float: 'left'}}> 
        <Menu.Item key="0">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="1">
        <Link to="/Schedule">Schedule</Link>
        </Menu.Item>
        <Menu.Item key="2">
        <Link to="/teachers">Teachers</Link>
        </Menu.Item>
        <Menu.Item key="3">
        <Link to="/prices">Prices</Link>
        </Menu.Item>
        <Menu.Item key="4">
        <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
