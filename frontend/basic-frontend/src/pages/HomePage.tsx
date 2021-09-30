import { Button, Card, Col, Row } from "antd";
import { Fragment, useEffect } from "react";
import { useHistory } from "react-router";
import { BaseLayout } from "../layout";
import { notificationService, testService } from "../services";

export const HomePage = () => {
  useEffect(() => {
    onInit();
  }, []);

  const history = useHistory();

  const onInit = async () => {
    try {
      // const res = await testService.test();
      // console.log(res);
    } catch (err: any) {
      // notificationService.error(err.error, err.message);
    }
  };

  return (
    <Fragment>
      <BaseLayout>
        <Card>
          <h1>Shop</h1>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <Card>Items</Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card>Items</Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card>Items</Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card>Items</Card>
            </Col>
          </Row>
        </Card>
        <Card>Items</Card>
      </BaseLayout>
    </Fragment>
  );
};
