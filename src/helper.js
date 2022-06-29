import axios from 'axios'
import jwt_decode from 'jwt-decode'


export async function check_refresh_token() {
    let refresh_token = JSON.parse(localStorage.getItem('user')).tokens.refresh_token

    let decoded_token = await jwt_decode(refresh_token)
   
    let time = new Date().getTime()
    console.log(time, decoded_token.exp * 1000)
    if (decoded_token.exp * 1000 > time) {
        console.log("token is checked to be invalid")
        return true
    } else {
        console.log("token is checked to be valid")
        return false
    }
}

export async function set_access_token() {
    console.log("inside the set refresh token block")
    let old_user = JSON.parse(localStorage.getItem('user'))
    let old_refresh_token = old_user.tokens.refresh_token
    let res = await axios.post('auth/refresh_token/', {
        refresh_token:old_refresh_token
    })
    let { access_token, refresh_token } = await res.data
    console.log("the response data is", await res.data)
    let user = JSON.parse(localStorage.getItem('user'))
    let newUser = {
        tokens: {
            access_token,
            refresh_token
        },
        user: {
            ...user.user
        }
    }
    console.log("the new user is ", newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
    
}