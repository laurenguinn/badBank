import React from 'react';
import { useForm } from "react-hook-form";
import UserContext from './usercontext';
import Card from './card.js';
import { ErrorMessage } from '@hookform/error-message';

export default function Form(props)  {
  const { register, formState: { errors, isDirty, isValid  }, handleSubmit } = useForm({
    criteriaMode: "all", 
    mode: "onChange"
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
    <Card
    bgcolor="info"
    header={props.header}
    title={props.title}
    body= {show ? (
    
      <form onSubmit={handleSubmit(onSubmit)}>

      {props.label1 && (<label>{props.label1}</label>)}
      {props.label1 && (<input className="form-control" type={props.type1}
                    {...register(props.label1, { 
                      shouldUnregister: true, 
                      required:props.x1 , 
                      maxLength: { value: props.length1, message: props.message1 }})} />)}
      <ErrorMessage errors={errors} name={props.label1} />
      
      {props.label2 && (<label>{props.label2}</label>)}
      {props.label2 && (<><input className="form-control" type={props.type2}
                    {...register(props.label2, { 
                      shouldUnregister: true, 
                      required:props.x2, 
                      minLength: {value: props.length2, message: props.message2} })} />
                      <ErrorMessage errors={errors} name={props.label2} /></>)}
      

      {props.label3 && (<label>{props.label3}</label>)}
      {props.label3 && (<input className="form-control" type={props.type3}
                    {...register(props.label3, { 
                      shouldUnregister: true, 
                      required:props.x3, 
                      minLength: {value: props.length3, message: props.message3} })} />)}
      <ErrorMessage errors={errors} name={props.label2} />
      <input type="submit" disabled={!isDirty || !isValid} />
      </form>     
    ):(
      <>
      <h5>Success</h5>
      <button type="submit" className="btn btn-light" onClick={clearForm}>{props.successButton}
      </button>
      </>
    )}
    />
  );
}


import React from 'react';
import { useForm } from "react-hook-form";
import UserContext from './usercontext';
import Card from './card.js';
import { ErrorMessage } from '@hookform/error-message';

export default function Form(props)  {
  const { register, formState: { errors, isDirty, isValid  }, handleSubmit } = useForm({
    criteriaMode: "all", 
    mode: "onChange"
  });
  const [show, setShow] = React.useState(true);
  const [showBalance, setShowBalance] = React.useState(true);
  const ctx = React.useContext(UserContext); 
  


  const onSubmit = (data) => {

    console.log({props: data});
    console.log(data);
    //console.log({label1});
    ctx.users.push(data);
    alert(JSON.stringify(data));
    setShow(false);
    setShowBalance(false);
    const users = ctx.users;
    console.log(users);
    const matches = users.find(user => {
      return user.email == data.label1;
   });
  
   
   console.log(matches);
  };

  function clearForm() {
    setShow(true);
  }
  
  return (
    <Card
    bgcolor={props.bgcolor}
    header={props.header}
    title={show ? ( props.title) : ( <></>) }
    balance={showBalance && props.showBalance ? ( props.balance) : ( <></>) }
    body= {show ? (
    
      <form onSubmit={handleSubmit(onSubmit)}>
        {props.label1 && (
          <div className="form-group">
            <label>{props.label1}</label>
          
            <input className="form-control" type={props.type1}
                      {...register(props.label1, { 
                        shouldUnregister: true, 
                        required:props.x1 , 
                        maxLength: { value: props.length1, message: props.message1 }, 
                        validate: props.validateFunction
                        /*validate: {
                          positive: v => parseInt(v) > 0,
                          lessThanTen: v => parseInt(v) < 10
                        
                        } */
                        })} />
            <ErrorMessage errors={errors} name={props.label1} />
          
          </div>)}

          {props.label2 && (
          <div className="form-group">
            <label>{props.label2}</label>
          
            <input className="form-control" type={props.type2}
                      {...register(props.label2, { 
                        shouldUnregister: true, 
                        required:props.x2 , 
                        minLength: { value: props.length2, message: props.message2 }})} />
            <ErrorMessage errors={errors} name={props.label2} />
          
          </div>)}

          {props.label3 && (
          <div className="form-group">
            <label>{props.label3}</label>
          
            <input className="form-control" type={props.type3}
                      {...register(props.label3, { 
                        shouldUnregister: true, 
                        required:props.x3, 
                        minLength: { value: props.length3, message: props.message3 }})} />
            <ErrorMessage errors={errors} name={props.label3} />
          
          </div>)}

          {props.label4 && (
          <div className="form-group">
            <label>{props.label4}</label>
          
            <input className="form-control" type={props.type4}
                      {...register(props.label4, { 
                        shouldUnregister: true, 
                        required:props.x4, 
                        minLength: { value: props.length4, message: props.message4 }})} />
            <ErrorMessage errors={errors} name={props.label4} />
          
          </div>)}

        <input type="submit" disabled={!isDirty || !isValid} />
      </form>     
    ):(
      <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>{props.successButton}
        </button>
      </>
    )}
    />
  );
}
