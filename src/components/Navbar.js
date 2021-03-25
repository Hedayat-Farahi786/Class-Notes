import React from "react";
import icon from "../images/notebook96.png";
import avatar from "../images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ showOptions, setShowOptions }) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={icon} alt="" className="logo" />
        <h2 className="brand">
          Class<span className="brandSmall">Notes</span>
        </h2>
      </div>

      <div className="navbar__user" onClick={() => setShowOptions(!showOptions)}>
        <div className="navbar__userImg">
          <img src={avatar} alt="" width="35" />
        </div>
        <h4 className="navbar__username">Hedayat Farahi</h4>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="navbar__options" style={showOptions ? { display: "flex" } : { display: "none" }}>
        <h4 className="option__setting">
          <i className="fa fa-cog option__setting" style={{ marginRight: "8px" }}></i>
          Settings
        </h4>
        <hr color="#1B2638" />
        <h4 className="option__logout">
          <i className="fa fa-power-off option__logout" style={{ marginRight: "10px" }}></i>
          Logout
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
