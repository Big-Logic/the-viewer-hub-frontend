import { useEffect, useRef, useState } from "react";
import { useUser } from "../../../contexts/AuthContext";
import Input from "../components/Input";
import Form from "../components/Form";

function UserProfile() {
  const { user } = useUser();
  const fistNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const birthDateRef = useRef("");

  return (
    <section>
      <Form formTitle="Contact Information">
        <Input
          inputType="text"
          inputPlacehoder="Enter your first Name"
          isRequired={true}
          labelText="First Name:"
          defaultValue={user.firstName}
          inputRef={fistNameRef}
        />
        <Input
          inputType="text"
          inputPlacehoder="Enter your last Name"
          isRequired={true}
          labelText="Last Name:"
          defaultValue={user.lastName}
          inputRef={lastNameRef}
        />
        <Input
          inputType="email"
          inputPlacehoder="Enter your email"
          isRequired={true}
          labelText="Email:"
          defaultValue={user.email}
          inputRef={emailRef}
        />
      </Form>

      <Form formTitle="Basic Information">
        <Input
          inputType="date"
          isRequired={true}
          labelText="Birth Date:"
          defaultValue={user.birthDate}
          inputRef={birthDateRef}
        />
      </Form>
    </section>
  );
}

export default UserProfile;
