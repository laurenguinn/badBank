//import React from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

//const UserContext = React.createContext();
//const LoggedIn = React.createContext();

//export default UserContext;
/*export {
   UserContext,
   LoggedIn   
}*/

import React, { useState, createContext, useMemo } from "react";

const UserContextName = createContext();
const UserContext = createContext();

const UserProvider = (props) => {
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(true);
  // the state that we'll be storing the username into

  /* because we will be providing an object to the provider, 
it is better to put the value inside a useMemo so that the 
component will only re-render when there's a change in the value. */

  const value = useMemo(
    () => ({ username, disabled, setUsername, setDisabled }),
    [username, disabled]
  );

  return (
    <UserContextName.Provider value={value}>
      {props.children}
    </UserContextName.Provider>
  );
};
export { UserContextName, UserProvider, UserContext };
