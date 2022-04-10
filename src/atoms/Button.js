import React from "react";

export default function Button(props) {
  return (
    <button className="py-2 px-10 font-sans border-2 border-sky-800 rounded-xl hover:bg-blue-800 hover:text-white">
      {props.title}
    </button>
  );
}
