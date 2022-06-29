import { LineStyle, PlayArrowOutlined, Timeline, TrendingUp } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sedebarMenu">
                    <h3 className = 'sidebarTitle'>Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/' className='link'>
                            <li className="sidebarListItem active">
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sedebarMenu">
                    <h3 className = 'sidebarTitle'>Quick Start</h3>
                    <ul className="sidebarList">
                        <Link to='#' className='link'>
                            <li className="sidebarListItem active">
                                <LineStyle className='sidebarIcon' />
                                 Users
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                           Add User
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                           Edit User
                        </li>
                    </ul>
                </div>
                <div className="sedebarMenu">
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <Link to='#' className='link'>
                            <li className="sidebarListItem active">
                                <PlayArrowOutlined className='sidebarIcon' />
                                 movies
                            </li>
                    </Link>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Add Movie
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Edit Movie
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sedebarMenu">
                    <h3 className = 'sidebarTitle'>Staff</h3>
                    <ul className="sidebarList">
                        <Link to='#' className='link'>
                            <li className="sidebarListItem active">
                                <LineStyle className='sidebarIcon' />
                                     Lists
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Add List
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Edit List
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
