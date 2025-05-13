import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Logout(){
    const navigate = useNavigate()

    useEffect(function(){
        LocalStorage.removeItem("token") // remove token from local storage since the session has been logged out by the user
        console.log("User logged out successfully")
        alert("Logged out successfully")
        navigate("/") // Redirect back to Login page
    }, [navigate])
    return null
}

export default Logout