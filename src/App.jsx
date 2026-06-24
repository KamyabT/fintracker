import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import Transactions from "./pages/Transactions";
import Budget from "./pages/Budget";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Navigate to="/login"></Navigate>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/budget"
            element={
              <ProtectedRoute>
                <Budget />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
