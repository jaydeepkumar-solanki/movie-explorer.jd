import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import MovieDetail from './components/MovieDetail'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
