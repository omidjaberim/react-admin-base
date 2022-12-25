import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import Layout from "pages/dashboard/Layout/Layout";
import { ProtectedRoute } from "components";
import NotFound from "./NotFound/NotFound";
import { ROUTES } from "constants/enums";

const MainPage = React.lazy(() => import("pages/dashboard/Mainpage/Mainpage"));

const Router = () => {
  const isLogin = useAppSelector((store: any) => store.auth.isLogin);
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      {!isLogin ? (
        <Route element={<Layout />}>
          <Route
            path={ROUTES.ROOT}
            element={
              <ProtectedRoute permission={"mainPage"}>
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.MAIN_PAGE}
            element={
              <ProtectedRoute permission={"mainPage"}>
                <MainPage />
              </ProtectedRoute>
            }
          />
        </Route>
      ) : (
        <Route path="/" element={<Login />} />
      )}
    </Routes>
  );
};
export default Router;

function Login() {
  window.location.replace(ROUTES.REDIRECT_ROUT);
  return null;
}
