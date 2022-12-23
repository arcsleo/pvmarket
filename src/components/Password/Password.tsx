import React from "react";
import logo from "./logo.svg";
import "./Password.css";

function Password() {
  return (
    <div className="ProfileWrapper">
      <div className="ProfileHeader">Change Password</div>
      <div className="ProfileContent">
        <div className="ProfileBox">
          <div className="ProfileText">Current password</div>
          <div className="ProfileTextBox">
            <input className="ProfileInput" type="password"></input>
          </div>
        </div>
        <div className="ProfileBox"></div>
        <div className="ProfileBox">
          <div className="ProfileText">New password</div>
          <div className="ProfileTextBox">
            <input className="ProfileInput" type="password"></input>
          </div>
        </div>
        <div className="ProfileBox"></div>
        <div className="ProfileBox">
          <input
            className="SubmitButton"
            type="button"
            value="Confirm Changes"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Password;
