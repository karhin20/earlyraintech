import { useCallback } from "react";
import { Button, Form, Input, notification} from "antd";



const CustomGoogleForms = ({setOpen}) => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const onFinish = useCallback(
    async ({ messengersname,  phone, email, message }) => {
      try {
        await fetch(
          `${process.env.REACT_APP_API_ENDPOINT}?` +
            new URLSearchParams({
              "entry.816546240": messengersname,
              "entry.1386233045": phone,
              "entry.46090995": email,
              "entry.1470582380": message,
            }),
          {
            mode: "no-cors",
          }
        );
        api.success({
          message: "Submitted successfully",
          placement: "bottomLeft",
          duration: 0
        })
        form.resetFields();
        setOpen(false);
      } catch (e) {
        api.error({
          message: e.message,
          placement: "bottomLeft",
          duration: 0
        });
      }
    },
    [api, form]
  );

  return (
    <>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className=" form-container"
          >
          <p style={{ paddingBottom: '40px'}}> Please, fill out the form and submit.<br/> We will get in touch shortly!</p>

            <Form.Item
              name="messengersname"
              label="Name"
              rules={[{ required: true, message: "Name is required"}]}
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
              name="email"
              label="Email"
              rules={[{ type: "email", message: "Please enter a valid email address" }]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Message is required" }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Button style={{ color: 'black', backgroundColor: "#61dafb" }} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
    </>
  );
};

export default CustomGoogleForms;