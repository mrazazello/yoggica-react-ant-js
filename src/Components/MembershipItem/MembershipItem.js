import React from "react";
import { Typography } from "antd";
import './MembershipItem.css';

export default class MembreshipItem extends React.Component {
    render() {
        const { Title } = Typography;

        return (
            <div className="membershipItem">
                <div className="price">1800 ₽</div>
                <Title level={4}>8 classes</Title>
                <div className="classesLeft">7 classes left. Expired 21.07.2021</div>
            </div>
        );
    }
}