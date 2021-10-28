import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ErrorBoundary from "./modules/components/errorBoundary/ErrorBoundary";
import Layout from "./modules/components/layout/Layout";
import Loader from "./modules/components/loader/Loader";
import NotFound from "./modules/components/notFound/NotFound";

import routes from "./modules/utils/routes";

import "./app.scss";

const App = () => {

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/404" exact component={NotFound} />
            <Layout>
              <Switch>
                {routes.map(({ dest, page }, key) => (
                  <Route key={key} exact path={dest} component={page} />
                ))}
                <Redirect to="/404" />
              </Switch>
            </Layout>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
