import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const { auth } = useSelector(state => state.auth)

    return (
        auth ? <Outlet /> : <Navigate to="/login" />
    )
}
export default PrivateRoutes 