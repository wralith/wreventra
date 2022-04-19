import React from "react";

function EventItem(props) {
  return (
    <li className="flex border hover:border-red-500 border-transparent w-[90%] md:w-[45%] xl:w-[30%] hover:scale-105 transition-all flex-col items-center gap-5 rounded-md bg-gray-800/50 p-5 text-gray-100">
      <h2 className="mt-3 p-3">{props.title}</h2>
      <img src={props.image} alt={`${props.title}-img`} />
      <p className="mt-12 mb-6 p-2 ">{props.description}</p>
    </li>
  );
}

export default EventItem;
