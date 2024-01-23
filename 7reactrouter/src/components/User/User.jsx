import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userId } = useParams();
  return (
    <div className="text-3xl py-5 bg-orange-500 text-black text-center">
      User : {userId}
    </div>
  );
}

export default User;
