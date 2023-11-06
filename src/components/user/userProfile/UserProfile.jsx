import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/AuthContext";
import Input from "../components/Input";

function UserProfile() {
  const { user } = useUser();

  return (
    <section>
      <form>
        <h2>Contact Information</h2>
        <Input
          inputType="text"
          inputPlacehoder="Enter your first Name"
          isRequired={true}
          labelText="First Name:"
          defaultValue={user.firstName}
        />
      </form>
    </section>
  );
}

export default UserProfile;
