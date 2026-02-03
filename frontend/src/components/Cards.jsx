import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3 ">
        <div className="card bg-base-100 w-92 shadow-sm hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-3 rounded-full badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
