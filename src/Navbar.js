import React, { useState } from 'react';
import "./navbar.css"


const NavbarComponent = (promps)=>{
    // const [found , setFound] = useState
    const searchClick = ()=>{
        console.log("Clicked Successfully")
        alert("No Data Exist For Search !")
    }
    return (
        <>
        <header className="navHeader">
            <div className="logo">
                <h3>{promps.logo}</h3>
                <marquee behavior="scroll" direction="left"> Wel-Come On Shiv-Raj Application I hope You Will enjoy this Application !</marquee>
            </div>
         <div className="container">
                <ul className='ul-links'>
                        <li className='link'><a href="#"> {promps.link1}</a></li>
                        <li className='link'><a href="#"> {promps.link2}</a></li>
                        <li className='link'><a href="#"> {promps.link3}</a></li>
                </ul> 
            <div className="searchbar">
                <input type="text" placeholder='search here-'/>
                <button className='btn' onClick={searchClick}>🔍</button>
                {/* <input type="submit" placeholder=🔍/> */}
            </div>
            </div>
        </header>
        </>
    )
}
NavbarComponent.defaultProps ={
    logo : "SHIV-RAJ",
    link1 : "HOME",
    link2 : "ABOUT",
    link3 : "CONTACT-US"
}


export default NavbarComponent