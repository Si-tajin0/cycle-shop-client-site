import React from "react";
import { useOrder } from "../../contexts/orderProvider/orderProvider";

const OrderPrice = () => {
  const { order } = useOrder();

  let allPrice = 0;
  for (let i = 0; i < order.length; i++) {
    allPrice += order[i].price * order[i].quantity;
  }

  const subTotal = parseFloat(allPrice.toFixed(2));
  const tax = parseFloat((allPrice % 5).toFixed(2));
  const deliveryFee = parseFloat((allPrice % 20).toFixed(2));
  const total = parseFloat((subTotal + tax + deliveryFee).toFixed(2));

  return (
    <div>
      <div className="d-flex items-center">
        <span>Subtotal</span>
        <span>${subTotal}</span>
      </div>
      <div className="d-flex items-center">
        <span>Tax</span>
        <span>${tax}</span>
      </div>
      <div className="d-flex items-center">
        <span>Delivery Fee</span>
        <span>${deliveryFee}</span>
      </div>
      <div className="d-flex items-center">
        <span>Total</span>
        <span>${total}</span>
      </div>
    </div>
  );
};

export default OrderPrice;
