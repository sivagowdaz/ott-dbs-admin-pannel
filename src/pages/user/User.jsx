import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './user.css';
import { useParams } from 'react-router-dom';
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, CloudUpload } from '@material-ui/icons'
import { Link } from 'react-router-dom';

export default function User() {
    const { email } = useParams()
    const [profile, setProfile] = useState()
    
    const [currentUser, setCurrentUser] = useState(null)


    const  handleChange = (e) => {
        e.preventDefault()
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        console.log("inside the handle click", profile)
    }

    useEffect(() => {
        console.log("inside the use effect function")
        const getCurrentUser = async () => {
            let res = await axios.get('/auth/get_single_user/' + email, {
                headers: {
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).tokens.access_token}`
                }
            })
            setCurrentUser(res.data)
        }
        getCurrentUser()
    }, [currentUser])

    console.log("tej", currentUser)
    return (
       
        <div className='user'>
            {currentUser && 
                <div>
                    the user page
                    <div className="userHead">
                        <h2>Edit User</h2>
                        <Link to='/newuser'>
                            <button className="userCreateButton">Create</button>
                        </Link>
                    </div>
                    <div className="userContainer">
                        <div className="userShow">
                            <div className="userShowTop">
                                <img
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                    className="userShowImg"
                                />
                                <div className="userShowTopTitle">
                                    <span className="userShowUsername">{currentUser[0].username}</span>
                                    <span className="userShowUserTitle">Software Engineer</span>
                                </div>
                            </div>
                            <div className="userShowBottom">
                                <span className="userShowTitle">Account Details</span>
                                <div className="userShowInfo">
                                    <PermIdentity className="userShowIcon" />
                                    <span className="userShowInfoTitle">{currentUser[0].username}</span>
                                </div>
                                <div className="userShowInfo">
                                    <CalendarToday className="userShowIcon" />
                                    <span className="userShowInfoTitle">10.12.1999</span>
                                </div>
                                <span className="userShowTitle">Contact Details</span>
                                <div className="userShowInfo">
                                    <PhoneAndroid className="userShowIcon" />
                                    <span className="userShowInfoTitle">+1 123 456 67</span>
                                </div>
                                <div className="userShowInfo">
                                    <MailOutline className="userShowIcon" />
                                    <span className="userShowInfoTitle">{currentUser[0].email}</span>
                                </div>
                                <div className="userShowInfo">
                                    <LocationSearching className="userShowIcon" />
                                    <span className="userShowInfoTitle">New York | USA</span>
                                </div>
                            </div>
                        </div>


                        <div className="userUpdate">
                            <span className="userUpdateTitle">Edit</span>
                            <form className="userUpdateForm">
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label>First name</label>
                                        <input type="text"
                                            placeholder={currentUser[1].first_name || "first name"}
                                            className='userUpdateInput'
                                            name="first_name"
                                            onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Middle name</label>
                                        <input type="text"
                                            placeholder={currentUser[1].middle_name || "middle name"}
                                            className='userUpdateInput'
                                            name="middle_name"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Last name</label>
                                        <input type="text"
                                            placeholder={currentUser[1].last_name || "last name"}
                                            className='userUpdateInput'
                                            name="last_name"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Phone</label>
                                        <input type="text"
                                            placeholder='+1 123 456 67'
                                            className='userUpdateInput'
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>About</label>
                                        <input type="text"
                                            placeholder={currentUser[1].about || 'about'}
                                            className='userUpdateInput'
                                            name="about"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Image url</label>
                                        <input type="text"
                                            placeholder={currentUser[1].image_url || 'image url'}
                                            className='userUpdateInput'
                                            name="image_url"
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>

                                </div>
                                <div className="userUpdateRight">
                                    <div className="userUpdateUpload">
                                        <img src={currentUser[1].image_url || '#'} alt="" className="userUpdateImage" />
                                        <label htmlFor="file"><CloudUpload className='userUpdateIcon' /></label>
                                        <input type="file" id='file' style={{ display: 'none' }} />
                                    </div>
                                    <button className="UserUpdateButton" onClick={handleClick}>Update</button>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>}
        </div>
        
    )
}
