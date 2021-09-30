import { Button } from "antd";
import { useEffect } from "react";
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
      const res = await testService.test();
      console.log(res);
    } catch (err: any) {
      notificationService.error(err.error, err.message);
    }
  };

  return (
    <BaseLayout>
      <div>
        Welcome to DBS, XXX!
        <p />
        <Button type="primary" onClick={() => history.push("/charts")}>
          Start Exploring
        </Button>
      </div>
    </BaseLayout>
  );
};
