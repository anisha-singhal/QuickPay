import axios from "axios";
import {useState} from "react"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup(){
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const navigate = useNavigate();
    const handleSubmit = async function(e){
        e.preventDefault()

        try {
            //POST request to backend
            const response = await axios.post("http://localhost:5000/api/users", {
                username: username, 
                password: password
            });
        
        console.log('User signed up successfully:', response.data);
        alert("Account created successfully")
        navigate("/Login")
        }

        catch (err) {
            console.error(err);
            alert("Signup failed")
        }
    };

    return(
        <div className = "flex items-center justify-center min-h-screen bg-gray-100">
        <form
        onSubmit = {handleSubmit}
        className = "bg-white p-8 rounded shadow-md w-80"
        >
        <h2 className = "text-2xl mb-4 text-center">Sign Up </h2>

        <input type = "text" placeholder="Username" value = {username} onChange = {(e) => setUsername(e.target.value)} 
        className="w-full mb-4 p-2 border rounded"
        />

        <input type = "password" placeholder="Password" value = {password} onChange = {(e) => setPassword(e.target.value)}
        className = "w-full mb-4 p-2 border rounded"
        />
        
        <button type = "submit" className= "w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Create Account</button>
        <p className = "mt-4 text-center text-sm">Already have an account? <Link to = "/Login" className = "text-blue-500">Login</Link></p>
        </form>
        </div>
    )
}

export default Signup


// 1. What is Axios?
// Axios ek library hai jo humein HTTP requests bhejne mein madad karti hai.

// HTTP requests ka matlab hai, jab hum web se data mangte hain (ya submit karte hain), toh hum requests bhejte hain. Jaise hum signup form submit karte hain, waise hum request bhejte hain backend ko taaki wo humare data ko store karein.

// Axios ki madad se hum apne web browser se GET, POST, PUT, aur DELETE requests bhej sakte hain.

// GET: Server se kuch data lene ke liye.

// POST: Server par data bhejne ke liye (jaise signup form).

// PUT: Already existing data ko update karne ke liye.

// DELETE: Data ko delete karne ke liye.