import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
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
  const [products, setProducts] = useState<Array<Object>>([]);
  const onInit = async () => {
    try {
      const res = await productService.viewAllProducts();
      var products = JSON.parse(JSON.stringify(res));
      setProducts(products);
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
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  />
                }
                actions={[
                  <PlusOutlined key="add" />,
                  <MinusOutlined key="edit" />,
                ]}
              >
                <Meta
                  // title={product.title}
                  title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                  description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  />
                }
                actions={[
                  <PlusOutlined key="add" />,
                  <MinusOutlined key="edit" />,
                ]}
              >
                <Meta
                  title="Mens Casual Premium Slim Fit T-Shirts "
                  description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  />
                }
                actions={[
                  <PlusOutlined key="add" />,
                  <MinusOutlined key="edit" />,
                ]}
              >
                <Meta
                  title="Mens Cotton Jacket"
                  description="great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                  />
                }
                actions={[
                  <PlusOutlined key="add" />,
                  <MinusOutlined key="edit" />,
                ]}
              >
                <Meta
                  title="Mens Casual Slim Fit"
                  description="The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description."
                />
              </Card>
            </Col>
          </Row>
        </Card>
      </BaseLayout>
    </Fragment>
  );
};
