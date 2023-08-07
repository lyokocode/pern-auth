
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Home, Register } from './pages'
import { Navbar } from './components'
import PrivateRoutes from './utils/PrivateRoute'


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" />
        </Route>
        < Route path='/login' element={<Login />} />
        < Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
