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

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/RegisterAdmin' element={<RegisterAdmin />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/getAllCategories' element={<GetAllCategories />} />
          <Route path='/CreateCategory' element={<CreateCategory />} />
          <Route path='/EditCategory/:id' element={<EditCategory />} />
          <Route path='/GetTutors' element={<GetTutors/>} />
          <Route path='/EditTutor/:id' element={<EditTutor/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
