import React from 'react';

import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

export default class SideMenu extends React.Component {
  render() {
    const pathname = window.location.pathname;
    return (
      <Menu theme="dark" 
        mode="inline" 
        defaultSelectedKeys={['1']}
        selectedKeys={[pathname]}>
        <Menu.Item key="/yogilist" icon={<UserOutlined />}>
          <Link to="/yogilist">Yogis</Link>
        </Menu.Item>
        <Menu.Item key="/yogastudio" icon={<VideoCameraOutlined />}>
          <Link to="/yogastudio">Yoga-studio</Link>
        </Menu.Item>
        <Menu.Item key="/classes" icon={<UploadOutlined />}>
          <Link to="/classes">Classes</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
