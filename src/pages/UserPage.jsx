import { Outlet } from "react-router-dom";
import useLoginedUser from "../hooks/useLoginedUser";
import AppHeader from "../components/reusable/appHeader/AppHeader";
import AppFooter from "../components/reusable/appFooter/AppFooter";
import Login from "../components/auth/login/Login";
import MainContainer from "../components/reusable/mainContainer/MainContainer";

function UserPage() {
  const [user, isLoading, error] = useLoginedUser();

  return (
    <>
      {isLoading && <p>Loading</p>}
      {error && <Login allowRedirect={false} />}
      {!error && !isLoading && user && (
        <>
          <AppHeader />
          <MainContainer>
            <Outlet />
          </MainContainer>
          <AppFooter />
        </>
      )}
    </>
  );
}

export default UserPage;
