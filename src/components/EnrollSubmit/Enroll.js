import { useCallback } from "react";
import {  Row, Col, Button, Form, Input, Radio, Space, notification } from "antd";
import FullscreenSection from "./FullScreenSection"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./enroll.css"


const CustomGoogleForms = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const onFinish = useCallback(
    async ({ learner, learnername, age, country, email, phone, course, classtype }) => {
      try {
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSdYEuZmv4AGpvnNuRU7sXlWy18WMdkHx4yb1Y1RhZEDPjq2Qw/formResponse?" +
            new URLSearchParams({
              "entry.945611636": learner,
              "entry.2005620554": learnername,
              "entry.1065046570": age,
              "entry.397613442": country,
              "entry.1045781291": email,
              "entry.1166974658": phone,
              "entry.839337160": course,
              "entry.1791338117": classtype,
            }),
          {
            mode: "no-cors",
          }
        );
        api.success({
          message: "Submitted successfully, We will be in touch soon",
        });
        form.resetFields();
      } catch (e) {
        api.error({
          message: e.message,
        });
      }
    },
    [api, form]
  );
///'text-left p-5'

  return (
    <>
      {contextHolder}
      <Header />
      <Row style={{ display: "flex", flexDirection: "row" }} className="d-flex align-items-center justify-content-space-between">
        <Col lg={8}  style={{ order: 2}}>
          <FullscreenSection>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className=" form-container"
          >
          <h4>Enroll in Course</h4>
          <p style={{ paddingBottom: '20px'}}>Kindly fill this accurately. We will contact you shortly!</p>
          
            <Form.Item
              name="learner"
              label="Are you registering for a Learner?"
              rules={[{ required: true, message: "This question is must be answered"}]}
            >
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="YES, I will be learning myself">YES, I will be learning myself</Radio>
                  <Radio value="NO, I am registering for another person">NO, I am registering for another person</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            
            <Form.Item
              name="learnername"
              label="Learner's Name"
              rules={[{ required: true, message: "Learner's name is required"}]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="age"
              label="Learner's Age"
              rules={[{ required: true, message: "Age of Learner is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="country"
              label="Current Country of Residence"
              rules={[{ required: true, message: "Country is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[{ type: "email", message: "Please enter a valid email address" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Phone number is required" },
                { pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/, message: "Please enter a valid phone number" }
              ]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item
              name="course"
              label="Select a Course"
              rules={[{ required: true, message: "A course must be selected" }]}
            >
              <Radio.Group >
                <Space direction="vertical">
                  <Radio value="Python Programming for Beginners">Python Programming for Beginners</Radio>
                  <Radio value="Scratch (Recommended for Juniors)">Scratch (Recommended for Juniors)</Radio>
                  <Radio value="Web Development for Beginners">Web Development for Beginners</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="classtype"
              label="Type of Lessons (Mode of class delivery)"
              rules={[{ required: true, message: "Mode of class delivery" }]}
            >
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="Online">Online</Radio>
                  <Radio value="Online, Individual (One On One)"> Online, Individual (One On One)</Radio>
                  <Radio value="In-person Individual"> In-person, Individual (One on One)</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
          </FullscreenSection>
        </Col>
        <Col lg={16} className='col-right' style={{ order: 1 }}>
      
        <img src="https://i.imgur.com/q3NcLTG.png" alt="learn coding now" style={{ width: "100%", maxWidth: "400px" }}/>
      </Col>
      </Row>
      <Footer />
    </>
  );
};

export default CustomGoogleForms;