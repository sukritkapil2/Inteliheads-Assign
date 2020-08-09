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
                    This the landing page of the website. The purpose is to show
                    the data in a list view using React JS after fetching it
                    from the API. The URL is
                    https://5d11b2ce84e906001457646a.mockapi.io/testdata.
                    Assigment for Inteliheads by - Sukrit
                  </p>
                  <button
                    className="view-list-btn mt-sm-5"
                    onClick={() => {
                      window.location.href = "/list";
                    }}
                  >
                    View List
                  </button>
                </div>
                <div className="col-12 col-sm-4 mt-4 mt-sm-0 img-div">
                  <img
                    src="/assets/images/welcome.jpg"
                    className="img-fluid"
                    alt="welcome"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
