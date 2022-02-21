import React from 'react';
import { Link } from 'react-router-dom';
import AdminCommonTemplate from '../Components/AdminCommonTemplate';
import { Typography, Button, Space, Row, Col, Avatar, Tag } from 'antd';
import './Yogi.css';
import { FacebookFilled, GoogleSquareFilled, CheckCircleFilled, UserOutlined } from '@ant-design/icons';

export default class Yogi extends React.Component {
    render() {
        const { Title, Paragraph } = Typography;

        return (
          <AdminCommonTemplate>
            <Title>Yogis: Boris Pasternak</Title>
            <div style={{ marginBottom: 16 }}>
                <Space>
                    <Button type="primary">Buy membership</Button>
                    <Button>Edit</Button>
                </Space>
            </div>

            <Row gutter={[16, 16]}>
                <Col span={16}>
                    <div className="fieldSet">
                        <Title level={4}>Basic data</Title>
                        <div style={{float: 'right'}}><Avatar size={128} icon={<UserOutlined />} /></div>
                        <div>Email: vasiliy23@gmail.com <CheckCircleFilled /></div>
                        <div>Phone +7 921 111 33 22</div>
                        <div>Sex: Male</div>
                        <div>Birthday: 17.07.1983</div>
                        <div>Social: <FacebookFilled /> <GoogleSquareFilled /></div>
                        <Paragraph>
                        About myself:
                        — Any classes in the regular schedule for new students
                        — Does NOT include special workshops & prenatal yoga
                        — Pass activates at your first class
                        — Not transferable & freezable once purchased
                        — Booking is required
                        </Paragraph>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="fieldSet">
                        <Title level={4}>Stats</Title>
                        <div>Зарегестрирован: 01.06.2020</div>
                        <div>Последний вход: 01.01.2020</div>
                        <div>Status: <Tag color="green">New</Tag></div>
                    </div>
                </Col>
            </Row>

          </AdminCommonTemplate>
        );
      }
}