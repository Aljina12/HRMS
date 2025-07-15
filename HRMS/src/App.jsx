

import './App.css'
import { Routes, Route } from "react-router-dom";
import LoginForm from './pages/login';
import Home from './pages/home';
import EmployeeForm from './pages/employee';
import DashboardForm from './pages/dashboard';
import ProtectedRoute from './components/Utils/protectedRoute';
import Unauthorized from './components/Utils/unauthorize';

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/Unauthorized" element={<Unauthorized/>} />
        <Route path="Home" 
        element={ 
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
        }
        >
         <Route path="employee" 
         element={
        <ProtectedRoute allowedRoles={["hr", "manager", "admin"]}>
         <EmployeeForm />
        </ProtectedRoute>
        } 
        />
         <Route path="dashboard" element={<DashboardForm />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
