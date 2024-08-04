import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/Auth"
import { toast } from "react-toastify"

export  const Signup = ()=>{
    var [user, setUser] = useState({
                            username:"",
                            email:"",
                            phone:"",
                            password:""
                        })

    const Navigate = useNavigate();
    const {storeTokenInLocalStorage} = useAuth();

     const handleInput = (e)=>{
        const {name, value} = e.target;
        setUser({...user,
               [name]:value
        } )

     }  
     
     const handleSubmit = async (e)=>{
        e.preventDefault()

        const response = await fetch('http://localhost:5000/api/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })

        const res_data = await response.json();

        console.log('responsss',res_data);

        if(response.ok){
            toast.success('Registeration Successful !',{style:{fontSize: '14px'}})
            storeTokenInLocalStorage(res_data.token)
            Navigate('/');
        }else{
            toast.error(res_data.message,{style:{fontSize: '14px'}})
            alert(res_data.message)
        }

     }
    
    
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-4 bg-primary mt-5 mb-5 p-3">
        <img src="https://t3.ftcdn.net/jpg/04/45/30/00/240_F_445300032_8BOeLM2RyS8hFgjPgZ8OMPXUelRCySun.jpg" alt="registration" width="420" height="400" />

        </div>

        <div className="col-8 text-center mt-5 mb-5 p-3">
        <h1 className="main-heading mb3">Registration Form </h1>
        <form onSubmit={handleSubmit} className="container mt-4">
                <div className="row mb-3">
                <label htmlFor="username" className="col-sm-2 col-form-label  fs-2">username</label>
                <div className="col-sm-10">
                    <input type="username" className="form-control fs-4" id="username" name="username" placeholder="enter your username...." onChange={handleInput} value={user.username} required />
                </div>
                </div>

                <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label  fs-2">email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control fs-4" id="email" name="email" placeholder="enter your email..." onChange={handleInput} value={user.email} required />
                </div>
                </div>

                <div className="row mb-3">
                <label htmlFor="phone" className="col-sm-2 col-form-label  fs-2">phone</label>
                <div className="col-sm-10">
                    <input type="phone" className="form-control fs-4" id="phone" name="phone" placeholder="enter your phone..." onChange={handleInput} value={user.phone} required />
                </div>
                </div>
                
                <div className="row mb-3">
                <label htmlFor="password" className="col-sm-2 col-form-label fs-2">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control fs-4" id="password" name="password" placeholder="enter your password..." onChange={handleInput} value={user.password} required />
                </div>
               </div>

                <button type="submit" className="btn btn-primary fs-2">Login</button>
                </form>
            </div>
        </div>
        </div>



        </>
    )

}