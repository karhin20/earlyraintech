import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userInfoActions';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000
})

function Register() {
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    const { username, password, phone } = values; 
    dispatch(userRegister({ username, password, phone }));
  };

  return (
    <div className='login'>
      <Row gutter={16} className="d-flex align-items-center justify-content-center">
        <Col lg={16} className='login-img'>
          <img 
            data-aos='slide-right'
            src='https://live.staticflickr.com/7383/16260149657_367564a037.jpg 480w' 
            srcSet='https://live.staticflickr.com/7383/16260149657_367564a037.jpg 480w 1024w, 
            https://live.staticflickr.com/7383/16260149657_367564a037.jpg 480w'
            sizes='(max-width: 600px) 480px, 1024px'
            alt=''
          />
        </Col>
        <Col lg={8} className='text-left p-5'>
          <Form layout='vertical' className='login-form p-5' onFinish={handleSubmit}>
            <h1>Register</h1>
            <hr />
            <Form.Item name='username' label='Username' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label='Phone Number'
              rules={[
                { required: true, message: 'Please input your phone number!' },
                { pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/, message: 'Please enter a valid phone number' }
              ]}
            >
              <Input placeholder="example 0550005555" />
            </Form.Item>
            <Form.Item name='password' label='Password' rules={[{ required: true }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item 
              name='confirmPassword' 
              label='Confirm Password' 
              dependencies={['password']}
              rules={[
                { required: true },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <button className='btn1' type="submit">Register</button>
            </Form.Item>
            <hr />
            <p1>Already Registered? </p1>
            <Link to='/login'> Login here </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;