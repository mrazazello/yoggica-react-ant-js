import React from 'react';
import { Link } from 'react-router-dom';
import AdminCommonTemplate from '../../Components/AdminCommonTemplate/AdminCommonTemplate';

import BookingsByUser from '../../Components/BookingsByUser/BookingsByUser';
import VisitsByUser from '../../Components/VisitsByUser/VisitsByUser';
import MembreshipItem from '../../Components/MembershipItem/MembershipItem';
import { Typography, Button, Space, Row, Col, Avatar, Tag, Divider, Tabs } from 'antd';
import './Yogi.css';
import { FacebookFilled, GoogleSquareFilled, CheckCircleFilled, UserOutlined } from '@ant-design/icons';


export default class Yogi extends React.Component {
    render() {
        const { Title, Paragraph } = Typography;
        const { TabPane } = Tabs;

        const callback = (key) => {
            console.log(key);
        }
          

        return (
          <AdminCommonTemplate>
            <Title>Yogis: Boris Pasternak</Title>
            <div style={{ marginBottom: 16 }}>
                <Space>
                    <Button type="primary">Buy membership</Button>
                    <Button>Edit profile</Button>
                    <Button>Change password</Button>
                    <Button>Change role</Button>
                </Space>
            </div>

            <Row gutter={[16, 16]}>
                <Col span={16}>
                    <div className="fieldSet withBg">
                        <Title level={4}>Basic data</Title>
                        <div style={{float: 'right'}}><Avatar size={128} icon={<UserOutlined />} /></div>
                        <div>Email: vasiliy23@gmail.com <CheckCircleFilled /></div>
                        <div>Phone +7 921 111 33 22</div>
                        <div>Sex: Male</div>
                        <div>Birthday: 17.07.1983</div>
                        <div>Social: <FacebookFilled /> <GoogleSquareFilled /></div>
                        <Paragraph>
                        About myself:<br />
                        — Any classes in the regular schedule for new students<br />
                        — Does NOT include special workshops & prenatal yoga<br />
                        — Pass activates at your first class<br />
                        — Not transferable & freezable once purchased<br />
                        — Booking is required<br />
                        </Paragraph>
                    </div>

                    <Tabs type="card" onChange={callback}>
                        <TabPane tab="Booking" key="1">
                            <BookingsByUser userId="1" />
                        </TabPane>
                        <TabPane tab="Visits" key="2">
                            <VisitsByUser/>
                        </TabPane>
                        <TabPane tab="Payments" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Memberships" key="4">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>

                </Col>
                <Col span={8}>
                    <div className="fieldSet withBg">
                        <Title level={4}>Stats</Title>
                        <div>Registration: 01.06.2022</div>
                        <div>Last authorisation: 01.01.2022</div>
                        <div>Status & Role: <Tag color="green">New</Tag><Tag color="grey">Client</Tag></div>
                        <Divider />
                        <div>Balance: <strong>0 ₽</strong></div>
                        <div>Revenue: <strong>5000 ₽</strong> (full list)</div>
                        <div>Classes visited: <strong>20</strong> (full list)</div>
                    </div>

                    <div className="fieldSet witBg">
                        <Title level={4}>Current membership</Title>
                        <MembreshipItem />
                        <div>Total membership purchased: 6</div>
                    </div>
                </Col>
            </Row>

          </AdminCommonTemplate>
        );
    }
}