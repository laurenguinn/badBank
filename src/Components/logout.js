import React, { useContext } from "react";
import Form from "./form.js";
import { UserContextName } from "./context";
import { useHistory } from "react-router-dom";

export default function LogOut() {
  const { setUsername, setDisabled } = useContext(UserContextName);
  const history = useHistory();

  function clearForm() {
    setUsername("");
    setDisabled(true);
    sessionStorage.clear();
    history.push("/login");
  }

  return (
    <Form
      containerClass="container-class"
      className="log-in"
      header="Log Out"
      email="email"
      password={true}
      successButton="Log Out"
      clearForm={clearForm}
    />
  );
}
