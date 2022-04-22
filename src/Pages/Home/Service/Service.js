import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;

  const navigate = useNavigate();
  // onclick handler
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div id="services" className="container">
      <div className="service">
        <img className="w-100" src={img} alt="" />
        <h2>service : {name}</h2>
        <p> Price: {price}</p>
        <p>{description}</p>
        <button
          onClick={() => navigateToServiceDetail(_id)}
          className="btn btn-primary"
        >
          Book: {name}
        </button>
      </div>
    </div>
  );
};

export default Service;
