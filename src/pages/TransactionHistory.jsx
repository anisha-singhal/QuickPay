import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";

function TransactionHistory() {
    const[transactions, setTransactions] = useState([]);

    useEffect(function(){
        const fetchTransaction = async function(){
            const token = localStorage.getItem("token");

            try{
                const response = await axios.get("http://localhost:5000/api/transactions", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setTransactions(response.data)
            }
            catch(err){
                console.error("Error fetching transactions:", err);
                alert("Failed to fetch transactions")
            }
        };
        fetchTransaction()
    }, []) // run when page loads

    return(
        <div className="transaction-container">
            <h2>Transaction History</h2> 
            {transactions.length == 0 ? (
                <p>No transaction found</p>
            ) : (
                <ul>
                    {transactions.map(function(txn, idx){
                        return (<li key = {idx}>
                            <strong>Amount:</strong> {txn.amount} | 
                            <strong> Description:</strong> {txn.description} | 
                            <strong> Details:</strong> {txn.details}
                        </li>
                    )})}
                </ul>
            )}
        </div>
    )
}

export default TransactionHistory