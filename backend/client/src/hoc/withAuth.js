import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { SessionContext } from "../reducers/session";
import { AUTH } from "../reducers/session";
import ThemedSuspense from "../components/ThemedSuspense";

const withAuth = (Component) => (props) => {
  const { session, dispatch } = React.useContext(SessionContext);

  useEffect(() => {
    if (!session.loaded && !session.fetching) {
      dispatch({ type: AUTH.GET_ADMIN });
    }
  }, [session.loaded, session.fetching, dispatch]);

  if (session.loaded && !session.loggedIn) {
    return <Redirect to="/login" />;
  }

  if (session.fetching) {
    return <ThemedSuspense />;
  }

  return <>{session.loggedIn && <Component {...props} />}</>;
};

export default withAuth;
