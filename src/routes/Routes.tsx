import { FC } from "react";
import { routes } from "./list";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { IRoutes } from "../types/types";
import Registration from "../components/Auth/Registration/Registration";
import SignIn from "../components/Auth/SignIn";
// import Auth from "../components/Auth/Auth";
import { IUserData } from "../components/Auth/types";
import { useState } from "react";
import Auth from "../components/Auth/Auth";

const RoutesComponent: FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const isAuth = false;
  return (
    <Router>
      <Routes>
        {routes.map((route: IRoutes) => {
          if (route.auth && !isAuth) {
            return (
              <>
                {/* <Route
                  path="/"
                  element={<SignIn setUserData={setUserData} />}
                />
                <Route path="/registration" element={<Registration />} /> */}
                <Route
                  path={"*"}
                  element={
                    <Auth isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
                  }
                />
              </>
            );
          }
          return (
            <Route
              path={route.path}
              element={<Layout children={<route.component />} />}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
