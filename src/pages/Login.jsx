import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

//navigate - it redirects the user to another page without refreshing the site (single-page magic ✨).

function Login(){
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async function(e){
        e.preventDefault()

        try{
            const response = await axios.post("http://localhost:5000/api/login", {
                username: username,
                password: password
            });
              
            console.log('User logged in successfully:', response.data);
            alert("Login successful")
            localStorage.setItem("isLoggedIn", "true")
            navigate("/dashboard")
        }

        catch(err){
            console.error(err);
            alert("Login failed")
        }
    };

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit = {handleSubmit} className = "bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl mb-4 text-center">Login</h2>

                <input type = "text" value = {username} onChange = {(e) => setUsername(e.target.value)} className = "block w-full mb-4 p-2 border rounded" placeholder = "Username" />
                <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} className = "block w-full mb-4 p-2 border rounded" placeholder = "Password" />
                
                <button type = "submit" className = "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Login</button>
                <p className = "mt-4 text-center text-sm">Don't have an account? <Link to = "/signup" className = "text-blue-500">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default Login