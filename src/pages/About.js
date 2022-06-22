import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/Me.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Chelsea Heredia</div>
            <div className="brief_description">
                I am a junior at the University of Texas at Dallas, where I will be graduating with a
                B.S. in Computer Science in May 2024.

                I am participating in the Software Development Track in IBM Accelerate Summer 2022.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
