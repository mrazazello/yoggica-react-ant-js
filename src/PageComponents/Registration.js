import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';



export default class Registration extends React.Component {
  render() {
    
    const onFinish = (values) => {
        console.log('Success:', values);
    };
      
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
        
    return (
        <>
        <h1>Registration page</h1>
        <Form
      name="registration"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Firstname"
        name="Your firstname"
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Surname"
        name="Your surname"
        rules={[
          {
            required: true,
            message: 'Please input your surname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="Your email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Cellular"
        name="Your cellular"
        rules={[
          {
            required: true,
            message: 'Please input your cellular!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Registration
        </Button>
      </Form.Item>
    </Form>
    </>
    );
  }
}
