import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useOrder } from "../../../contexts/orderProvider/orderProvider";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { handleOrder } = useOrder();
  const { productId } = useParams();
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const url = `https://polar-dawn-87981.herokuapp.com/productDetails/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  // handle from
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle submit
  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
    fetch("https://polar-dawn-87981.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    swal("Congratulations!!!", `You have order successfully`, "success");
    reset();
    history.push("/");
    console.log(data);
  };

  return (
    <Container className="py-5">
      <Row>
        <div className="col-md-6">
          <img className="img-fluid" src={product?.image} alt="" />
        </div>
        <div className="col-md-6">
          <div>
            <h4>{product?.name}</h4>
            <h1 className="text-danger">
              ${(product?.price * quantity).toFixed(2)}
            </h1>
            <small>
              <p className="text-muted">{product?.description}</p>
            </small>
          </div>
          <hr />
          <div className="d-flex border w-25 align-items-center rounded">
            <span className="px-5 fs-3">{quantity}</span>
            <div style={{ cursor: "pointer" }} className="m-2 ">
              <AiOutlinePlus
                className="border rounded fs-5"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              ></AiOutlinePlus>
              <br />
              <AiOutlineMinus
                className="border rounded fs-5 mt-1"
                onClick={() => {
                  quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
                }}
              ></AiOutlineMinus>
            </div>
          </div>
          <hr />
          <div>
            <Button
              variant="warning"
              onClick={() => {
                product["quantity"] = quantity;
                product.price = product.price * quantity;
                handleOrder(product);
                swal("Wow!!!", "Your order has added to the cart", "success");
              }}
            >
              Add TO Cart <BsCart2 />
            </Button>
          </div>

          <hr />
          <small>
            <p>
              Category:
              <span className="text-muted"> {product?.category}.</span>
            </p>
          </small>
        </div>

        {/* place Order */}
      </Row>
      <div className="my-5 w-75 m-auto">
        <h1 className="text-center">Booking Form</h1>
        <h6 className="text-center title-block py-3">
          Please Fill Out The From
        </h6>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            defaultValue={product?.name}
            className="p-2 m-2 w-100"
          />
          <br />
          <input {...register("date")} type="date" className="p-2 m-2 w-100" />
          <br />
          <input
            type="number"
            {...register("PhoneNumber")}
            placeholder="PhoneNumber"
            className="p-2 m-2 w-100"
          />
          <br />

          <input
            {...register("price")}
            defaultValue={product?.price}
            className="p-2 m-2 w-100"
          />
          <br />
          <input
            {...register("image")}
            defaultValue={product?.image}
            className="p-2 m-2 w-100"
          />
          <br />
          <textarea
            {...register("address", { required: true })}
            placeholder="Your Address"
            className="p-2 m-2 w-100"
          />
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <div className="text-center">
            <input
              type="submit"
              value="Order Now"
              className="btn btn-success w-25"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ProductDetails;
