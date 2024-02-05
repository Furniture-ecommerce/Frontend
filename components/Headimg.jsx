import React from "react";

export const Headimg = ({ img, title, desc }) => {
  return (
    <div style={{ position: "relative" }}>
      <img className="w-[100%] pb-10" src={img} alt="" />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h1 className="text-6xl mb-6">
          <b>{title}</b>
        </h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};
