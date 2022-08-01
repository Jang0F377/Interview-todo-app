import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ROUTE from "@enums/Routes";

//Pages
import Home from "./Home";
import NotFound from "./NotFound";

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTE.HOME} element={ <Home />} />
      <Route path={ROUTE.NOT_FOUND} element={ <NotFound /> } />
      <Route path ="*" element={<Navigate to={ROUTE.NOT_FOUND} replace />} />
    </Routes>
  </BrowserRouter>
);

export default Router;