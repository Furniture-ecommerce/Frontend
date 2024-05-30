import React from "react";

export const Card = ({ icon }) => {
  return (
    <div className="mr-5 bg-neutral-200 w-full sm:w-[498px] h-auto sm:h-[220px] mb-14 flex items-center justify-center p-4 sm:p-0">
      <div className="flex flex-col items-center text-center">
        <img src={icon.image} className="w-10 h-10 mb-2" alt={icon.name} />
        <h3 className="text-lg sm:text-xl mb-1">{icon.name}</h3>
        <h6 className="text-sm sm:text-base">{icon.description}</h6>
      </div>
    </div>
  );
};
