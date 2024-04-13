import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { Row, Col, Form, Input, Select, message } from "antd";
import paymentsImg from "../../assests/images/payments.jpg";
import "./payment.css";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import DrawerIcon from "../../components/Drawer/drawer"

const { Option } = Select;

const Payments = () => {
  const [form] = Form.useForm();
  const publicKey = "pk_live_92724b6cc38ee034d81248f30e21acd8363f14e7";
  const currency = "GHS";


  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0); 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const componentProps = {
    email,
    amount,
    currency,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Leaving so soon? We're here to help if you need it. Hope to see you back!"),
  };

  const onFinish = (values) => {
    setEmail(values.email);
    setAmount(values.courseType * 100); 
    setName(values.name);
    setPhone(values.phone);
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Please correct the errors in the form.');
  };

  const noOverflow = {
    container: {
      maxWidth: "100%",
      padding: "0 0px", 
      boxSizing: "border-box",
    },
  };

  return (
    <>
    <div style={noOverflow.container}>
    <Header/>
    <DrawerIcon/>
    <Row gutter={16}>
      <Col lg={12} md={12} className="align-items-center">
        <img src={paymentsImg} alt="learn coding now" className="payment-img" style={{ width: "100%", maxWidth: "600px"}} />
      </Col>
      <Col lg={12} md={12}>
        <div className="paymentform-container" style={{ padding: "40px 20px " }}>
          <div>
           <h6>Kindly provide your details</h6> 
           </div>
           <div><p1>All Payments are secured by Paystack</p1></div>
          <Form 
            form={form}
            layout="vertical"
            className="form-container"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onValuesChange={(changedValues, allValues) => {
              if (changedValues.courseType) {
                setAmount(changedValues.courseType * 100); 
              }
            }}
          >
            <Form.Item 
              label="Name" 
              name="name"
              rules={[{ required: true, message: "Name is required"}]}
            >
              <Input />
            </Form.Item>
            <Form.Item 
              label="Email" 
              name="email"
              rules={[{ required: true, type: "email", message: "Please enter a valid email address" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item 
              label="Phone" 
              name="phone"
              rules={[
                { required: true, message: "Phone number is required" },
                { pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/, message: "Please enter a valid phone number" }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item 
              label="Course Type" 
              name="courseType"
              rules={[{ required: true, message: "A course type must be selected" }]}
            >
              <Select>
                <Option value="" disabled>Select Course Type</Option>
                <Option value="500">Online</Option>
                <Option value="1000">Online-One on One</Option>
                <Option value="1800">In-person-One on One</Option>
              </Select>
            </Form.Item>
            <div style={{ fontWeight: "bold", fontSize: "20px", color: "#333", marginBottom: "20px", marginTop: "20px" }}>
              Amount Due: GHS {amount / 100}
            </div>
            <Form.Item>
              <PaystackButton className="paystack-button" {...componentProps} />
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
    <Footer />
    </div>
    </>
  );
};

export default Payments;