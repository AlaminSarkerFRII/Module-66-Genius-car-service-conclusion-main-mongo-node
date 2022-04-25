import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [user] = useAuthState(auth);
  // load signle serviec from custom hooks serviceDeatils
  const [service, setService] = useServiceDetails(serviceId);

  // email verification not working

  // handle on submit order

  const handleOnPlaceOrder = (event) => {
    event.preventDefault();
    // user details collection
    const order = {
      name: user.displayName,
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    // axios diye data post korbo

    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("your order is booked");
        event.target.reset();
      }
    });
  };

  return (
    <div>
      <div className="row mt-5 mb-5">
        <div className="col-md-6">
          <h2>checkout to booking : {service.name}</h2>
        </div>
        <form onSubmit={handleOnPlaceOrder} className="col-md-6">
          <input
            className="w-50 d-block mb-2"
            type="text"
            name="name"
            value={user?.displayName}
            placeholder="Name"
            disabled
          />
          <input
            className="w-50 d-block mb-2"
            type="email"
            name="email"
            id=""
            value={user?.email}
            placeholder="Enter your email"
          />
          <input
            className="w-50 d-block mb-2"
            type="number"
            name="number"
            id=""
            placeholder="number"
          />
          <input
            className="w-50 d-block mb-2"
            type="text"
            name="address"
            id=""
            value={user.address}
            placeholder="Enter your Address"
          />
          <input
            className="w-50 d-block mb-2"
            type="text"
            name="service"
            id=""
            value={service.name}
            placeholder="service name"
          />
          <input className="w-50 d-block" type="submit" value=" Place Order" />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
