import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete ?? ");

    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const reminingService = services.filter(
            (service) => service._id !== id
          );
          setServices(reminingService);
        });
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Manage Service</h2>

      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}
            <button
              onClick={() => handleDelete(service._id)}
              className="mx-2 px-2 bg-danger"
            >
              Delete
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
