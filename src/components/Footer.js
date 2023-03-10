import React from 'react'
import "../App.css"
import { TiSocialTwitter,TiSocialLinkedin,TiSocialFacebook } from "react-icons/ti";
import { TbBrandWhatsapp} from "react-icons/tb";
const Footer = () => {
    let socialMediaContainerStyle ={
        width:"100%",
        display:"flex",
        justifyContent:"space-evenly",
     
      

    }
  return (
    <div className='footer'>

        <span style={{fontSize:"0.7rem",fontWeight:"bold"}}>connect with me on:</span>

        <div style={socialMediaContainerStyle}>
        <a href='https://twitter.com/hebrohim'><TiSocialTwitter id='icon'/></a>
        <a href='https://www.linkedin.com/in/raheem-ibrahim-037940136/'><TiSocialLinkedin id='icon'/></a>
        <a href="https://web.facebook.com/ibrahim.raheem.988"> <TiSocialFacebook id='icon'/></a>
      <a href='https://wa.me/message/CNTKOLWG4MP2B1'>  <TbBrandWhatsapp id='icon'/></a>
        </div>
    </div>
  )
}

export default Footer