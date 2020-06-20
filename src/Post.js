import React from 'react';
import './Post.css';

const post = (props) => (
    <div className="Post">
       <p> {props.name} </p>
      <p>{props.lastName}</p>
      {/* <p>{props.Age}</p> */}
      <p>{props.DOB}</p>
      <p>{props.gender}</p>
      <p>{props.phoneNumber}</p>
      <p>{props.landlineNumber}</p>
    </div>
   
);

export default post;