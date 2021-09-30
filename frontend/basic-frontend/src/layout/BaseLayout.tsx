import {
  HomeOutlined,
  BarChartOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
<<<<<<< HEAD
  ShoppingOutlined
=======
>>>>>>> 8e7567fc2a11b799b66c3cdf32232a3c7889ed92
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { ReactNode, useState } from "react";
import { useHistory } from "react-router";

const { Content, Sider } = Layout;

interface BaseLayoutProps {
  children: ReactNode;
}

interface MenuConfig {
  icon: ReactNode;
  name: string;
  onClick: () => void;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const history = useHistory();

  const getHeaderMenu = () =>
    [
      {
        icon: <ShoppingOutlined />,
        name: "Home",
        onClick: () => history.push("/home"),
      },
      {
        icon: <BarChartOutlined />,
        name: "Charts",
        onClick: () => history.push("/charts"),
      },
      {
<<<<<<< HEAD
        icon: <ShoppingCartOutlined/>,
        name: "Cart",
=======
        icon: <ShoppingCartOutlined />,
        name: "Checkout",
>>>>>>> 8e7567fc2a11b799b66c3cdf32232a3c7889ed92
        onClick: () => history.push("/checkout"),
      },
    ] as MenuConfig[];

  const getSidebarMenu = () =>
    [
      {
        icon: <LogoutOutlined />,
        name: "Logout",
        onClick: () => {
          history.push("/");
          sessionStorage.removeItem("token");
        },
      },
    ] as MenuConfig[];

  return (
    <Layout>
      <Layout className={"main-layout"}>
        <Header className="header">
          <Menu theme="dark" mode="horizontal">
            {getHeaderMenu().map((menuItem, key) => (
              <Menu.Item
                key={`${key + 1}`}
                icon={menuItem.icon}
                onClick={menuItem.onClick}
              >
                {menuItem.name}
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Layout>
          <Sider breakpoint="lg" collapsedWidth="0">
            <img
              src="images/dbs-bank-logo.png"
              className="sidebar-logo"
              alt="dbsLogo"
            />
            <Menu theme="dark" mode="inline">
              {getSidebarMenu().map((menuItem, key) => (
                <Menu.Item
                  key={`${key + 1}`}
                  icon={menuItem.icon}
                  onClick={menuItem.onClick}
                >
                  {menuItem.name}
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Content>
            <div className="content-layout">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
