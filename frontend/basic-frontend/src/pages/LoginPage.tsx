import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox } from "antd";
import { useContext } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "../context";
import { authService, notificationService } from "../services";

export const LoginPage = () => {
  const { setUser } = useContext(GlobalContext);

  const history = useHistory();

  const onFinish = async (values: any) => {
    try {
      // const res = await authService.login({
      //   email: values.email,
      //   password: values.password,
      // });
      // console.log(res);
      // setUser({ token: res.data.access_token });
      // sessionStorage.setItem(
      //   "accessToken",
      //   JSON.stringify(res.data.access_token)
      // );
      history.push("/home");
    } catch (err: any) {
      notificationService.error(err.error, err.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form">
        <Form initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
