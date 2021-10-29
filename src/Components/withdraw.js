import Form from "./form.js";
import React, { useState, useContext } from "react";
import { UserContext } from "./context";

export default function Withdraw() {
  const email = sessionStorage.getItem("email");
  const balance = sessionStorage.getItem("balance");
  const users = useContext(UserContext).users;
  const [show, setShow] = useState(true);

  const onSubmit = (data) => {
    if (parseInt(data.amount) > parseInt(balance)) {
      alert("Withdrawal amount exceeds balance");
      return;
    }

    let updatedBalance = parseInt(balance) - parseInt(data.amount);
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
      className="withdraw"
      header="Withdraw"
      title={"Balance:   $" + balance}
      amount="Withdraw Amount"
      handle={onSubmit}
      successButton="Make Another Withdrawal"
      successDisplay={"Balance:   $" + balance}
      show={show}
      clearForm={clearForm}
    />
  );
}
