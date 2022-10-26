import type { FC } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import { Route, Switch } from "wouter";
import { TopPage, SponsorPage, BazaarPage, MemberPage, NotFoundPage } from "./pages";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { useJwt } from "./hooks/useJwt";

const Router: FC = () => {
  useRegisterSW();
  useScrollToTop();
  useJwt();
  return (
    <Switch>
      <Route path="/" component={TopPage} />
      <Route path="/sponsors" component={SponsorPage} />
      <Route path="/bazaar" component={BazaarPage} />
      <Route path="/member" component={MemberPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Router;
