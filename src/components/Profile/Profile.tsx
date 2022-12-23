import React from "react";
import logo from "./logo.svg";
import "./Profile.css";

function Profile() {
  return (
    <div className="ProfileWrapper">
      <div className="ProfileHeader">Profile</div>
      <div className="ProfileContent">
        <div className="ProfileBox">
          <div className="ProfileText">Company</div>
          <div className="ProfileTextBox">
            <input className="ProfileInput"></input>
          </div>
        </div>
        <div className="ProfileBox">
          <div className="ProfileText">Contact name</div>
          <div className="ProfileTextBox">
            <input className="ProfileInput"></input>
          </div>
        </div>
        <div className="ProfileBox">
          <div className="ProfileText">Company address</div>
          <div className="ProfileTextBox">
            <input className="ProfileInput"></input>
          </div>
        </div>
        <div className="ProfileBox"></div>
        <div className="ProfileBox">
          <div className="ProfileText">Years of experience</div>
          <div className="ProfileTextBox">
            <input className="ProfileInput"></input>
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

export default Profile;
