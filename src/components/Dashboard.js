import React from "react";
import avatar from "../images/avatar.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__userInfo">
        <div className="userImg">
          <img src={avatar} alt="" />
        </div>
        <h1 className="userName">Hedayat Farahi</h1>
        <div className="noteCount">
          <i className="fa fa-book"></i>
          12
        </div>
      </div>
      <div className="dashboard__list">
        <div className="title">Courses</div>
        <ul className="list">
          <li className="listItem item">
            <i className="fa fa-briefcase listItem" style={{ marginRight: "5px" }}></i> Business Comunication
          </li>
          <li className="listItem item">
            <i className="fa fa-code listItem" style={{ marginRight: "5px" }}></i> Modern Programming Language
          </li>
          <li className="listItem item">
            <i className="fa fa-windows listItem" style={{ marginRight: "5px" }}></i> Visual Programming
          </li>
          <li className="listItem item">
            <i className="fa fa-microchip listItem" style={{ marginRight: "5px" }}></i> Comp Org & Assembly Language
          </li>
          <li className="listItem item">
            <i className="fa fa-codepen listItem" style={{ marginRight: "5px" }}></i> Data structure & Algorithm
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
