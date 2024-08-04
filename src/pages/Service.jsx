import { useAuth } from "../store/Auth"

export  const Service = ()=>{
  const {services} = useAuth();
  console.log(services)
    return (
        <>
        <div className="container  mb-5 p-3 fs-4">
        <div className="row">
         
          {services.map((elm,index)=>(
                  <div key={index} className="col-sm-6 mt-5">
                 <div className="card bg-azure">
                   <div className="card-body">
                     <h5 className="card-title">category: {elm.category}</h5>
                     <h5 className="card-title">name: {elm.name}</h5>
                     <h5 className="card-title">price: {elm.price}</h5>
                     <h5 className="card-title">duration: {elm.duration}</h5>

                     <p className="card-text">{elm.description}</p>
                     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                   </div>
                 </div>
                 </div>
              
               
         ))}
  
       
        </div>
        </div>

        </>

    )

}