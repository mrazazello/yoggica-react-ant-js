import React from 'react';

import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class SideMenu extends React.Component {
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/Yogis">Yogis</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/Yogastudio">Yoga-studio</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/Classes">Classes</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="s1">Option 1</Menu.Item>
            <Menu.Item key="s2">Option 2</Menu.Item>
            <Menu.Item key="s3">Option 3</Menu.Item>
            <Menu.Item key="s4">Option 4</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
