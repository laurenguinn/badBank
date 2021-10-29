import React from 'react';
import Card from './card.js';
import UserContext from './usercontext';

export default function CreateAccount(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [username, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const ctx = React.useContext(UserContext); 
  

 
  function validate(field, label) {
    if (!field) {
      setStatus('Error' + label);
      return false;
    }
    return true;
  }

  function handleCreate() {
    
    if (!validate(username, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    alert(username + ' ' + email + ' ' + password);
    ctx.users.push({username, email, password, balance:100});
    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    
    <Card
    bgcolor="info"
    header="CreateAccount"
    status={status}
    body={show ? (
      <>
      Name<br/>
      <input type="text" className="form-control" id="name"
      placeholder="Enter Name" value={username} onChange={e => setName(e.currentTarget.value)}/>
      <br/>
      Email<br/>
      <input type="text" className="form-control" id="name"
      placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
      <br/>
      Password<br/>
      <input type="text" className="form-control" id="name"
      placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
     <br/>
     <button type="submit" className="btn btn-light" onClick={handleCreate}>Submit
      </button>
     {/* <form>
        <InputField label="Username" placeholder="Enter username" onChange={e => setName(e.currentTarget.value)}/>
        <InputField label="Email" placeholder="Enter Email" onChange={ e => setEmail(e.currentTarget.value)}/>
        <InputField label="Password" placeholder="Enter Password" onChange={ e => setPassword(e.currentTarget.value)}/>
     </form>
      <button type="submit" className="btn btn-light" onClick={handleCreate}>Submit</button>*/}
      
      </>
    ):
    (
      <>
       
       <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account
       </button>
      
      </>
    )}
  />
  );
}