import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../../../hooks/useServiceDetails";

const ServiceDetail = () => {
  // parameter akare niye asbo
  const { serviceId } = useParams();
  //load details of single item

  const [service, setService] = useServiceDetails(serviceId);

  return (
    <div className="container">
      <div>
        <h2>Service Detail : {service.name}</h2>
        <p>{service.description}</p>
        <img src={service.img} alt="" />
      </div>

      <div className="mt-3 py-5">
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary">Proceed To Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
