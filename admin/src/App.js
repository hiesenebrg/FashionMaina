import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes, Link, Navigate, Outlet } from "react-router-dom";

import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
function PrivateRoute({ children, ...rest }) {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;

  return admin ? <Navigate to="/" /> : <Outlet />;
}

const Layout = () => (
  <>
    <Topbar />

    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  </>
);
function App() {
  //  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  //  admin = "Adasfa";

  return (
    <>
      {/* <Topbar/>
    <Sidebar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* {admin && ( */}

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/user" element={<PrivateRoute />}>
            <Route path="/user" element={<UserList />} />
          </Route>
          <Route exact path="user/:userId" element={<PrivateRoute />}>
            <Route path="/user/:userId" element={<User />} />
          </Route>
          <Route exact path="/newUser" element={<PrivateRoute />}>
            <Route path="/newUser" element={<NewUser />} />
          </Route>

          <Route path="/products" element={<ProductList />} />

          <Route path="/product/:productId" element={<Product />} />

          <Route path="/newproduct" element={<NewProduct />} />
        </Route>

        {/* )} */}
      </Routes>
    </>
  );
}

export default App;
