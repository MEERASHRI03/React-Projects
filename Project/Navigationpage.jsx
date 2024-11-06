import React from 'react'
import Registerpage from './Routerproject/Registerpage'
import Signinpage from './Routerproject/Signinpage'
import Homepageproject from './Routerproject/Homepageproject'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contactus from './Routerproject/Contactus'
import StudentProvider from './Routerproject/StudentContext'
import StudentManagementPage from './Routerproject/StudentManagementPage'

const Navigationpage = () =>
{
    return(
        <div>
            <StudentProvider>
           <BrowserRouter>
           <Routes>
            <Route path="/" element={<Registerpage/>}></Route>
            <Route path='/Signinpage' element={<Signinpage/>}></Route>
            <Route path='/Homepageproject' element={<Homepageproject />}></Route>
            <Route path='/Contactus' element={<Contactus />}></Route>
            <Route path='/StudentManagementPage' element={<StudentManagementPage />}></Route>
           </Routes>
           </BrowserRouter>
           </StudentProvider>
        </div>
    )
}
export default Navigationpage;
