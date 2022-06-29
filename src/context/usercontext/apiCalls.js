import axios from 'axios'


export const get_all_users = async (dispatch) => {
    dispatch({
        type: 'GET_USERS_START'
    })
    let access_token = JSON.parse(localStorage.getItem('user')).tokens.access_token

    const res = await axios.get('auth/get_all_users', {
        headers: {
            authorization: `Bearer ${access_token}`
        }
    })
    console.log("the response form the get all users ", res.data)
    dispatch({
        type: 'GET_USERS_SUCCESS',
        payload: res.data
    })

}

export const delete_user = async (dispatch, email) => {
    let access_token = JSON.parse(localStorage.getItem('user')).tokens.access_token
    dispatch({
        type: 'DELETE_USER_START'
    })
    console.log("inside the delete user function", email)

    let res = await axios.delete('auth/delete_user/' + email, {
        headers: {
            authorization: `Bearer ${access_token}`
       }
    } )
    

    console.log(res.data)
    dispatch({
        type: 'DELETE_USER_SUCCESS',
        payload: email
    })
}