import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import TextField from "../form/TextField";
const NavBar = ({ getSearchValue }) => {
  
    const Navigate =useNavigate()
  
  
  const [textField, setTextField] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    setTextField("");
    getSearchValue(textField);
  };
  return (
    <div className="navbar">
      <h3 onClick={()=> Navigate("/")}>AbdelTech.</h3>
      <form onSubmit={submitHandle}>
        <TextField
          value={textField}
          type="search"
          placeholder="find an Article"
          onChange={(e) => setTextField(e.target.value)}
        />
        <button type="submit">find</button>
      </form>
    </div>
  );
};

export default NavBar;
