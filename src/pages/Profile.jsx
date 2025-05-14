import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile(){
    const[user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(function(){
        const token = localStorage.getItem("token");

        axios.get("http://localhost:5000/api/users",{
            headers : {Authorization: `Bearer ${token}`}
        })
        .then(function(response){
            setUser(response.data)
        })
        .catch(function(err){
            console.error(err);
            alert("Failed to load profile")
            navigate("/") // Redirect back to Login page
        })
    }, [])

    return(
        <div className = "flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4 text-center">Your Profile</h2> 
            {user ? (
                <>
                <p><strong>Username:</strong>{user.username}</p>
                <p><strong>Email:</strong>{user.email}</p>

                <button 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick = {function(){
                    navigate("/updateprofile")
                }}>Edit Profile</button>
                </>
            ) : (
                <p>Loading profile...</p>
            )}           
            </div>
        </div>
    )
}

export default Profile