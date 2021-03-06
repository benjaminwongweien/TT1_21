import { Button, Result } from "antd";
import { useHistory } from "react-router-dom";

export const NotFoundPage = () => {
  const history = useHistory();

  return (
    <div className="other-layout">
      <Result
        style={{ margin: "auto" }}
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.goBack()}>
            Back
          </Button>
        }
      />
    </div>
  );
};
