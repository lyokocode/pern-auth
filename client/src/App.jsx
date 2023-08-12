
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Home, Register, Users, SingleUser } from './pages'
import { PrivateRoutes, Layout } from './utils'


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Layout />}>
            <Route element={<Home />} path="/" />
            <Route element={<Users />} path="/users" />
            <Route element={<SingleUser />} path="/users/:id" />
          </Route>
        </Route>
        < Route path='/login' element={<Login />} />
        < Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
