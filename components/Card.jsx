import React from "react";

export const Card = ({ icon }) => {
  return (
    <div className="mr-5 bg-neutral-200 w-[498px] h-[220px] mb-14 flex items-center justify-center">
      <div className="">
        <img src={icon.image} className="w-10 h-10" alt={icon.name} />
        <h3>{icon.name}</h3>
        <h6>{icon.description}</h6>
      </div>
    </div>
  );
};
