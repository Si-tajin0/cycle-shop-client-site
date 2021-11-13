import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useOrder } from "../../contexts/orderProvider/orderProvider";

const OrderCart = (props) => {
  const { removeOrder } = useOrder();

  return (
    <div className="d-flex">
      <div className="d-flex">
        <img className="img-fluid w-25" src={props.image} alt="" />
      </div>
      <div>
        <h5>{props.name}</h5>
        <h1>${props.price.toFixed(2)}</h1>
        <p>{props.category}</p>
      </div>
      <div>
        <span>{props.quantity} items</span>
      </div>
      <div>
        <AiOutlineDelete onClick={() => removeOrder(props.id)} />
      </div>
    </div>
  );
};

export default OrderCart;
