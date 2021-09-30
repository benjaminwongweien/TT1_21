import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { Fragment, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "../context";
import { authService, notificationService } from "../services";
import { apiService } from "../services";
import { BaseLayout } from "../layout";
import axios from "axios";
import { isWithStatement } from "typescript";
import { CartItem } from "../context";

export const CheckoutPage = () => {
  let { setUser,cartItems } = useContext(GlobalContext);
 
  const history = useHistory();

  const onFinish = async (values: any) => {
    console.log(values);
    console.log(cartItems);
    let url = "http://localhost:8000/addorder/";
    let response = await apiService.post(url, cartItems);
    console.log(response);
  };

  const AddHandler = (itemId: any) => {
    console.log("Add :", itemId);

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].product_id === itemId) {
        cartItems[i].product_qty += 1;
        break;
      }
    }

    console.log(cartItems);
  };

  const RemoveHandler = (itemId: any) => {
    console.log("Remove :", itemId);

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].product_id === itemId) {
        cartItems[i].product_qty -= 1;
        if (cartItems[i].product_qty <= 0) {
            cartItems = cartItems.filter((item) => item.product_id !== itemId);
        }
        break;
      }
    }
  };

  const cartItemsJSX = (
    <ul>
      {cartItems.map((item) => (
        <Card key={item.product_id}>
          <p>Item: {item.product_id}</p>
          <p>Quantity: {item.product_qty}</p>
          <button onClick={AddHandler.bind(null, item.product_id)}>Add</button>
          <button onClick={RemoveHandler.bind(null, item.product_id)}>
            Remove
          </button>
        </Card>
      ))}
    </ul>
  );

  return (
    <Fragment>
      <BaseLayout>
        <Card>
          <h1>Cart Items</h1>
          {cartItemsJSX}
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
