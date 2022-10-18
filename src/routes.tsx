import type { FC } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { Route, Switch } from "wouter";
import { TopPage, NotFoundPage } from "./pages";

const Router: FC = () => {
  useRegisterSW();
  return (
    <Switch>
      <Route path="/" component={TopPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Router;
