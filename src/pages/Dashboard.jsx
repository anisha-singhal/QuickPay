import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard(){

    const[user, setUser] = useState(null)
    const navigate = useNavigate();

    const handleLogout = function(e){
        alert("Logged out successfully")
        localStorage.removeItem("token")
        navigate("/") // Redirect back to Login page
    }

    useEffect(function(){
        axios.get("http://localhost:5000/api/users",{
            headers : {Authorization: `Bearer ${localStorage.getItem("token")}`}
        })
        .then(function(res){
            setUser(res.data)
        })
        .catch(function(err){
            console.error(err);
            alert("Failed to load profile")
        })
    }, [])

    return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-80 text-center">
            <h2 className="text-2xl mb-4">Dashboard</h2>

            {user ? (
            <div>
              <p className="text-lg">Welcome, {user.username}</p>
              <p className="text-gray-600">Email: {user.email}</p>

              <button onClick = {handleLogout} className = "mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Logout</button>
            </div>
                ) : (
                <p>Loading profile...</p>
            )}
        </div>
  </div>
);
}

export default Dashboard

//PUT is used to update or replace an existing resource on the server.

