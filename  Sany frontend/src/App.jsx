import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Login from './Pages/Auth/Login/Login';
import Dashboard from './Pages/Dashboard';
import AddCategory from './Pages/Inventory/Categories/AddCategory';
import AddSubCategories from './Pages/Inventory/SubCategories/AddSubCategories';
import Signup from './Pages/Auth/SignUp/Signup';
import AddDealers from './Pages/Inventory/Dealers/AddDealers';
import AddModels from './Pages/Inventory/Models/AddModels';
import ProtectedRoutes from './Routes/ProtectedRoutes';

function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
          <Route path="/addCategory" element={<ProtectedRoutes><AddCategory /></ProtectedRoutes>} />
          <Route path="/subCategory" element={<ProtectedRoutes><AddSubCategories /></ProtectedRoutes>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addDealer" element={<ProtectedRoutes><AddDealers /></ProtectedRoutes>} />
          <Route path="/addModels" element={<ProtectedRoutes><AddModels /></ProtectedRoutes>} />



        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
