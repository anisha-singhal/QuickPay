import { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Charts(){
    const[transactions, setTransactions] = useState([]);

    useEffect(function(){
        const fetchData = async function(){
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
        fetchData()
    }, []);

    let income = 0
    let expense = 0

    for(let i = 0; i < transactions.length; i++){
        const txn = transactions[i];
        const amt = Number(txn.amount);

        if(amt >= 0){
            income += amt
        }
        else{
            expense += Math.abs(amt)
        }
    }

    const data = {
        labels: ['Income', 'Expense'],
        datasets: [
            {
                data: [income, expense],
                backgroundColor: ["#4caf50", "#f44336"],
            },
        ],
    };

    return(
        <div className = "w-1/2 mx-auto mt-10">
            <h2 className = "text-2xl font-bold mb-4">Transaction Summary - Income vs Expense</h2>
            <Pie data = {data} />
        </div>
    )
}

export default Charts