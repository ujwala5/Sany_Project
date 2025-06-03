import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';


function Dashboard() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate('/login');
    }

    return (
        <div>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <Navbar />
        </div>
    )
}

export default Dashboard;
