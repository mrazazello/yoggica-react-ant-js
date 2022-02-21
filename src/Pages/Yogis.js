import React from 'react';
import AdminCommonTemplate from '../Components/AdminCommonTemplate'
import { Typography } from 'antd';



export default class Yogis extends React.Component {
  render() {
    const { Title } = Typography;
    
    return (
      <AdminCommonTemplate>
        <Title>Yogis list</Title>
      </AdminCommonTemplate>
    );
  }
}
