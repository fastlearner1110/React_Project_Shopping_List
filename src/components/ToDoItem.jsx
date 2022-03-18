import React, { useState } from "react";

function ToDoItem(props) {
  let [state, setState] = useState(false);
  let handleStyle = () => {
    setState(!state);
  };
  return (
    <div>
      <li style={{ display: "flex" }}>
        <span
          onClick={handleStyle}
          style={{ textDecoration: state ? "line-through" : "none", flex: "1" }}
        >
          {props.text}
        </span>
        <span style={{ flex: "1" }}>{props.quantity}</span>
        <span style={{ flex: "1" }}>{props.price}</span>
        <button
          onClick={() => {
            props.onChecked(props.id);
          }}
          style={{ flex: "1", marginLeft: "10px" }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default ToDoItem;
