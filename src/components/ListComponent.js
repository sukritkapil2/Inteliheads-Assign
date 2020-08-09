import React from "react";
import Header from "./HeaderComponent";
import ReactPaginate from "react-paginate";
import "../stylesheets/list.css";

const User = ({ info }) => {
  return (
    <div className="block-user mt-1">
      <img
        src={info.avatar}
        style={{
          float: "left",
          borderRadius: "40px",
          overflow: "hidden",
          marginRight: "10px",
        }}
        width="85"
        height="85"
        alt="user"
      ></img>
      <div className="info">
        <div className="top">
          <h5 className="text-white">
            <b style={{ color: "#312e97", fontFamily: "Montserrat" }}>
              {info.name}
            </b>
          </h5>
        </div>
        <div
          className="brief"
          style={{ fontFamily: "Roboto", fontWeight: "500" }}
        >
          Created At : {info.createdAt}
        </div>
      </div>
    </div>
  );
};

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingUsers: true,
      users: [],
      pageCount: 0,
      currentPage: 0,
      currentUsers: [],
    };

    this.setCurrentUsers = this.setCurrentUsers.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    fetch("https://5d11b2ce84e906001457646a.mockapi.io/testdata")
      .then((data) => data.json())
      .then((data) => {
        this.setState(
          {
            users: data,
            pageCount: data.length / 4,
          },
          () => {
            this.setCurrentUsers(0);
          }
        );
      });
  }

  setCurrentUsers(start) {
    var end =
      start + 4 >= this.state.users.length
        ? this.state.users.length
        : start + 4;

    var tempUsers = this.state.users.slice(start, end);
    this.setState({
      loadingUsers: false,
      currentUsers: tempUsers,
    });
  }

  handlePageClick(e) {
    this.setState(
      {
        currentPage: e.selected,
      },
      () => {
        this.setCurrentUsers(this.state.currentPage * 4);
      }
    );
  }

  render() {
    return (
      <div className="bg">
        <div className="content">
          <div className="row">
            <Header></Header>
          </div>
          <br></br>
          <div className="user-list">
            <div className="row">
              <div className="col-12 col-sm-5">
                <span className="text-white">USERS LIST</span>
                <p className="heading-1">
                  <strong>Users Data From Mock API</strong>
                </p>
                <p>
                  This the landing page of the website. The purpose is to show
                  the data in a list view using React JS after fetching it from
                  the API. The URL is
                  https://5d11b2ce84e906001457646a.mockapi.io/testdata.
                  Assigment for Inteliheads by - Sukrit
                </p>
                <button
                  className="view-list-btn mt-sm-5"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  Go Back
                </button>
              </div>
              <div className="users col-12 col-sm-6 mt-5 mt-sm-0">
                {this.state.loadingUsers ? (
                  <div className="group-loading">
                    <div
                      class="spinner-grow text-light"
                      style={{ width: "1em", height: "1em" }}
                      role="status"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
                    &nbsp;
                    <div
                      class="spinner-grow text-light"
                      style={{ width: "1em", height: "1em" }}
                      role="status"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
                    &nbsp;
                    <div
                      class="spinner-grow text-light"
                      style={{ width: "1em", height: "1em" }}
                      role="status"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div className="load-text text-white">Fetching Users</div>
                  </div>
                ) : (
                  <React.Fragment>
                    <div>
                      {this.state.currentUsers &&
                        this.state.currentUsers.map((user) => {
                          return <User info={user}></User>;
                        })}
                    </div>
                    <div className="paginator">
                      <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        breakLabel={<span className="gap">...</span>}
                        pageCount={this.state.pageCount}
                        onPageChange={this.handlePageClick}
                        forcePage={this.state.currentPage}
                        containerClassName={"pagination"}
                        previousLinkClassName={"previous_page"}
                        nextLinkClassName={"next_page"}
                        disabledClassName={"disabled"}
                        activeClassName={"active"}
                      ></ReactPaginate>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
