import { useState } from "react"
import { useAuth } from "../store/Auth"

export  const Contact = ()=>{

  var[user,setUser] = useState({
    username:"",
    email:"",
    message:""
  })

  const {data} = useAuth()

  var[auth,setAuth] = useState(true)
  console.log('ttttttt',data)

  if(auth && data){
    setUser({
    username:data.username,
    email:data.email,
    message:""
    })

    setAuth(false)
  }

  const handleInput = (e)=>{
    var{name,value} = e.target;
    setUser({...user,[name]:value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{

      const response = await fetch('http://localhost:5000/api/contactus',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      })

      if(response.ok){
        setUser({
          username:"",
          email:"",
          message:""
        })
      }

    }catch(err){
          console.log('contactus',err)
    }
    
  }
    
    return (
  <div className="container">
    <div className="row">
      <div className="col-4 bg-primary mt-5 mb-5 p-3">
        <img width="420" height="400" src="data:image/jpeg;base64,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" alt="contact us" />
      </div>

      <div className="col-8 text-center mt-5 mb-5 p-3">
        <h1>Contact US</h1>
        
        <form onSubmit={handleSubmit} className="container mt-4">
        <div className="row mb-3">
                <label htmlFor="username" className="col-sm-2 col-form-label  fs-2">username</label>
                <div className="col-sm-10">
                    <input type="username" className="form-control fs-4" id="username" name="username" placeholder="enter your username..." onChange={handleInput} value={user.username} required />
                </div>
                </div>

                <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label  fs-2">email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control fs-4" id="email" name="email" placeholder="enter your email..." onChange={handleInput} value={user.email} required />
                </div>
                </div>
                
                <div className="row mb-3">
                <label htmlFor="message" className="col-sm-2 col-form-label fs-2">message</label>
                <div className="col-sm-10">
                <textarea
                className="form-control fs-4"
                id="message"
                name="message"
                rows="5"
                placeholder="enter your message....."
                value={user.message}
                onChange={handleInput}
                required
            ></textarea>                </div>
            </div>
              <button type="submit" className="btn btn-primary fs-2">Submit</button>
        </form>
      </div>
      {/* <div class="col-12 mb-5"> */}
      <iframe className ="mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.19063594783!2d77.12658453167289!3d28.52732733787663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1716984825837!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      {/* </div> */}
    </div>
  </div>

      )

}