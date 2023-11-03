import { Outlet } from "react-router-dom";
import useLoginedUser from "../hooks/useLoginedUser";
import AppHeader from "../components/reusable/appHeader/AppHeader";
import AppFooter from "../components/reusable/appFooter/AppFooter";
import Login from "../components/auth/login/Login";
import MainContainer from "../components/reusable/mainContainer/MainContainer";

function SettingPage() {
  const [user, isLoading, error] = useLoginedUser();

  return (
    <>
      {isLoading && <p>Loading</p>}
      {error && <Login allowRedirect={false} />}
      {user && (
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

export default SettingPage;
