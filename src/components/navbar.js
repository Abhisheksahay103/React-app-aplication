import React,{useEffect, useState} from 'react'
import logo from '../assest/images/logo.png';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    NavLink,
    Outlet
  } from "react-router-dom";
const Navbar =() => {

const [isactive, setIsActive] = useState(true);
const showsidebar = () => {
  setIsActive(!isactive);
}
const sidebarshowclass = !isactive ? "active_sidebar" : "";
const clsoeshow = !isactive ? "fa-close" : "fa-bars";
  return (
    <>
     <div className='navbar_menu'>
      <div className='left_side'>
        <i className={`fa ${clsoeshow}`} aria-hidden="true" onClick={showsidebar} ></i>
        <img src={logo}/>
      </div>
      <div className='center_side'>
      
          <h3>Limit Monitoring</h3>
      </div>
      <div className='right_side'>
          <span className='user_pic'>AB</span>
          <span className='username'>Hi Abhishek Sahay <i className="fa fa-caret-down" aria-hidden="true"></i></span>
      </div>
    </div>
    
    <div className={`sidenavbar ${sidebarshowclass}`} >
      {/* <div className='logo'>
            <h4>Navigation</h4>
      </div> */}
        <div className='main_sidemenu'>
            <ul className='side_menu'>
                {/* <li className='side-item side-item-category'>Menu</li> */}
                <li className='slide'>
                    <a href='#' className='side_menu_item'>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="side_menu_icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>
                   <span className='side_menu_text'> Limit Monitoring</span>
                    <i className="angle fa fa-chevron-down"></i>
                    </a>
                    <ul className='slide_menu'>
                        <li>
                        <Link activeclassname="active" to="/" className='slide_item'>Dashboard</Link>
                            
                        </li>
                        <li>
                        <Link activeclassname="active" to="/overview" className='slide_item'>Overview</Link>
                            
                        </li>
                        
                        <li>
                            <a href='#' className='slide_item'>Limits Chnage Workflow</a>
                        </li>
                        <li>
                            <a href='#' className='slide_item'>Limits Breach Workflow</a>
                        </li>
                        <li>
                            <a href='#' className='slide_item'>Tier 3</a>
                        </li>
                        <li>
                            <a href='#' className='slide_item'>Limits Breach Exception</a>
                        </li>
                    </ul>
                </li>
                <li className='slide'>
                    <a href='#' className='side_menu_item'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="side_menu_icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>
                        Index</a>
                </li>
            </ul>
        </div>
    </div>
    </>
   
  )
}
export default Navbar;