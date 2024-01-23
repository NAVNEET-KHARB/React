import React from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  return (
    <div className="text-3xl text-center text-white bg-orange-400 border-yellow-600 border-5 m-5 p-4">
      <div className="p-4">Github username : {data.name}</div>
      <div className="p-4">Github followers : {data.followers}</div>
    </div>
  );
}

export default Github;
