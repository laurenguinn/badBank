import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import Card from './card.js';
import '../styles.css';
import { ErrorMessage } from '@hookform/error-message';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Form(props)  {
  const { register, formState: { errors, isDirty, isValid }, handleSubmit } = useForm({
    criteriaMode: "all", 
    mode: "all"
    
  });
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className={props.containerClass}>
    <Card 
    className={props.className}
    width={props.width}
    header={props.header}
    title={props.show ? ( props.title) : ( <></>) }
    body= {props.show ? (
      <form onSubmit={handleSubmit(props.handle)}>
        {props.name && (
          <div className="form-group">
            <label>Name</label>
            <input className="form-control error-message" type="text"
                      {...register("name", { 
                        shouldUnregister: true, 
                        required: "Name is required" })} />
            <span className="error-message"><ErrorMessage errors={errors} name="name" /></span>
          </div>)}
          {props.email && (
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="email" autoComplete="username"
                      {...register("email", { 
                        shouldUnregister: true, 
                        required: "Email is required"})} />
            <span className="error-message"><ErrorMessage errors={errors} name="email" /></span>
          </div>)}
          {props.password && (
          <div className="form-group">
             <div className="pass-wrapper">
            <label>Password</label>
            <input className="form-control" type={passwordShown ? "text" : "password"} autoComplete="current-password"
                      {...register("password", { 
                        shouldUnregister: true, 
                        required: "Password is required", 
                        minLength: { value: 8, message: "password must have 8+ characters" }})} />
                        <i onClick={togglePasswordVisiblity}>{eye}</i>
                        </div>
          <span className="error-message"><ErrorMessage errors={errors} name="password" /></span>
          </div>)}
          {props.balance && (
          <div className="form-group">
            <label>{props.balance}</label>
            <input className="form-control" type="number"
                      {...register("balance", { 
                        shouldUnregister: true, 
                        required: "enter numerical value", 
                        min: { value: 1, message: "must enter amount greater than 0" }})} />
            <span className="error-message"><ErrorMessage errors={errors} name="balance" /></span>
          </div>)}
          {props.amount && (
          <div className="form-group">
            <label>{props.amount}</label>
            <input className="form-control" type="number"
                      {...register("amount", { 
                        shouldUnregister: true, 
                        required: "enter numerical value", 
                        min: { value: 1, message: "must enter amount greater than 0" }})} />
           <span className="error-message"><ErrorMessage errors={errors} name="amount" /></span>
          </div>)}
        <input className="btn btn-light" type="submit" disabled={!isDirty || !isValid} />
      </form>     
    ):(
      <div className="successForm">
        <h5>{props.successMessage}</h5>
        <h6>{props.successDisplay}</h6>
        <input type="submit" className="btn btn-light success-btn" onClick={props.clearForm} value={props.successButton}/>
        
      </div>
    )}
    />
    </div>
  );
}
