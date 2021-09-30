import { useEffect, useState } from "react";
import { GlobalContext, GlobalContextProps, User } from "./context";
import { MainRouter } from "./routers";

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

  const contextValue: GlobalContextProps = {
    user,
    setUser: (user) => setUser(user),
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {mounted && <MainRouter />}
    </GlobalContext.Provider>
  );
};
