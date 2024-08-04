import { useEffect, useState } from "react"
import { useAuth } from "../store/Auth"
import { toast } from "react-toastify"
import { Link } from "react-router-dom";

export const  AdminUsers = () =>{
    const {BearerToken} = useAuth();
    const [userdata,setUserdata] = useState([])

    const getUsers = async ()=>{
        try{

            const res = await fetch('http://localhost:5000/api/admin/users',{
                method:'GET',
                headers:{
                    Authorization:BearerToken
                }
            })
            if(res.ok){
                const userinfo = await res.json();
                setUserdata(userinfo.allUsers)
                console.log('tttttt',userinfo.allUsers)

            }else{
                toast.error(res_data.message, {
                    style: { fontSize: '14px' },
                  })
            }
            
        }catch(err){
            console.log('AdminUSers', err)
        }
    }

    
    const deleteUser = async (id) =>{
        console.log(id)
        try{
            const res = await fetch(`http://localhost:5000/api/admin/user/${id}`,{
                method:'DELETE',
                headers:{
                    Authorization:BearerToken
                }
            })
            if(res.ok){
                getUsers();
            }
            console.log('dltt',await res.json())

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getUsers();
    },[])


    return (
        <>
         <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {userdata.map((val,index)=>(
                    <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td>{val.phone}</td>
                    <td><Link to={`/admin/edit/users/${val._id}`}>Edit</Link></td>
                    <td><button className="btn btn-danger fs-4" onClick={() => deleteUser(val._id)}>Delete</button></td>

                    </tr>
                ))}
               
            </tbody>
         </table>
        </>
    )
}