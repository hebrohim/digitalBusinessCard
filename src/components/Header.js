import React from 'react'
import "../App.css"
import avatar from "./images/me.jpg"
import {MdDeveloperMode} from "react-icons/md";
const Header = () => {

  return (
   <header>
    <div className='aboutMe'>
    <div id='avatar'></div>
    <h4 id='name'>Raheem Ibrahim</h4>
    <h6 id='jobTitle'>Fronend Developer
    </h6>
    <h6 id='jobTitle'>(ReactJs) 
   {/* < MdDeveloperMode style={{fontSize:"5rem"}}/> */}

    </h6>
    <p id='jobDescription'>Frontend Developer with over 3 years of experience, learning, exploring,teaching and building Applications


 </p>
   
    </div>
   </header>
  )
}

export default Header