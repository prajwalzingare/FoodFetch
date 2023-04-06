import React from "react";

function Body() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center">
        <div className="block max-w-sm rounded-lg bg-white shadow-lg hover:cursor-pointer">
          <div className="p-3">
            <a href="#!">
              <img
                className="rounded-lg "
                src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="p-6 bg-white">
            <h5 className="mb-1 text-xl font-bold leading-tight text-neutral-800 ">
              Card title
            </h5>
            <p className="mb-1 text-base text-neutral-600">categories</p>
            <p className="mb-3 text-base text-neutral-600">place famos for </p>
            <div className="flex justify-between items-center ">
              <button className="bg-green-500 rounded-lg p-1">
                <i class="fa-sharp fa-solid fa-star"></i>Rating
              </button>
              <p>7.6 kms</p>
              <p>Price</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
