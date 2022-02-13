import React from 'react';

import { NavLink } from 'react-router-dom';

import { Menu } from 'antd';

export default class TopMenu extends React.Component {
  render() {
    const pathname = window.location.pathname;

    return (
      <Menu theme="light" 
        mode="horizontal" 
        defaultSelectedKeys={['/']}
        selectedKeys={[pathname]}
        style={{ float: 'left'}}> 
        <Menu.Item key="/">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="/dashboard">
        <NavLink to="/dashboard">Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="/registration">
        <NavLink to="/registration">Registration</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}
