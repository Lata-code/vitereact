import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";
export const EditUser = ()=>{
const param = useParams();
const Navigate = useNavigate()
var[user,setUser] = useState({
    username:'',
    email:'',
    phone:''
})

const {BearerToken} = useAuth();

const userDetail = async() =>{
    try{
      const res = await  fetch(`http://localhost:5000/api/admin/user/${param.id}`,{
            method:'GET',
            headers:{
                Authorization:BearerToken
            }   
        })
        if(res.ok){
            const userinfo = await res.json();
            setUser(userinfo)
        }

    }catch(err){
        console.log('userdetail edit user page', err)
    }
}

useEffect(()=>{
    userDetail()
},[])

const handleInput = (e)=>{
    const {name, value} = e.target;
    setUser({
        ...user,[name]:value
    })

    console.log('ooo;',user)

}

const update = async (e)=>{
    e.preventDefault()
 try{
    const response = await fetch(`http://localhost:5000/api/admin/user/update/${param.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json',
            Authorization:BearerToken
        },
        body:JSON.stringify(user)
    })
        if(response.ok){
            toast.success('User Updated successfully',{style:{fontSize: '14px'}})
            Navigate('/admin/users')

        }else{
            toast.error('User not updated',{style:{fontSize: '14px'}})
        }
 
 }catch(err){
    console.log('update user', err)
 }
}

// userDetail();
console.log('pppppppppp',param.id);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Update User </h1>
                    <form  className="container mt-4" onSubmit={update}>
                        <div className="row mb-3">
                        <label htmlFor="username" className="col-sm-2 col-form-label  fs-2">username</label>
                        <div className="col-sm-10">
                            <input type="username" className="form-control fs-4" id="username" name="username" onChange={handleInput} value={user.username} placeholder="enter your username...."  required />
                        </div>
                        </div>

                        <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-2 col-form-label  fs-2">email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control fs-4" id="email" name="email" onChange={handleInput} value={user.email} placeholder="enter your email..."  required />
                        </div>
                        </div>

                        <div className="row mb-3">
                        <label htmlFor="phone" className="col-sm-2 col-form-label  fs-2">phone</label>
                        <div className="col-sm-10">
                            <input type="phone" className="form-control fs-4" id="phone" name="phone" onChange={handleInput}  value={user.phone} placeholder="enter your phone..." required />
                        </div>
                        </div>

                        <button type="submit" className="btn btn-primary fs-2">Update</button>
                </form>
                </div>
            </div>
        </div>
    )
}