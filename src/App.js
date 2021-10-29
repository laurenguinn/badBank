import React, { useState } from "react";
import NavBar from "./Components/navbar.js";
import Home from "./Components/home.js";
import AllData from "./Components/alldata.js";
import CreateAccount from "./Components/createaccount";
import LogIn from "./Components/login";
import LogOut from "./Components/logout";
import Deposit from "./Components/deposit";
import Withdraw from "./Components/withdraw";
import { UserContext } from "./Components/context.js";
import { Route, HashRouter } from "react-router-dom";
import { UserProvider } from "./Components/context";
import SetUserDetails from "./Components/setUserDetails";
import FetchUserDetails from "./Components/fetchUserDetails";

function App() {
  const [username] = useState();

  return (
    

    <UserProvider>
      <HashRouter>
        <NavBar {...{ username }} />

        <UserContext.Provider value={{ users: [] }}>
      
            <Route path="/" exact component={Home} />
            <Route path="/setUserDetails" component={SetUserDetails} />
            <Route path="/fetchUserDetails" component={FetchUserDetails} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/alldata/" component={AllData} />
            <Route
              path="/login/"
              render={(routeProps) => (
                <LogIn {...{ username, ...routeProps }} />
              )}
            />
            <Route path="/logout/" component={LogOut} />
          
        </UserContext.Provider>
      </HashRouter>
    </UserProvider>
 
  
  );
}

export default App;
