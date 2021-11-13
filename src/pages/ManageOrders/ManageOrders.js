import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineDelete } from "react-icons/ai";
import swal from "sweetalert";

const ManageOrders = () => {
  const [orders, setOrders] = useState();
  const { register, handleSubmit } = useForm();
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    fetch("https://polar-dawn-87981.herokuapp.com/orders")
      .then((res) => res.json())
      .then((result) => setOrders(result));
  }, []);

  // handle delete item from
  const handleDelete = (id) => {
    fetch(`https://polar-dawn-87981.herokuapp.com/orderItem/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          swal({
            title: "Are you sure?",
            text: "Once deleted, your Product item Deleted?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              swal("Successful!", "Deleted successfully!", "success", {
                icon: "success",
              });
            } else {
              swal("Your product  Item is safe!");
            }
          });
          const restProduct = orders?.filter((item) => item?._id !== id);
          setOrders(restProduct);
        }
      });
  };

  // const status = "apporved";
  const handleOrderId = (id) => {
    setOrderId(id);
    console.log(id);
  };

  //   handle submit
  const onSubmit = (data) => {
    fetch(`https://polar-dawn-87981.herokuapp.com/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    swal("Updated!!!", `status update successfully`, "success");
  };

  return (
    <div>
      <h2 className="text-center py-3">Order Item</h2>
      <h1 className="text-center title-block">{orders?.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr className="bg-warning">
            <th>#</th>
            <th>Image</th>
            <th>User email</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody key={pd._id}>
            <tr>
              <td>{index}</td>
              <td>
                <img
                  style={{ width: "50px", borderRadius: "10%" }}
                  src={pd.image}
                  alt=""
                />
              </td>
              <td>{pd?.email}</td>
              <td>{pd.name}</td>
              <td>${pd.price}</td>
              <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(pd?._id)}
                    {...register("status")}
                  >
                    <option value={pd?.status}>{pd?.status}</option>
                    <option value="Approved">Approved</option>
                    <option value="Shipment">Shipment</option>
                    <option value="Done">Done</option>
                  </select>
                  <input className="ms-3" type="submit" value="update" />
                </form>
              </td>
              <td
                className="text-center fs-3 text-danger"
                style={{ cursor: "pointer" }}
              >
                <AiOutlineDelete onClick={() => handleDelete(pd._id)} />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageOrders;
