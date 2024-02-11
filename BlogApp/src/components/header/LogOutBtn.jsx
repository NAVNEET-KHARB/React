import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logOut } from "../../store/authSlice";

function LogOutBtn() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    authService.logOut().then(() => {
      dispatch(logOut());
    });
  };
  return (
    <button
      onClick={handleLogOut}
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
    >
      Logout
    </button>
  );
}

export default LogOutBtn;
