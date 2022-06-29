import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import './topbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/authcontext/AuthContext';





function Topbar() {
    const { dispatch } = useContext(AuthContext)
    const handleLogout = (e) => {
        dispatch({
            type: 'LOGOUT'
        })
    }
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        shivaadmin
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="notificationBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="notificationBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.CdCBHghVSFo33i1WsW5zXwHaHa&pid=Api&P=0&w=300&h=300" alt="" className='imageAvatar' />
                    <p onClick={(e) => handleLogout(e)}>logout</p>
                </div>
            </div>
        </div>
    )
}

export default Topbar
