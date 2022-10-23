import type { FC } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { Route, Switch } from "wouter";
import { TopPage, ComingSoonPage, SponsorPage } from "./pages";

const Router: FC = () => {
  useRegisterSW();
  return (
    <Switch>
      <Route path="/" component={TopPage} />
      <Route path="/sponsors" component={SponsorPage} />
      <Route component={ComingSoonPage} />
    </Switch>
  );
};

export default Router;
