import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollVertical, faCartShopping, faGear, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <>
            <div className="sidebar-container">
                <div className='title'>
                    <span className='logo'>BF</span>
                    <span className='Title_name'>Bluestock Fintech</span>
                </div>
                <span className="menu-title">MENU</span>
                <div className="menu-list">
                    <NavLink to="/" className="menu-item" >
                        <FontAwesomeIcon icon={faSquarePollVertical} className='icon' />
                        Dashboard
                    </NavLink>
                </div>
                <div className="menu-list">
                    <NavLink to="/ManageIPO" className="menu-item" >
                        <FontAwesomeIcon icon={faCartShopping} className='icon' />

                        Manage IPO
                    </NavLink>
                </div>
                <div className="menu-list">
                    <NavLink to="/UpcomingIPO" className="menu-item" >
                        <FontAwesomeIcon icon={faCommentDots} className='icon' />
                        Upcoming IPO
                    </NavLink>
                </div>
                <span className="menu-title">OTHERS</span>
                <div className="menu-list">
                    <NavLink to="" className="menu-item" >
                        <FontAwesomeIcon icon={faGear} className='icon' />

                        Settings</NavLink>
                </div>
            </div>
        </>
    )
}

export default Sidebar