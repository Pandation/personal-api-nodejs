import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { Label, Input, Button } from "@windmill/react-ui";
import { SessionContext, AUTH } from "../reducers/session";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { session, login, dispatch } = React.useContext(SessionContext);

  useEffect(() => {
    dispatch({ type: AUTH.GET_ADMIN });
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  if (session.loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <Label>
                <span>Utilisateur</span>
                <Input
                  className="mt-1"
                  type="text"
                  name="username"
                  placeholder="Nom d'utilisateur"
                  value={credentials.username}
                  onChange={handleChange}
                />
              </Label>

              <Label className="mt-4">
                <span>Mot de passe</span>
                <Input
                  className="mt-1"
                  type="password"
                  name="password"
                  value={credentials.password}
                  placeholder="***************"
                  onChange={handleChange}
                />
              </Label>

              <Button className="mt-4" block onClick={() => login(credentials)}>
                Se Connecter
              </Button>

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Mot de passe oublié?
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
