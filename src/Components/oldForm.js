


import React from 'react';
import { useForm } from "react-hook-form";
import UserContext from './usercontext';
import { ErrorMessage } from '@hookform/error-message';

export default function Form({ label1, label2, x1, x2, length1, message1, length2, message2 } ) {
  const { register, formState: { errors }, handleSubmit } = useForm({
    criteriaMode: "all"
  });
  const [show, setShow] = React.useState(true);
  const ctx = React.useContext(UserContext); 
  const onSubmit = (data) => {
    ctx.users.push(data);
    alert(JSON.stringify(data));
    setShow(false);
  };

  function clearForm() {
    
    setShow(true);
  }
  
  return (
  <>
  {show ? (
   <form onSubmit={handleSubmit(onSubmit)}>


   {label1 && (<label>{label1}</label>)}
   {label1 && (<input className="form-control" 
                {...register(label1, { 
                  shouldUnregister: true, 
                  required:x1 , 
                  maxLength: { value: length1, message: message1 }})} />)}
   <ErrorMessage errors={errors} name={label1} />
   
   {label2 && (<label>{label2}</label>)}
   {label2 && (<input className="form-control" 
                {...register(label2, { 
                  shouldUnregister: true, 
                  required:x2, 
                  minLength: {value: length2, message: message2} })} />)}
   <ErrorMessage errors={errors} name={label2} />
   <input type="submit" />
   </form>     
    ):
    (
      <>
       <h5>Success</h5>
       <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account
       </button>
      </>
    )}
  
  </>
);
}