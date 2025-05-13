import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import UpdateProfile from "./pages/UpdateProfile";
import AddTransaction from "./pages/AddTransaction";
import TransactionHistory from "./pages/TransactionHistory";
import Logout from "./pages/Logout";
import Charts from "./pages/charts";
import PrivateRoute from "./components/PrivateRoute";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Login />} />
      <Route path ="/signup" element={<Signup />} />
      <Route path ="/dashboard" element={<Dashboard />} />
      <Route path = "/update-profile" element={<UpdateProfile />} />
      <Route path="/transactions" element={<TransactionHistory />} />
      <Route path = "/Logout" element={<Logout />} />
      <Route path="/charts" element={<Charts />} />
      <Route
        path="/add-transaction"
        element={
        <PrivateRoute>
          <AddTransaction />
        </PrivateRoute>
        }
      />
    </Routes>
    </BrowserRouter>
  )
}

export default App;

// Default Export:

// You can only have one default export per module.

// No curly braces needed when importing.

// Why Use default?
// Single Export Focus: It is generally used for the main value or component of a file. For example, in App.js, the main thing you want to export is the App component itself, so you mark it as the default export.
// Convenient Imports: It allows you to import the value directly without curly braces, making the code cleaner and more intuitive.