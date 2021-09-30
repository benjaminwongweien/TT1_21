import { Form, Input, Button, Checkbox } from "antd";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { BaseLayout } from "../layout";
import { notificationService, testService } from "../services";

export const CheckoutPage = () => {
  useEffect(() => {
    onInit();
  }, []);

  const history = useHistory();

  const onInit = async () => {
    try {
      const res = await testService.test();
      console.log(res);
    } catch (err: any) {
      notificationService.error(err.error, err.message);
    }
  };

  return (
    <BaseLayout>
      <div>
        Checkout Form
        <p />
        <div className="checkout-form">
        <Form initialValues={{ remember: true }}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            name="address"
            rules={[{ required: true, message: "Please input your Address!" }]}
          >
            <Input
              placeholder="Address"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter a valid email address!" }]}
          >
            <Input
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="t&c" valuePropName="checked" noStyle>
              <Checkbox>I've read the terms and conditions</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Checkout
            </Button>
          </Form.Item>
        </Form>
      </div>
      </div>
    </BaseLayout>
  );
};
