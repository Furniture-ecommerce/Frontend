import React from "react";

const icons = [
  {
    id: 1,
    name: "Free Shipping",
    image: "/assets/icons/ship.png",
    description: "Order above $200",
  },
  {
    id: 2,
    name: "Money Back",
    image: "/assets/icons/money.png",
    description: "30 days guarantee",
  },
  {
    id: 3,
    name: "Secure Payements",
    image: "/assets/icons/lock.png",
    description: "Secured by stripe",
  },
  {
    id: 4,
    name: "24/7 Support",
    image: "/assets/icons/phone.png",
    description: "Phone and email support",
  },
];

export const Card = () => {
  return (
    <div className="flex">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="mr-5 bg-neutral-200 w-[498px] h-[220px] mb-14 flex items-center justify-center"
        >
          <div className="">
            <img src={icon.image} className="w-10 h-10" alt={icon.name} />
            <h3 className="">{icon.name}</h3>
            <h6 className="">{icon.description}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};
