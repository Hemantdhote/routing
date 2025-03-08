import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router,Routes,Route,Outlet} from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import About from './components/About.jsx'
import Courses from './components/Courses.jsx'
import Bundels from './components/Bundels.jsx'
import CoursesID from './components/CoursesID.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} /> 
      <Route path='/login' element={<Login />} >
      
            <Route path='courses' element={<Courses/>}>
                 <Route path=':courseid' element={<CoursesID/>}/>
            </Route>
            <Route path='bundels' element={<Bundels/>}/>
           
      </Route> 
    </Routes>
  </Router>,
)



