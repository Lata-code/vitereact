import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../store/Auth"

export const Logout = () => {
    const {LogoutUser} = useAuth();

    useEffect(()=>{
        console.log('LogoutUser')
        LogoutUser()
    },[LogoutUser])

    return <Navigate to='/signin' />
}