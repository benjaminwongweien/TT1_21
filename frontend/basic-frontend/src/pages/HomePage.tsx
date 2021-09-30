import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Row } from "antd";
import { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BaseLayout } from "../layout";
import { notificationService, productService } from "../services";

const { Meta } = Card;

export const HomePage = () => {
  useEffect(() => {
    onInit();
  }, []);

  const history = useHistory();
  const [products, setProducts] = useState([]);
  const onInit = async () => {
    try {
      const res = await productService.viewAllProducts();
    } catch (err: any) {
      notificationService.error(err.error, err.message);
    }
  };

  return (
    <Fragment>
      <BaseLayout>
        <Card>
          <h1>View All Products</h1>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <PlusOutlined key="add" />,
                  <MinusOutlined key="edit" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <PlusOutlined key="add" />,
                  <MinusOutlined key="edit" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <PlusOutlined key="add" />,
                  <MinusOutlined key="edit" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <PlusOutlined key="add" />,
                  <MinusOutlined key="edit" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
          </Row>
        </Card>
      </BaseLayout>
    </Fragment>
  );
};
