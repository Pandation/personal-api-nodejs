import React, { useEffect } from "react";
import { SessionContext } from "../reducers/session";
import { AUTH } from "../reducers/session";
import { Redirect } from "react-router-dom";

const withAuth = (Component) => (props) => {
  const { session, dispatch } = React.useContext(SessionContext);

  useEffect(() => {
    if (!session.loaded && !session.fetching) {
      dispatch({ type: AUTH.GET_ADMIN });
    }
  }, [session.loaded]);

  if (session.loaded && !session.loggedIn) {
    return <Redirect to="/login" />;
  }

  if (session.fetching) {
    return <div>Loading...</div>;
  }

  return <>{session.loggedIn && <Component {...props} />}</>;
};

export default withAuth;
