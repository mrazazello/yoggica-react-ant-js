import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Space, Table } from 'antd';


const dataSource = [
    {
      key: '1',
      name: 'Hatha yoga',
      date: '01.06.2021 13:00',
      membership: '8 classes',
      actions: ['check', 'cancel'],
    },
    {
        key: '2',
        name: 'Ashtanga yoga',
        date: '01.06.2021 13:00',
        membership: '8 classes',
        actions: ['check', 'cancel'],
      },
];


export default class BookingsByUser extends React.Component {
    render() {
        const columns = [
            {
                title: 'Class',
                dataIndex: 'name',
                key: 'name',
                render: title => <Link to="/yog">{title}</Link>,
            },
            {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: 'Membership',
                dataIndex: 'membership',
                key: 'membership',
            },
            {
                title: 'Actions',
                dataIndex: 'actions',
                key: 'actions',
                render: actions => (
                    <Space>
                      {actions.map(button => {
                        return (
                          <Button key={button}>{button}</Button>
                        );
                      })}
                    </Space>
                ),
            },
        ];

        return (
            <>
                <Table dataSource={dataSource} columns={columns} pagination={false} />
            </>
        );
    }
}
