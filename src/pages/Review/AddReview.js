import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://polar-dawn-87981.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    swal("Success!!!", `Review post successfully`, "success");
  };
  return (
    <div>
      <h1 className="my-3 text-center title-block">Add Review</h1>
      <div className="w-50 m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field p-2 m-2 w-100"
            name="name"
            value={user?.displayName}
            type="name"
            {...register("name", { required: true })}
          />
          <br />
          <input
            className="input-field p-2 m-2 w-100"
            name="comments"
            placeholder="Comments"
            {...register("comments", { required: true })}
          />
          <input
            className="input-field p-2 m-2 w-100"
            type="number"
            name="ratting"
            min="1"
            max="5"
            step="any"
            placeholder="review"
            {...register("ratting", { required: true })}
          />
          <br />

          <div className="text-center">
            <input
              className="submit-btn btn btn-warning mt-3 w-25"
              type="submit"
              value="Post"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
