import "./App.css";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menubar from "./Shared/Menubar/Menubar";
import Footer from "./Shared/Footer/Footer";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import ProductDetails from "./pages/Home/ProductDetails/ProductDetails";
import AllProduct from "./pages/Home/AllProduct/AllProduct";
import OrderProvider from "./contexts/orderProvider/orderProvider";
import DeliveryProvider from "./contexts/DeliveryProvider/DeliveryProvider";
import Booking from "./pages/Booking/Booking";
import NotFound from "./pages/NotFound/NotFound";
import UpdateProduct from "./pages/UpdateProduct/UpadateProduct";

function App() {
  return (
    <div>
      <AuthProvider>
        <OrderProvider>
          <DeliveryProvider>
            <Router>
              <Menubar></Menubar>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/register">
                  <Register></Register>
                </Route>
                <Route path="/allProduct">
                  <AllProduct></AllProduct>
                </Route>
                <PrivateRoute path="/productDetails/:productId">
                  <ProductDetails></ProductDetails>
                </PrivateRoute>
                <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
                </PrivateRoute>
                <PrivateRoute path="/booking">
                  <Booking></Booking>
                </PrivateRoute>
                <PrivateRoute path="/update/:id">
                  <UpdateProduct></UpdateProduct>
                </PrivateRoute>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
              </Switch>
              <Footer></Footer>
            </Router>
          </DeliveryProvider>
        </OrderProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
