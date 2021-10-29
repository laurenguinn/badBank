import React, { useContext } from "react";
import { UserContext } from "./context";
import Card from "./card";

export default function AllData() {
  const users = useContext(UserContext).users;

  return (
    <div className="container-class">
      <Card
        className="all-data"
        width="90%"
        header="All User Data"
        body={
          <>
            <div className="container">
              <div className="row header">
                <div className="col-sm">Name</div>
                <div className="col-sm">Email</div>
                <div className="col-sm">Password</div>
                <div className="col-sm">Balance</div>
              </div>
              {users.map((user) => (
                <div key={user.email} className="row">
                  <div className="col-sm">{user.name}</div>
                  <div className="col-sm">{user.email}</div>
                  <div className="col-sm">{user.password}</div>
                  <div className="col-sm">{user.balance}</div>
                </div>
              ))}
            </div>
          </>
        }
      />
    </div>
  );
}
