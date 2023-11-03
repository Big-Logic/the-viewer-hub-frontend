import { useEffect, useState, useRef } from "react";
import { useUser } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

// COMPONENTS
import Input from "../components/Input";
import LinksContainer from "../components/LinksContainer";
import Form from "../components/Form";
import Button from "../components/Button";
import Error from "../components/Error";
import SectionContainer from "../../reusable/sectionContainer/SectionContainer";

// STYLES
import styles from "./Login.module.css";

function Login({ allowRedirect }) {
  const [userObject, setUserObject] = useState(null);
  const { login, isLoading, error } = useUser();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (userObject) {
        (async function () {
          const res = await login(userObject);
          if (allowRedirect) {
            if (res) {
              navigate("/", { replace: true });
            }
          }
        })();
      }
    },
    [userObject]
  );

  const emailRef = useRef("");
  const passwordRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    setUserObject({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }
  return (
    <>
      <Error msg={error} />
      <SectionContainer customClass={styles.section}>
        <Form title="Login Now" handleSubmit={handleSubmit}>
          <Input
            inputType="email"
            inputPlacehoder="Email"
            inputRef={emailRef}
            isRequired={true}
            labelText="Email"
          />
          <Input
            inputType="password"
            inputPlacehoder="Password"
            inputRef={passwordRef}
            isRequired={true}
            labelText="Password"
          />

          <Button loading={isLoading}>Login</Button>
          <LinksContainer>
            <div>
              <Link to="/auth/forgotpassword">Forgot password?</Link>
            </div>
            <div>
              <Link to="/auth/signup">Don't have an account?</Link>
            </div>
          </LinksContainer>
        </Form>
      </SectionContainer>
    </>
  );
}

export default Login;
