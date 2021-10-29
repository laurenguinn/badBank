import Form from "./form.js";
import React, { useState, useContext } from "react";
import { UserContext, UserContextName } from "./context";
import { useHistory } from "react-router-dom";

export default function LogIn() {
  const [show] = useState(true);
  const users = useContext(UserContext).users;
  const { setUsername, setDisabled } = useContext(UserContextName);
  const history = useHistory();

  const onSubmit = (data) => {
    const user = users.find((user) => {
      return user.email === data.email;
    });

    if (!user) {
      alert("couldnt find user. please check details or create account");
      //history.push("/createaccount");
    } else if (
      user &&
      data.password === user.password &&
      data.email === user.email
    ) {
      sessionStorage.setItem("balance", user.balance);
      sessionStorage.setItem("userName", user.name);
      sessionStorage.setItem("email", data.email);
      sessionStorage.setItem("passowrd", data.password);
      setUsername(user.name);
      setDisabled(false);
      history.push("/logout");
    } else {
      alert("incorrect password");
    }
  };

  return (
    <Form
      containerClass="container-class"
      className="log-in"
      bgcolor="primary"
      header="LogIn"
      email="email"
      password={true}
      handle={onSubmit}
      successButton="Log Out"
      show={show}
    />
  );
}
