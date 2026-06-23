import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import Transactions from "./pages/Transactions";
import Budget from "./pages/Budget";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/transactions" element={<Transactions />}></Route>
        <Route path="/budget" element={<Budget />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
