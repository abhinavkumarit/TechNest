
// import AdminLogin from './Components/AdminLogin';
// import ChangeName from './Components/ChangeName';
// import HeaderComponent from './Components/HeaderComponent';

import AdminLogin from "./Components/AdminLogin";
import AdminPage from "./Components/AdminPage";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddProducts from "./Components/AddProducts";
import EditingProducts from "./Components/EditingProducts";
import UserAdminOption from "./Components/UserAdminOption";
import UserFirstPage from "./Components/UserFirstPage";
import Cards from "./Components/Cards";
import BuyProduct from "./Components/BuyProduct";
import FilteredPage from "./Components/FilteredPage";
import ClothingPage from "./Components/ClothingPage";
import ShoesPage from "./Components/ShoesPage";
import LaptopPage from "./Components/LaptopPage";
import KitchenPage from "./Components/KitchenPage";
import ToyesPage from "./Components/ToyesPage";
import MakupKits from "./Components/MakupKitsPage";
import UserLoginPage from "./Components/LoginPage";
import UloginPage from "./Components/UloginPage";
import UcreateAccount from "./Components/UcreateAccount";


function App() {
  return (
    <div className="App">
      {/* <HeaderComponent name="Abhinav"/> */}
      {/* <ChangeName/> */}
      {/* <AdminLogin/> */}
      {/* <LoginPage/> */}
      {/* <Navbar/> */}

      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<UserAdminOption></UserAdminOption>}></Route>
          <Route path="/adminlogin" element={<LoginPage/>}></Route>
          {/* <Route path="/*" element={<Error/>}></Route> */}
          <Route path="/createaccount" element={<AdminLogin/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>

          <Route path="/adminpage" element={<AdminPage/>}></Route>
          <Route path="/addproducts" element={<AddProducts/>}></Route>
          <Route path="/edit/:id" element={<EditingProducts/>}></Route>
          <Route path="/firstPage" element={<UserAdminOption/>}></Route>
          <Route path="/user" element={<UserFirstPage/>}></Route>
          <Route path="/cards" element={<Cards/>}></Route>
          <Route path="/buy/:id" element={<BuyProduct/>}></Route>
        <Route path="/newPage" element={<FilteredPage/>}></Route>
        <Route path="/ClothPage" element={<ClothingPage/>}></Route>
        <Route path="/ShoesPage" element={<ShoesPage/>}></Route>
        <Route path="/LaptopPage" element={<LaptopPage/>}></Route>
        <Route path="/Kitchens" element={<KitchenPage/>}></Route>
        <Route path="/Toyes" element={<ToyesPage/>}></Route>
        <Route path="/MakeupKitsPage" element={<MakupKits/>}></Route>
        <Route path="/UloginPage" element={<UloginPage/>}></Route>
        <Route path="/UcreateAccount" element={<UcreateAccount/>}></Route>

          

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
