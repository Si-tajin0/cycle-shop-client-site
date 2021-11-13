import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import swal from "sweetalert";
import { useDelivery } from "../../contexts/DeliveryProvider/DeliveryProvider";
import { useOrder } from "../../contexts/orderProvider/orderProvider";
import OrderCart from "../OrderCart/OrderCart";
import useAuth from "../../Hooks/useAuth";
import OrderPrice from "../OrderPrice/OrderPrice";

const Booking = () => {
  const { order, setOrder } = useOrder();
  const { input, setInput } = useDelivery();
  const { disabled, setDisabled } = useDelivery();
  const { user } = useAuth();

  const [change, setChange] = useState({
    name: `${user?.displayName}`,
    address: "",
    PhoneNumber: "",
    location: "",
  });

  // handle change
  const handleChange = (e) => {
    const { value, name } = e.target;
    setChange((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  //   handle on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setInput({
      name: change.name,
      address: change.address,
      phoneNumber: change.phoneNumber,
      location: change.location,
    });
    swal(
      "Information Updated!",
      "Your shipping details updated successfully!",
      "success"
    );
    setDisabled(false);
  };

  return (
    <Container className="my-5">
      <Row>
        {order.length > 0 ? (
          <>
            <div className="col-md-6">
              <h2 className="text-muted">Edit Delivery Details</h2>
              <hr />
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Delivery to"
                  name="name"
                  value={change.name}
                  onChange={handleChange}
                  required
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={change.address}
                  onChange={handleChange}
                  required
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={change.phoneNumber}
                  onChange={handleChange}
                  required
                  className="p-2 m-2 w-100"
                />
                <br />

                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={change.location}
                  onChange={handleChange}
                  required
                  className="p-2 m-2 w-100"
                />

                <button className="btn btn-warning">Save & Continue</button>
              </form>
            </div>
            <div className="col-md-6 ">
              <div className="d--flex">
                <p>
                  Deliver to :
                  <span>{input.name ? `${input.name}` : "-----"}</span>
                </p>
                <p className="text-danger">Arriving in 2-7 days</p>
                <p>
                  Address :
                  <span>{input.address ? `${input.address}` : "-----"}</span>
                </p>
                <p>
                  Phone Number :
                  <span>
                    {input.phoneNumber ? `${input.phoneNumber}` : "-----"}
                  </span>
                </p>
                <p>
                  Location :
                  <span>{input.location ? `${input.location}` : "-----"}</span>
                </p>
              </div>

              {/* orders */}

              <div className="d-flex">
                {order.map((item) => (
                  <OrderCart key={item.id} {...item}></OrderCart>
                ))}
              </div>

              {/* order price */}
              <OrderPrice {...order} />
              {/* place order Button */}
              <div>
                {disabled ? (
                  <button disabled="disabled" btn btn-primary>
                    Place Order
                  </button>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      swal(
                        "Congratulations!!!",
                        `You have order ${order.length} times successfully`,
                        "success"
                      );
                      setOrder([]);
                    }}
                  >
                    Place Order
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="pt-24">
            <h1 className="text-center text-primary">No Order has added!!</h1>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Booking;
