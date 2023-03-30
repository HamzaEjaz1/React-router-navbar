import { Route, Routes , NavLink } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Contactus from './Pages/Contactus'
import Home from './Pages/Home'
import NotFoundPage from './Pages/NotFoundPage'
import Product from './Pages/Product'

function App() {

  return (
  <>
  <nav >
    <h2>logo</h2>
    <ul>
      <li>
      <NavLink to="/" className="Links">Home</NavLink>
      </li>
      <li>
      <NavLink to="/about" className="Links">About</NavLink>
      </li>
      <li>
      <NavLink to="/contactus" className="Links">Contact us</NavLink>
      </li>
      <li>
      <NavLink to="/product" className="Links">Product</NavLink>
      </li>
    </ul>
  </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contactus' element={<Contactus/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/notfoundpage' element={<NotFoundPage/>}></Route>
    </Routes>

    </>
  )
}

export default App
