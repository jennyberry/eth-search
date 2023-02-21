import React from "react";

const CardItem = ({ id, title, amount, proposalsCount, launchDate, thumbnail }) => {
  return (
    <div
      key={id}
      className="flex justify-center py-6 text-3xl border-2 border-gray-400 rounded-xl cursor-pointer hover:border-blue-400"
    >
      <div className="flex-row">
        <div className="text-right mr-5">
          <div>
            <p className="text-sm">Launched</p>
          </div>
          <div>
            <p className="text-[22px]"> {launchDate}</p>
          </div>
        </div>
        <img
          src={thumbnail}
          alt={title}
          className="w-48 h-48 rounded-full mx-20"
        />
        <h3 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {" "}
          {title}
        </h3>
        <div className="flex justify-between mt-10 px-5">
          <div>
            {" "}
            <p className="text-sm">Amount</p>${amount}
          </div>
          <div>
            <p className="text-sm">Total proposals</p>
            {proposalsCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
