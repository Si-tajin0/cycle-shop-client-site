import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo-1.png";
import useAuth from "../../Hooks/useAuth";
import { Button } from "react-bootstrap";
import { useOrder } from "../../contexts/orderProvider/orderProvider";

const Menubar = () => {
  const { user, logOut } = useAuth();
  const { order } = useOrder();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      style={{ height: "70px" }}
    >
      <Container>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link style={{ textDecoration: "none", color: "white" }} to="/home">
              HOME
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to="/allProduct"
              className="px-3"
            >
              PRODUCTS
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/dashboard"
            >
              DASHBOARD
            </Link>
          </Nav>
          <Nav>
            {user?.email ? (
              <>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      borderRadius: "50%",
                      height: "45px",
                    }}
                    src={user?.photoURL}
                    alt=""
                  />
                  <p className="text-white px-2">{user.displayName}</p>
                </div>

                <Button
                  className="bg-warning mx-3 text-black"
                  onClick={logOut}
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  <FiLogOut />
                </Button>
                <Link
                  to="/booking"
                  className="text-warning"
                  style={{ fontSize: "25px" }}
                >
                  <FaShoppingCart />
                  <Badge style={{ fontSize: "10px" }} bg="danger">
                    {order.length}
                  </Badge>
                </Link>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="text-warning px-2"
                  style={{ fontSize: "25px" }}
                >
                  <BsPersonCircle />
                </NavLink>
                /
                <Link
                  to="/cart"
                  className="text-warning"
                  style={{ fontSize: "25px" }}
                >
                  <FaShoppingCart />
                  <Badge style={{ fontSize: "10px" }} bg="danger">
                    0
                  </Badge>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
