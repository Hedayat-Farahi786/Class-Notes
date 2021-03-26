import React from "react";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

const Dashboard = ({ bc, username, img }) => {
  const removeActive = () => {
    const lis = document.querySelectorAll(".item");
    lis.forEach((item) => {
      item.classList.remove("activeLink");
    });
  };
  return (
    <div className="dashboard">
      <div className="dashboard__userInfo">
        <div className="userImg">
          <img src={img} alt="" />
        </div>
        <h1 className="userName">{username}</h1>
        <div className="noteCount">
          <i className="fa fa-book"></i>
          <span style={{ margin: "0px 10px" }}>{bc.length}</span> notes
        </div>
      </div>
      <div className="dashboard__list">
        <div className="title">Courses</div>
        <ul className="list">
          <Link
            style={{ textDecoration: "none" }}
            to="/businessCommunication"
            onClick={(e) => {
              removeActive();
              e.target.classList.add("activeLink");
            }}
          >
            <li className="listItem item">
              <i className="fa fa-briefcase listItem" style={{ marginRight: "5px" }}></i> Business Comunication
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/modernProgrammingLanguage"
            onClick={(e) => {
              removeActive();
              e.target.classList.add("activeLink");
            }}
          >
            <li className="listItem item">
              <i className="fa fa-code listItem" style={{ marginRight: "5px" }}></i> Modern Programming Language
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            to="/visualProgramming"
            onClick={(e) => {
              removeActive();
              e.target.classList.add("activeLink");
            }}
          >
            <li className="listItem item">
              <i className="fa fa-windows listItem" style={{ marginRight: "5px" }}></i> Visual Programming
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/compOrgAndAssemblyLanguage"
            onClick={(e) => {
              removeActive();
              e.target.classList.add("activeLink");
            }}
          >
            <li className="listItem item">
              <i className="fa fa-microchip listItem" style={{ marginRight: "5px" }}></i> Comp Org & Assembly Language
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/dataStructureAndAlgorithm"
            onClick={(e) => {
              removeActive();
              e.target.classList.add("activeLink");
            }}
          >
            <li className="listItem item">
              <i className="fa fa-codepen listItem" style={{ marginRight: "5px" }}></i> Data structure & Algorithm
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
