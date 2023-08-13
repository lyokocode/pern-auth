
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Home, Register, Users, SingleUser } from './pages'
import { PrivateRoutes, Layout } from './utils'


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Layout />}>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path='/users'>
                <Route index element={<Users />} />
                <Route path=":id" element={<SingleUser />} />
              </Route>
            </Route>
          </Route>
        </Route>
        < Route path='/login' element={<Login />} />
        < Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
