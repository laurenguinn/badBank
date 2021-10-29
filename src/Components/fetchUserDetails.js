import React, { useContext } from "react";
import { UserContextName } from "./context";

const FetchUserDetails = () => {
  const { username } = useContext(UserContextName);

  return <>{username ? `Hello ${username}` : `Hello User`}</>;
};

export default FetchUserDetails;