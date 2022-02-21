import React from 'react';
import FrontendTemplate from '../Components/FrontendTemplate';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Typography } from 'antd';



export default class Authorization extends React.Component {
  render() {
    
    const { Title } = Typography;
    
    const onFinish = (values) => {
        console.log('Success:', values);
    };
      
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
        
    return (
      <FrontendTemplate>
        <Title>Authorisation page</Title>
        <Form
      name="basic"
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </FrontendTemplate>
    );
  }
}
