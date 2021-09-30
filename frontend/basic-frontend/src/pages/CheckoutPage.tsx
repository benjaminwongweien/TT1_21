import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { Fragment, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "../context";
import { authService, notificationService } from "../services";
import { BaseLayout } from "../layout";
import axios from "axios";

export const CheckoutPage = () => {
  const { setUser } = useContext(GlobalContext);

  const history = useHistory();

  const onFinish = async (values: any) => {
    console.log(values);

    let date = Date.now();
    console.log(date);
    let cartItems = { cart: [{ objectId: "obj id", num: 1 }] };
    //send data
    // let url = "http://localhost:8000/";
    // axios.post(url, cartItems).then(function (response) {
    //   console.log(response);
    // });

  };

  return (
    <Fragment>
      <BaseLayout>
        <Card>
          <div>Cart Items</div>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Card>
        <div>
          Checkout Form
          <p />
          <div className="checkout-form">
            <Form initialValues={{ remember: true }} onFinish={onFinish}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter a valid email address!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[
                  { required: true, message: "Please input your Address!" },
                ]}
              >
                <Input placeholder="Address" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Checkout
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </BaseLayout>
    </Fragment>
  );
};
