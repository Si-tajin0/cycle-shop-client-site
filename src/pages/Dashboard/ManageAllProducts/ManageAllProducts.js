import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);

  // get product collection
  useEffect(() => {
    fetch("https://polar-dawn-87981.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // handle delete item from
  const handleDelete = (id) => {
    fetch(`https://polar-dawn-87981.herokuapp.com/productItem/${id}`, {
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
          const restProduct = products?.filter((item) => item?._id !== id);
          setProducts(restProduct);
        }
      });
  };

  return (
    <div>
      <h1 className="py-5 text-center">All Products</h1>
      <Table striped bordered hover>
        <thead>
          <tr className="bg-warning">
            <th>#</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        {products?.map((pd, index) => (
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
              <td>{pd.name}</td>
              <td>${pd.price}</td>
              <td>{pd.category}</td>
              <td className="fs-3" style={{ cursor: "pointer" }}>
                <div className="flex items-center justify-center space-x-3">
                  <Link to={`/update/${pd._id}`}>
                    <FiEdit className="text-success" />
                  </Link>
                  <AiOutlineDelete
                    className="text-danger ms-2"
                    onClick={() => handleDelete(pd._id)}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllProducts;
