import type { FC } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { Redirect, Route, Switch } from "wouter";
import { MainPage } from "./pages";

const Router: FC = () => {
  useRegisterSW();
  return (
    <Switch>
      <Route path="/" component={MainPage} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Router;
