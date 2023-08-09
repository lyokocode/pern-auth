
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Home, Register, Users } from './pages'
import { Layout } from './components'
import PrivateRoutes from './utils/PrivateRoute'


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Layout />}>
            <Route element={<Home />} path="/" />
            <Route element={<Users />} path="/users" />
          </Route>
        </Route>
        < Route path='/login' element={<Login />} />
        < Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
