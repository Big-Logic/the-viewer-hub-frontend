import { useEffect, useRef } from "react";
import { useUser } from "../../../contexts/AuthContext";

function Signup() {
  const { signup, isLoading, error } = useUser();
  const [userObject, setUseObject] = useState(null);
  const navigate = useNavigate();
  useEffect(
    function () {
      if (userObject) {
        (async function () {
          await signup(userObject);
          if (!error) {
            navigate("/");
          }
        });
      }
    },
    [userObject]
  );
  const emailRef = useRef("");
  const passwordRef = useRef("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
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

export default Signup;
