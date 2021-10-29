import React from 'react';
import Card from './card.js';
import piggy from '../pexels-alexandr-podvalny-7646224.jpg';
export default function Home(){
    return (
      <div className="container-class-no-bg">
      <Card
        className="home"
        width="50rem"
        header="Welcome to Bad Bank!"
        title="Welcome to Bad Bank!"
        text="We appreciate your business and will do our best to protect you and your money."
        body={(<img src={piggy} className="card-img" alt="Responsive"/>)}
      />  
      </div>  
    );  
  }