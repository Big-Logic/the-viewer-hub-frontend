import { Outlet, useNavigate } from "react-router-dom";
import MainContainer from "../components/reusable/mainContainer/MainContainer";
import useLoginedUser from "../hooks/useLoginedUser";
import { useEffect } from "react";
function AuthPage() {
  const [user, isLoading, error] = useLoginedUser();
  const navigate = useNavigate();
  useEffect(function () {
    if (user) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <>
      {!isLoading && !user && (
        <MainContainer>
          <Outlet />
        </MainContainer>
      )}
    </>
  );
}

export default AuthPage;
