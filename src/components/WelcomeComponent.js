import React from "react";
import Header from "./HeaderComponent";
import "../stylesheets/welcome.css";

class Welcome extends React.Component {
  render() {
    return (
      <div className="bg">
        <div className="content">
          <div className="row">
            <Header></Header>
          </div>
          <br></br>
          <div className="row">
            <div className="show-list">
              <div className="row">
                <div className="col-12 col-sm-7">
                  <span className="text-white">LANDING PAGE</span>
                  <p className="heading-1">
                    <strong>Fetch Details With Single Click !</strong>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button className="view-list-btn mt-sm-5">View List</button>
                </div>
                <div className="col-12 col-sm-4 mt-4 mt-sm-0 img-div">
                  <img
                    src="/assets/images/welcome.jpg"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image"></div>
      </div>
    );
  }
}

export default Welcome;
