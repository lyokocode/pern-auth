import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoutes = () => {
    const { user } = useSelector(state => state.auth)
    console.log(user)

    return (
        user ? <Outlet /> : <Navigate to="/login" />
    )
}