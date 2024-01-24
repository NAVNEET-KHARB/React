import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not logged in</h1>;
  return (
    <div>
      <h1>Profile : </h1>
      {user.userName ? (
        <h3>UserName : {user.userName}</h3>
      ) : (
        <h3>UserName : Not defined</h3>
      )}
      {user.password ? (
        <h3>Password : {user.password}</h3>
      ) : (
        <h3>Password : Not defined</h3>
      )}
    </div>
  );
}

export default Profile;
