import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import { Service } from "../pages/Service"
import { Signin } from "../pages/Signin"
import { Page_404 } from "../pages/Page_404"
import { Logout } from "../pages/Logout"
import { Signup } from "../pages/Signup"
import { Admin } from "../components/layout/Admin"
import { AdminContacts } from "../pages/AdminContacts"
import { AdminUsers } from "../pages/AdminUsers"
import { EditUser } from "../pages/EditUser"

export const  RoutStack =()=>{
    return(
       
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/logout' element={<Logout />}/>
        <Route path='*' element={<Page_404 />} />
        
        <Route path='/admin' element={<Admin />}>
        <Route path='users' element={<AdminUsers />}/>
        <Route path='edit/users/:id' element={<EditUser />}/>
        <Route path='contacts' element={<AdminContacts />}/>

        </Route>


      </Routes>
       
    )
}