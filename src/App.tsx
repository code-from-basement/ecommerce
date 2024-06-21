import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layouts/Footer/Footer";
import Navbar from "./components/Layouts/Navbar/Navbar";
import Accessories from "./components/Pages/Accessories/Accessories";
import Account from "./components/Pages/Account/Account";
import Login from "./components/Pages/Account/Login/Login";
import SignUp from "./components/Pages/Account/SignUp/SignUp";
import UserProfile from "./components/Pages/Account/UserProfile/UserProfile";
import Home from "./components/Pages/Home/Home";
import ItemPage from "./components/Pages/ItemPage/ItemPage";
import Keyboards from "./components/Pages/Keyboards/Keyboards";
import Keycaps from "./components/Pages/Keycaps/Keycaps";
import Search from "./components/Pages/Search/Search";
import Switches from "./components/Pages/Switches/Switches";
import WishList from "./components/Pages/WishList/WishList";
import LoadingFullView from "./components/UI/LoadingFullView/LoadingFullView";
import { useGlobalContext } from "./context/globalContext";
import { useAuthContext } from "./context/authContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { uiToggle } = useGlobalContext();
  const { isLoadingFullViewShow } = uiToggle;
  const { authUser } = useAuthContext();
  console.log(authUser);

  return (
    <div>
      <Navbar />
      {isLoadingFullViewShow && <LoadingFullView />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="keyboards" element={<Keyboards />} />
        <Route path="keycaps" element={<Keycaps />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="switches" element={<Switches />} />
        <Route path="account" element={<Account />}>
          <Route index element={<Navigate to={`${!authUser ? "login" : "userprofile"}`} />} />
          <Route path="login" element={!authUser ? <Login /> : <Navigate to={"/"} />} />
          <Route path="userprofile" element={authUser ? <UserProfile /> : <Navigate to={"/"} />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="wishlist" element={<WishList />} />
        <Route path="search" element={<Search />} />
        <Route path="/:title" element={<ItemPage />} />
      </Routes>
      <Footer />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "1.5rem",
          },
        }}
      />
    </div>
  );
}

export default App;
