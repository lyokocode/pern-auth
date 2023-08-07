
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Home, Register } from './pages'
import { Layout } from './components'
import PrivateRoutes from './utils/PrivateRoute'


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Layout />}>
            <Route element={<Home />} path="/" />
          </Route>
        </Route>
        < Route path='/login' element={<Login />} />
        < Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
