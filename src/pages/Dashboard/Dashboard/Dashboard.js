import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FiLogOut } from "react-icons/fi";
import { FaFirstOrderAlt } from "react-icons/fa";
import { SiContactlesspayment, SiManageiq } from "react-icons/si";
import {
  MdLibraryAdd,
  MdAdminPanelSettings,
  MdOutlineRateReview,
} from "react-icons/md";
import { CgReorder } from "react-icons/cg";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import ManageOrders from "../../ManageOrders/ManageOrders";
import AddReview from "../../Review/AddReview";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const { logOut, admin } = useAuth();

  return (
    <div>
      <Row style={{ width: "100%" }}>
        <Col
          xs={12}
          md={3}
          className="d-flex justify-content-center bg-dark text-white py-5"
        >
          <div>
            <ul style={{ listStyle: "none" }}>
              <Link to={`${url}`} style={{ textDecoration: "none" }}>
                <li className="my-5 text-white">
                  <FaFirstOrderAlt className="text-warning me-1" /> My Orders
                </li>
              </Link>
              <Link to={`${url}/payment`} style={{ textDecoration: "none" }}>
                <li className="my-5 text-white">
                  <SiContactlesspayment className="text-warning me-2" />
                  Payment
                </li>
              </Link>
              {admin && (
                <div>
                  <Link
                    to={`${url}/addProduct`}
                    style={{ textDecoration: "none" }}
                  >
                    <li className="my-5 text-white">
                      <MdLibraryAdd className="text-warning me-1" /> Add A
                      Product
                    </li>
                  </Link>
                  <Link
                    to={`${url}/makeAdmin`}
                    style={{ textDecoration: "none" }}
                  >
                    <li className="my-5 text-white">
                      <MdAdminPanelSettings className="text-warning me-1" />{" "}
                      Make Admin
                    </li>
                  </Link>
                  <Link
                    to={`${url}/manageProducts`}
                    style={{ textDecoration: "none" }}
                  >
                    <li className="my-5 text-white">
                      <SiManageiq className="text-warning me-1" /> Manage All
                      Products
                    </li>
                  </Link>
                  <Link
                    to={`${url}/manageOrders`}
                    style={{ textDecoration: "none" }}
                  >
                    <li className="my-5 text-white">
                      <CgReorder className="text-warning me-1" /> Manage Orders
                    </li>
                  </Link>
                </div>
              )}
              <Link to={`${url}/addReview`} style={{ textDecoration: "none" }}>
                <li className="my-5 text-white">
                  <MdOutlineRateReview className="text-warning me-1" /> Review
                </li>
              </Link>

              <Button
                className="bg-warning mx-3 text-black"
                onClick={logOut}
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                <FiLogOut />
              </Button>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={9}>
          <Switch>
            <Route exact path={path}>
              <MyOrders></MyOrders>
            </Route>
            <AdminRoute exact path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute exact path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <Route exact path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <AdminRoute exact path={`${path}/manageProducts`}>
              <ManageAllProducts></ManageAllProducts>
            </AdminRoute>
            <AdminRoute exact path={`${path}/manageOrders`}>
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <Route exact path={`${path}/addReview`}>
              <AddReview></AddReview>
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
