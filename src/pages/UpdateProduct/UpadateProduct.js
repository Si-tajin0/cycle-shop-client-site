import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import swal from "sweetalert";

const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`https://polar-dawn-87981.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          swal("Updated", "Update Successfully!", "success");
        }
        history.push("/dashboard/manageProducts");
      });
    console.log(data);
  };

  // get update product id
  useEffect(() => {
    fetch(`https://polar-dawn-87981.herokuapp.com/productDetails/${id}`)
      .then((res) => res.json())
      .then((result) => setProduct(result));
  });

  return (
    <div className="container mb-5">
      <h1 className="mt-5 text-center title-block">Update Product</h1>
      <div className="w-50 m-auto mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Name"
            defaultValue={product?.name}
            className="p-2 m-2 w-100 input-field"
          />

          <input
            defaultValue={product?.description}
            {...register("description")}
            placeholder="Description"
            className="p-2 m-2 w-100 input-field"
          />

          <input
            {...register("image", { required: true })}
            defaultValue={product?.image}
            placeholder="Image Link"
            className="p-2 m-2 w-100 input-field"
          />

          <input
            {...register("price", { required: true })}
            defaultValue={product?.price}
            placeholder="Price"
            type="number"
            className="p-2 m-2 w-100 input-field"
          />

          <select {...register("category")} className="p-2 m-2 w-100">
            <option value="Mountain Bike">Mountain Bike</option>
            <option value="Jump Bike">Jump Bike</option>
            <option value="Road Bike">Road Bike</option>
          </select>
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <div className="text-center">
            <input
              type="submit"
              value="Update Product"
              className="btn btn-warning w-50"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
