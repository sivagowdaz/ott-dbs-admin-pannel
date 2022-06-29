import { Visibility } from '@material-ui/icons'
import React from 'react'
import './widgetSm.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { set_access_token, check_refresh_token} from '../../helper'


export default function WidgetSm() {

    const [newUsers, setNewUsers] = useState()
    const [newMovies, setNewMovies] = useState()
    const [newSeries, setNewSeries] = useState()

    useEffect(() => {
        console.log('inside the useeffect widget small')
        const getNewUsers = async () => {
            let time = new Date().getTime()
            try {
                if (jwt_decode(JSON.parse(localStorage.getItem('user')).tokens.access_token).exp*1000<time) {
                    console.log("inside the checking block user")
                    await set_access_token()
                }
                let access_token = JSON.parse(localStorage.getItem('user')).tokens.access_token
                
                const res = await axios.get('auth/get_all_users', {
                    headers: {
                        authorization: `Bearer ${access_token}`
                    }
                })
                setNewUsers(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        const getMovies = async () => {
            let time = new Date().getTime()
            try {
                if (jwt_decode(JSON.parse(localStorage.getItem('user')).tokens.access_token).exp * 1000 < time) {
                    console.log("inside the checking block movies")
                    await set_access_token()
                }
                const res = await axios.get('/content/get_contents/?type=movie', {
                    headers: {
                        authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).tokens.access_token}`
                    }
                })
                console.log("the new movies are", res.data)
                setNewMovies(res.data)
                   
             
            } catch(error) {
                console.log(error.message)
            }
        }
        const getSeries = async () => {
            let time = new Date().getTime()
            try {
                if (jwt_decode(JSON.parse(localStorage.getItem('user')).tokens.access_token).exp * 1000 < time) {
                    console.log("inside the checking block series")
                    await set_access_token()
                }
                const res = await axios.get('/content/get_contents/?type=series', {
                    headers: {
                        authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).tokens.access_token}`
                    }
                })
                console.log("the new movies are", res.data)
                setNewSeries(res.data)


            } catch (error) {
                console.log(error.message)
            }
        }
        getNewUsers()
        getMovies()
        getSeries()
    }, [])

    return (
        <div className='widgetSm'>
            <div className='widgetItem'>
                <span className="widgetSmTitle">Newly Joined Members</span>
                <ul className="widgetSmList">
                    {newUsers && newUsers.map((user) =>
                        <li className="widgetSmItem">
                            <img src={user.profilePic || 'https://tse3.mm.bing.net/th?id=OIP.3-rUE4SORzLoGxaLp7KvLAHaHa&pid=Api&P=0&w=300&h=300'} alt="" className='widgetSmImage' />
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{user.username}</span>
                                <span className="widgetSmPosition">{user.email || 'unknown'}</span>
                            </div>
                            <button className="widgetSmButton">
                                <Visibility className='widgetSmIcon' />
                                display
                            </button>
                        </li>
                    )}
                </ul>
            </div>
            <div className='widgetItem'>
                <span className="widgetSmTitle">Newly Added Movies</span>
                <ul className="widgetSmList">
                    {newMovies && newMovies.map((movie) =>
                        <li className="widgetSmItem">
                            <div className="widgetSmUser_mod">
                                <span className="widgetSmUsername">{movie.cont_title}</span>
                                <span className="widgetSmPosition">{movie.genre}</span>
                                <span className="widgetSmDuration">{ movie.duration}</span>
                                <span className="widgetSmDuration">{movie.release_time.slice(0,10)}</span>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div className='widgetItem'>
                <span className="widgetSmTitle">Newly Added Series</span>
                <ul className="widgetSmList">
                    {newSeries && newSeries.map((movie) =>
                        <li className="widgetSmItem">
                            <div className="widgetSmUser_mod">
                                <span className="widgetSmUsername">{movie.cont_title}</span>
                                <span className="widgetSmPosition">{movie.genre}</span>
                                <span className="widgetSmDuration">{movie.duration}</span>
                                <span className="widgetSmDuration">{movie.release_time.slice(0, 10)}</span>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
           
            
            
        </div>
    )
}

