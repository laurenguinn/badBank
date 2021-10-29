import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContextName } from "./context";


const SetUserDetails = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const { setUsername } = useContext(UserContextName);
  const handleSetName = () => {
    setUsername(name);
    history.push("/user");
  };
  return (
    <>
      <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSetName}>Set Name </button>
    </>
  );
};

export default SetUserDetails;