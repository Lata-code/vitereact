import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext =  createContext();


export const AuthProvider = ({children})=>{
    var [token,setToken] = useState(localStorage.getItem('token'));
    var [data,setData] = useState();
    var [services, setServices] = useState([]);
    var [isLoading, setIsLoading] = useState(true)
    
    const storeTokenInLocalStorage = (servertoken)=>{
        setToken(servertoken)
        return localStorage.setItem('token',servertoken);
    }
    const isLoggedIn = !!token; 
    const BearerToken = `Bearer ${token}`;
    const LogoutUser = ()=>{
        setToken("")
         localStorage.removeItem('token');
    
    }

    const userAuthentication = async ()=>{
      try{
        const response =  await fetch('http://localhost:5000/api/userdata',{
            method:'GET',
            headers:{
                Authorization:BearerToken
            }
        })

        if(response.ok){
            const data = await response.json()
            setData(data.userdata)
            setIsLoading(false)
        }else{
            console.log('error from user data')
            setIsLoading(false)
        }

      }catch(err){
            console.log('userAuthentication',err)
      }

    }

    const getServices = async()=>{
        try{

            const response = await fetch('http://localhost:5000/api/services',{ method:"GET" });
            if(response.ok){
                const data = await response.json();
                setServices(data.result)
            }

        }catch(err){
            console.log('services',err)
        }
    }

    useEffect(()=>{
        userAuthentication()
        getServices()
    },[])


    return <AuthContext.Provider value={{isLoggedIn,BearerToken,isLoading,storeTokenInLocalStorage,LogoutUser,data,services}}>
           {children}
          </AuthContext.Provider>
}

 


export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider.");
    }

    return authContextValue;
}