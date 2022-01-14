import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import SessionProvider from "./reducers/session";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  return (
    <>
      <SessionProvider>
        <Provider store={store}>
          <Router basename="/">
            <AccessibleNavigationAnnouncer />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/create-account" component={CreateAccount} />
              <Route path="/forgot-password" component={ForgotPassword} />

              {/* Place new routes over this */}
              <Route path="/" component={Layout} />
            </Switch>
          </Router>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default App;
