import { useEffect, useState } from "react";
import { GlobalContext, GlobalContextProps, User } from "./context";
import { MainRouter } from "./routers";
import { CartItem } from "./context";

import "antd/dist/antd.css";
import "./styles/App.scss";

export const App = () => {
  const [user, setUser] = useState<User>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    onInit();
  }, []);

  const onInit = () => {
    const token = JSON.parse(sessionStorage.getItem("token")!);
    if (!!token) {
      setUser({ token });
    }
    setMounted(true);
  };

  let cardItem1:CartItem = {product_id:1, product_qty:1};
  let cardItem2:CartItem = {product_id:2, product_qty:2};

  const contextValue: GlobalContextProps = {
    user,
    setUser: (user) => setUser(user),
    cartItems: [cardItem1,cardItem2],
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {mounted && <MainRouter />}
    </GlobalContext.Provider>
  );
};
