import React  from "react";
import "./textfield.css"
const TextField = (props) => {
  return (
    <input
      className="text_input"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
   />
   
  );
};

export default TextField;
