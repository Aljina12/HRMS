import { Children } from "react";
import { useNavigate } from "react-router-dom";
export default function LogoutButton() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };
    return (
        <button 
        onClick={handleLogout}
        className={`p-2 bg bg-black text-white text-xl font-bold `}
       >
        Logout
       </button>
    )
}