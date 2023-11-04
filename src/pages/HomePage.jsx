import AppFooter from "../components/reusable/appFooter/AppFooter";
import AppHeader from "../components/reusable/appHeader/AppHeader";
import useLoginedUser from "../hooks/useLoginedUser";

import MainContainer from "../components/reusable/mainContainer/MainContainer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../components/reusable/Loader/Loader";

function HomePage() {
  const [user, isLoading, error] = useLoginedUser();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (error) {
        navigate("/auth", { replace: true });
      }
    },
    [error]
  );

  return (
    <>
      {isLoading && <Loader />}
      {/* {error && <Login allowRedirect={false} />} */}
      {!error && !isLoading && user && (
        <>
          <AppHeader />
          <MainContainer>
            <p>Hooray!! home page</p>
          </MainContainer>
          <AppFooter />
        </>
      )}
    </>
  );
}

export default HomePage;
