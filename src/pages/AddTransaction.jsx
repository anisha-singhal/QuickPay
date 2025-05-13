import {useState} from "react";
import axios from "axios";

function AddTransaction() {
    const[amount, setAmount] = useState("")
    const[description, setDescription] = useState("")
    const[details, setDetails] = useState("")

    const handleSubmit = async function(e){
        e.preventDefault();

        const token = localStorage.getItem("token");

        try{
            const response = await axios.post("http://localhost:5000/api/transactions", {
                amount: Number(amount),
                description: description,
                details: details
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            });

            console.log("Transaction successfully added:", response.data);
            alert("Transaction added successfully")

            //Reset form
            setAmount("")
            setDescription("")
            setDetails("")
        }

        catch(err){
            console.error("Transaction failed:", err);
            alert("Transaction failed")
        }
    };

    return(
        <div className = "form-container">
            <h2>Send Money</h2>
            <form onSubmit = {handleSubmit}>
                <input type = "number" placeholder = "Amount" value = {amount} onChange = {(e) => setAmount(e.target.value)} />
                <input type = "text" placeholder = "Description" value = {description} onChange = {(e) => setDescription(e.target.value)} />
                <input type = "text" placeholder = "Details" value = {details} onChange = {(e) => setDetails(e.target.value)} />
                <button type = "submit">Send</button>
            </form>
        </div>
    )
}

export default AddTransaction