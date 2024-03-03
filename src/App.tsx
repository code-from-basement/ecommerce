import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layouts/Footer/Footer";
import Navbar from "./components/Layouts/Navbar/Navbar";
import Accessories from "./components/Pages/Accessories/Accessories";
import Account from "./components/Pages/Account/Account";
import Home from "./components/Pages/Home/Home";
import Keyboards from "./components/Pages/Keyboards/Keyboards";
import Keycaps from "./components/Pages/Keycaps/Keycaps";
import Switches from "./components/Pages/Switches/Switches";
import WishList from "./components/Pages/WishList/WishList";
import ItemPage from "./components/Pages/ItemPage/ItemPage";
import Login from "./components/Pages/Account/Login/Login";
import UserProfile from "./components/Pages/Account/UserProfile/UserProfile";

function App() {
  const val = false;

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="keyboards" element={<Keyboards />} />
        <Route path="keycaps" element={<Keycaps />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="switches" element={<Switches />} />
        <Route path="account" element={<Account />}>
          <Route index element={<Navigate to={`${val ? "login" : "userprofile"}`} />} />
          <Route path={`${val ? "login" : "userprofile"}`} element={val ? <Login /> : <UserProfile />} />
        </Route>
        <Route path="wishlist" element={<WishList />} />
        <Route path="/:title" element={<ItemPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
