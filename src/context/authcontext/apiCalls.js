import axios from 'axios'

// export const loginuser = (dispatch, user) => {
//     dispatch({
//         type: 'LOGIN_START'
//     })
//     let option = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/ json; charset=utf - 8'
//         },
//         body: JSON.stringify(user)
//     }
//     fetch('auth/login/', option)
//         .then((res) => res.json())
//         .then(user_data => {
//             console.log(user_data)
//             dispatch({
//                 type: 'LOGIN',
//                 payload: user_data
//             })
//         })
//         .catch(err => console.log(err))

// }

export const loginuser = async(dispatch, user) => {
    dispatch({
        type: 'LOGIN_START'
    })
    try {
        const res = await axios.post('auth/login/', user)
        res.data.user.is_admin && dispatch({
            type: "LOGIN",
            payload: res.data
        })
        console.log(res.data)
    } catch {
        console.log("something went wrong")
    }
}