import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/AuthContext";

// COMPONENTS
import Form from "../components/Form";
import Error from "../components/Error";
import Input from "../components/Input";
import Button from "../components/Button";
import LinksContainer from "../components/LinksContainer";
import FormSelect from "../components/FormSelect";

function Signup() {
  const [userObject, setUserObject] = useState(null);
  const { signup, isLoading, error } = useUser();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (userObject) {
        (async function () {
          console.log(userObject);

          const res = await signup(userObject);
          if (res) {
            navigate("/");
          }
        })();
      }
    },
    [userObject]
  );

  // REF
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const genderRef = useRef("");
  const birthDateRef = useRef("");
  const passwordRef = useRef("");
  const passwordConfirmRef = useRef("");
  function handleSubmit(e) {
    e.preventDefault();
    setUserObject({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
      birthDate: birthDateRef.current.value,
      password: passwordRef.current.value,
      passwordConfirm: passwordConfirmRef.current.value,
    });
  }
  return (
    <>
      <Error msg={error} />
      <Form title="Signup Now" handleSubmit={handleSubmit}>
        <Input
          inputPlacehoder="FirstName"
          inputRef={firstNameRef}
          labelText="First Name"
        />
        <Input
          inputPlacehoder="Last Name"
          inputRef={lastNameRef}
          labelText="Last Name"
        />
        <Input
          inputType="email"
          inputPlacehoder="Email"
          inputRef={emailRef}
          labelText="Email"
        />
        <FormSelect
          selectPlacehoder="Gender"
          selectRef={genderRef}
          labelText="Gender"
          optionsValues={["Male", "Female"]}
        />
        <Input
          inputType="date"
          inputPlacehoder="Date of Birth"
          inputRef={birthDateRef}
          labelText="Date of Birth"
        />
        <Input
          inputType="password"
          inputPlacehoder="Password"
          inputRef={passwordRef}
          labelText="Password"
        />
        <Input
          inputType="password"
          inputPlacehoder="Confirm Password"
          inputRef={passwordConfirmRef}
          isRequired={true}
          labelText="Confirm Password"
        />

        <Button loading={isLoading}>Signup</Button>
        <LinksContainer>
          <div>
            <Link to="/auth/forgotpassword">Forgot password?</Link>
          </div>
          <div>
            <Link to="/auth">Already registered?</Link>
          </div>
        </LinksContainer>
      </Form>
    </>
  );
}

export default Signup;
