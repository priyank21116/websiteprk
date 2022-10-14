import React from 'react'
import{FaUserAlt} from 'react-icons/fa'
import {ReactNavbar} from 'overlay-navbar'
const Header = () => {
      const purple="hsl(250,100%,75%)"
  return (
    <ReactNavbar 
      navColor1="white"
      navColor2="hsl(219,48%,8%)"
      burgerColor={purple}
      burgerColorHover={purple}
      // logo={}
      logoWidth="250px"
      logoHoverColor ={purple}
      nav2justifyContent ="space-around"
      nav3justifyContent ="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projecs"
      link4Text="Contact"
      link5Text="Skills"

      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"

      link1ColorHover="white"
      link1Color="HSL(250,100%,75%)"
      link1Size="1.5rem"
      link1Padding="3vmax"

      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="white"
      profileIconColorHover ={purple}




    />
  )
}

export default Header