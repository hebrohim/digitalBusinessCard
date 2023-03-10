import React from "react";
import "../App.css";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import {VscGithub } from "react-icons/vsc";
const UserInformation = () => {

  let infostyling = {
    fontSize:".8rem",
    marginLeft:"20px"
  }
  return (
    <div className="userInformation" style={{ width: "100%",paddingLeft:"5px"}}>
      <div id = "phoneNumber" style={{ display: "flex" ,alignItems:"center",marginBottom:"5px" }}>
        <TbPhoneCall id="icon" />
        <span style={infostyling}> +234 7030759218</span>
      </div>

      <div id = "mail" style={{ display: "flex", alignItems:"center" ,marginBottom:"5px"}}>
        <HiOutlineMail id="icon" />
        <span style={infostyling}>raheemibrohim@gmail.com</span>
      </div>

      <div id = "mail" style={{ display: "flex", alignItems:"center" }}>
        <VscGithub id="icon" />
        <a href="https://github.com/hebrohim" style={{textDecoration:"none",color:"black",marginLeft:"20px",fontSize:"0.8rem"}}>github.com/hebrohim</a>
      </div>
    </div>
  );
};

export default UserInformation;
