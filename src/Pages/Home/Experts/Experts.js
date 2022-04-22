import React from "react";

import expert1 from "../../../imgs/experts/expert-1.jpg";
import expert2 from "../../../imgs/experts/expert-2.jpg";
import expert3 from "../../../imgs/experts/expert-3.jpg";
import expert4 from "../../../imgs/experts/expert-4.jpg";
import expert5 from "../../../imgs/experts/expert-5.jpg";
import expert6 from "../../../imgs/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "wiil Smith", img: expert1 },
  { id: 2, name: "Kill Smith", img: expert2 },
  { id: 3, name: "Mill Smith", img: expert3 },
  { id: 4, name: "Nill Smith", img: expert4 },
  { id: 5, name: "Bill Smith", img: expert5 },
  { id: 6, name: "Siil Smith", img: expert6 },
];

const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-primary mt-5 text-center">Our Experts</h2>
      <div className="row">
        '
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
