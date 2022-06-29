import { createContext, useReducer } from "react";
import { useEffect } from 'react'
import { authReducer} from './authReducer'

let initialState = {
    "user": JSON.parse(localStorage.getItem('user')) || null,
    "isFetching": false,
    "error": false,
}

export const AuthContext = createContext(initialState)

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    console.log("the authprovider is rerendered")

    useEffect(() => {
        console.log("inside the useeffect function ")
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                is_fetching: state.is_fetching,
                error: state.error,
                dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider