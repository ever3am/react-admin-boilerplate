import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './Login.scss';

class Login extends React.Component {
  onLogin = e => {
	  e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  }
  
  render () {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit} className="Login__form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" className="Login__form-button">登录</Button>
	      </Form>
      </div>
    );
  }
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;
