import {useState} from "react";
import axios from "axios";

function UpdateProfile() {
    
    const[username, setUsername] = useState("")
    const[email, setEmail] = useState("")

    const handleSubmit = async function(e){
        e.preventDefault();

        const token = localStorage.getItem("token");

        try{
            const response = await axios.put("http://localhost:5000/api/users", {
                username: username,
                email: email
            },
        {
            headers: { Authorization: `Bearer ${token}` }
        });

            console.log("Profile successfully updated:", response.data);
            alert("Profile updated successfully")
        }

        catch(err){
            console.error("Error updating profile:", err);
            alert("Profile update failed")
        }
    };

    return(
        <div className = "form-container">
            <h2> Profile Update</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    )
}

export default UpdateProfile