import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   handle submit button
  const onSubmit = (data) => {
    fetch("https://polar-dawn-87981.herokuapp.com/addProducts", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          swal("Product Added!", "Product is added to the store!", "success");
        } else {
          swal("Unsuccessful", "Product is not added to the store!", "error");
        }
      });
    reset();
  };

  return (
    <div className="container">
      <h1 className="mt-5 text-center text-danger">Add A Product</h1>
      <div className="w-50 m-auto mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Name"
            className="p-2 m-2 w-100 input-field"
          />

          <input
            {...register("description")}
            placeholder="Description"
            className="p-2 m-2 w-100 input-field"
          />

          <input
            {...register("image", { required: true })}
            placeholder="Image Link"
            className="p-2 m-2 w-100 input-field"
          />

          <input
            {...register("price", { required: true })}
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

          <input
            type="submit"
            value="Add To Product"
            className="btn btn-info w-50"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
