import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import RegisterAdmin from './pages/Admin/RegisterAdmin';
import RegisterAdmin from './pages/Admin/registerAdmin';
import AdminLogin from './pages/Admin/adminLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetAllCategories from './pages/Admin/getAllCategories';
import CreateCategory from './pages/Admin/CreateCategory';
import EditCategory from './pages/Admin/EditCategory';
import GetTutors from './pages/Admin/getTutors';
import EditTutor from './pages/Admin/EditTutor';
import AddTutor from './pages/Admin/AddTutor';
import GetCourses from './pages/Admin/GetCourses';
import AddCourse from './pages/Admin/AddCourse';
import EditCourse from './pages/Admin/EditCourse';
import Home from './pages/Home';
import AllCourses from './pages/AllCourses';
import About from './pages/About';
import Contact from './pages/Contact';
// import adminNav from './components/adminNav';
import GetUsers from './pages/Admin/GetUsers';
import SignUP from './pages/SignUP';
import UserLogin from './pages/UserLogin';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/RegisterAdmin' element={<RegisterAdmin />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/GetUsers' element={<GetUsers />} />

          <Route path='/getAllCategories' element={<GetAllCategories />} />
          <Route path='/CreateCategory' element={<CreateCategory />} />
          <Route path='/EditCategory/:id' element={<EditCategory />} />

          <Route path='/GetTutors' element={<GetTutors />} />
          <Route path='/EditTutor/:id' element={<EditTutor />} />
          <Route path='/AddTutor' element={<AddTutor />} />

          <Route path='/GetCourses' element={<GetCourses />} />
          <Route path='/AddCourse' element={<AddCourse />} />
          <Route path='/EditCourse/:id' element={<EditCourse />} />

          <Route path='/' element={<Home />} />
          <Route path='/AllCourses' element={<AllCourses />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/SignUP' element={<SignUP />} />
          <Route path='/UserLogin' element={<UserLogin />} />

          {/* <Route path='/adminNav' element={<adminNav/>} /> */}

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
