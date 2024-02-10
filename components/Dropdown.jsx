import React from "react";

export const Dropdown = ({ kind, title, items }) => {
  return (
    <>
      <h1>{kind}</h1>
      <details className="dropdown">
        <summary className="w-[200px] bg-white hover:text-white text-black m-1 btn flex items-center">
          {title}
          <span className="ml-2" role="img" aria-label="down-arrow">
            ˅
          </span>
        </summary>
        <ul className="p-2 bg-white shadow menu dropdown-content z-[1] border border-black rounded-box w-52">
          <li>
            <a>{items}</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </>
  );
};
