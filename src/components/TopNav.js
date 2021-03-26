import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const TopNav = () => {
  const sub = () => {
    let collection = "";
    const myParam = window.location.href;
    const res = myParam.split("/");
    const final = res[res.length - 1];
    switch (final) {
      case "businessCommunication":
        collection = "Business Communication";
        break;
      case "modernProgrammingLanguage":
        collection = "Modern Programming Language";
        break;
      case "visualProgramming":
        collection = "Visual Programming";
        break;
      case "compOrgAndAssemblyLanguage":
        collection = "Comp Org & Assembly Language";
        break;
      case "dataStructureAndAlgorithm":
        collection = "Data Structure & Algorithm";
        break;
    }
    return collection;
  };
  return (
    <div className="topnav">
      <h1 className="topnav__text">
        {sub()} <span style={{ margin: "0px 10px" }}>&gt;</span> <span style={{ color: "#9fef00" }}>Notes</span>
      </h1>
    </div>
  );
};

export default TopNav;
