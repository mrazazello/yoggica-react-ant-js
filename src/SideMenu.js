import React from 'react';

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
          Yogis
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Yoga-studio
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Classes
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
