import React, { useState, useContext } from "react";
import Form from "./form.js";
import { UserContext } from "./context";

export default function CreateAccount() {
  const users = useContext(UserContext).users;
  const [show, setShow] = useState(true);

  const onSubmit = (data) => {
    //const users = ctx.users;
    const matches = users.find((user) => {
      return user.email === data.email;
    });

    //console.log(matches);
    if (matches) {
      alert("email already taken");
      return;
    }

    users.push(data);
    setShow(false);
  };

  function clearForm() {
    setShow(true);
  }

  return (
    <Form
      containerClass="container-class"
      className="create-account"
      width="25rem"
      header="Create Account"
      name="name"
      email={true}
      password={true}
      balance="Starting Balance"
      handle={onSubmit}
      show={show}
      clearForm={clearForm}
      successButton="Create Another Account"
    />
  );
}
