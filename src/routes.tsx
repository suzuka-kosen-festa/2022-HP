import type { FC } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { Route, Switch } from "wouter";
import { TopPage, ComingSoonPage, SponsorPage, BazaarPage, MemberPage } from "./pages";
import { useScrollToTop } from "./hooks/useScrollToTop";

const Router: FC = () => {
  useRegisterSW();
  useScrollToTop();
  return (
    <Switch>
      <Route path="/" component={TopPage} />
      <Route path="/sponsors" component={SponsorPage} />
      <Route path="/bazaar" component={BazaarPage} />
      <Route path="/member" component={MemberPage} />
      <Route component={ComingSoonPage} />
    </Switch>
  );
};

export default Router;
