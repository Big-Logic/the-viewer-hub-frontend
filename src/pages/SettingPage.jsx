import { Outlet, useNavigate } from "react-router-dom";
import useLoginedUser from "../hooks/useLoginedUser";
import AppHeader from "../components/reusable/appHeader/AppHeader";
import AppFooter from "../components/reusable/appFooter/AppFooter";

function SettingPage() {
  const [user, isLoading, error] = useLoginedUser();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/auth");
  }
  return (
    <>
      {isLoading && <p>Loading</p>}
      {error && (
        <>
          <p>{error.message}</p>
          <button onClick={handleClick}>Login</button>
        </>
      )}
      {user && (
        <>
          <AppHeader />
          <Outlet />
          <AppFooter />
        </>
      )}
    </>
  );
}

export default SettingPage;
