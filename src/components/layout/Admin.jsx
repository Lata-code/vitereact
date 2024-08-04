import { FaUsers } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";


export const Admin = ()=>{

    const {data} = useAuth()
    const {isLoading} = useAuth()
    const Navigate = useNavigate()

    if(isLoading){
        return <h1>Loading.......</h1>
    }
    console.log('lllll',data.isAdmin)
    if( !data.isAdmin){
        console.log(777)
        return Navigate('/')
    }

    return (
        <>
        <div className="container fs-2 mt-5 mb-5">
            <div className="row">
               <div className="col-2">
                <ul>
                    <li><NavLink to='/admin/users'><FaUsers />   Users</NavLink></li>
                    <br />
                    <li><NavLink to='/admin/contacts'><FaCommentDots />   Contacts</NavLink></li>
                   
                </ul>
               </div>
               <div className="col-10">
                
                <Outlet />
               </div>
            </div>
        </div>
        
        </>
    )
}