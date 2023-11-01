import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/AuthContext";

function UserProfile() {
  const { user } = useUser();
  console.log(user);

  return <div>UserProfile</div>;
}

export default UserProfile;
