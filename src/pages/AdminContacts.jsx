import { useEffect, useState } from "react"
import { useAuth } from "../store/Auth"
import { toast } from "react-toastify";

export const AdminContacts = () =>{

    const {BearerToken} = useAuth();
    var[contactsData, setContactsData] = useState([]);
    
 
    const getCotactsData = async ()=>{
        try{
            const res = await fetch(`http://localhost:5000/api/admin/contacts`,{
                method:"GET",
                headers:{
                    Authorization:BearerToken
                }
            })

            if(res.ok){
                const contactsData = await res.json();
                setContactsData(contactsData);
                console.log('contactsData',contactsData);
            }
        }catch(err){

        }  
    }

    const deleteUser =  async (id) =>{

    
        try{

            const res = await fetch(`http://localhost:5000/api/admin/dalete/contacts/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:BearerToken
                }
            })

            if(res.ok){
                toast.success("contact deleted. successfully .",{style:{ fontSize: '14px' }})
                getCotactsData()

            }else{
                toast.error("contact not deleted.",{style:{ fontSize: '14px' }})

            }

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getCotactsData()
    },[])
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
                </tr>
            </thead>
            <tbody>
                {contactsData.map((val,index)=>(
                    <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td>{val.message}</td>
                    <td><button className="btn btn-danger fs-4" onClick={() => deleteUser(val._id)}>Delete</button></td>

                    </tr>
                ))}
               
            </tbody>
         </table>
    )
}