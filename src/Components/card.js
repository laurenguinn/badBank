import React from "react";

export default function Card(props) {
  return (
    <div
      className={props.className}
      style={{
        maxWidth: props.width || "20rem",
        borderRadius: "1%"
      }}
    >
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
