import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const { user, token } = useAuth();
  const [myOrder, setMyOrder] = useState();

  useEffect(() => {
    fetch(`https://polar-dawn-87981.herokuapp.com/myOrder/${user?.email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user?.email, token]);

  return (
    <div>
      <h2 className="text-center py-3">Order Item</h2>
      <h1 className="text-center title-block">{myOrder?.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr className="bg-warning">
            <th>#</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>status</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        {myOrder?.map((pd, index) => (
          <tbody key={pd._id}>
            <tr>
              <td>{index}</td>
              <td>
                <img
                  style={{ width: "50px", borderRadius: "10%" }}
                  src={pd.image}
                  alt="product img"
                />
              </td>
              <td>{pd.name}</td>
              <td>${pd.price}</td>
              <td>{pd.status}</td>
              <td>{pd.PhoneNumber}</td>
              <td>{pd.address}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyOrders;
