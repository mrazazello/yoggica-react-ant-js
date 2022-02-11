import React from 'react';

import './UserHeaderAuthorization.css';
import { Menu, Dropdown, Avatar } from 'antd';
import {
  CaretDownFilled,
} from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">1st menu item</Menu.Item>
    <Menu.Item key="1">2nd menu item</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

export default class UserHeaderAuthorization extends React.Component {
  render() {
    return (
      <div className="header-user">
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#" onClick={e => e.preventDefault()}>
            <Avatar>K</Avatar>
            <CaretDownFilled />
          </a>
        </Dropdown>
      </div>
    );
  }
}