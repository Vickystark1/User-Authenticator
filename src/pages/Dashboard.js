import { useEffect, useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import { UserDetailsApi } from "../services/Api"
import { logout,isAuthenticated } from "../services/Auth"
import React from "react";
import BannerImage from "../Assets/home-banner-image.jpg";
import { FiArrowRight } from "react-icons/fi";
import tick from "../Assets/tick.gif";

export default function DashboardPage(){
    const navigate = useNavigate();

    const [user,setUser] = useState({name:"",email:"",localId:""})

    useEffect(()=>{
        if(isAuthenticated()){
            UserDetailsApi().then((response)=>{
               
                setUser({
                    name:response.data.users[0].displayName,
                    email:response.data.users[0].email,
                    localId:response.data.users[0].localId,
                })
            })
        }
    },[])

    const logoutUser = ()=>{
        logout();
        navigate('/login')
    }

    if (!isAuthenticated()) {
        //redirect user to dashboard
        return <Navigate to="/login" />
    }

    return (
        <div className="home-container text-center">
      <NavBar logoutUser={logoutUser}  />
      <div className='d-flex justify-content-center align-items-center' style={{position:"relative",top:"30vh",alignItems:"center"}} >
      <div style={{display:"flex",position:"relative",height:"15vh",padding:"20px 20px",border:"1px dashed gray",alignItems:"center",justifyContent:"center"}}>
      <img src={tick} alt ="" style={{height:80,Width:80,position:'absolute',top:-40,borderRadius:"50px 50px"}}/>
      <h2 style={{position:"relative",top:"3vh"}}>Successfully Loggedin!..</h2>
      </div>
      </div>
    </div>
    )
}