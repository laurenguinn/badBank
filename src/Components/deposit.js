import Form from "./form.js";
import React, { useState, useContext } from "react";
import { UserContext } from "./context";

export default function Deposit() {
  const email = sessionStorage.getItem("email");
  const balance = sessionStorage.getItem("balance");
  const users = useContext(UserContext).users;
  const [show, setShow] = useState(true);

  const onSubmit = (data) => {
    let updatedBalance = parseInt(balance) + parseInt(data.amount);
    sessionStorage.setItem("balance", updatedBalance);

    const user = users.find((user) => {
      return user.email === email;
    });

    user.balance = updatedBalance;
    user.amount = data.amount;
    setShow(false);
  };

  function clearForm() {
    setShow(true);
  }

  return (
    <Form
      containerClass="container-class"
      className="deposit"
      header="Deposit"
      title={"Balance:   $" + balance}
      amount="Deposit Amount"
      handle={onSubmit}
      successButton="Make Another Deposit"
      successDisplay={"Balance:   $" + balance}
      show={show}
      clearForm={clearForm}
    />
  );
}
