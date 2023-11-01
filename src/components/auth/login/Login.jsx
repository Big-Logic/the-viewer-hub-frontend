import { useEffect, useState, useRef } from "react";
import { useUser } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userObject, setUseObject] = useState(null);
  const { login, isLoading, error } = useUser();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (userObject) {
        (async function () {
          const res = await login(userObject);
          if (res) {
            navigate("/", { replace: true });
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
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    setUseObject({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      {error && <h2>Hi</h2>}
      <div>
        <input type="email" placeholder="Email" ref={emailRef} required />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
