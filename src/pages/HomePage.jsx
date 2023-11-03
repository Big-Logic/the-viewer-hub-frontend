import AppFooter from "../components/reusable/appFooter/AppFooter";
import AppHeader from "../components/reusable/appHeader/AppHeader";
import useLoginedUser from "../hooks/useLoginedUser";
import Login from "../components/auth/login/Login";
import MainContainer from "../components/reusable/mainContainer/MainContainer";

function HomePage() {
  const [user, isLoading, error] = useLoginedUser();

  return (
    <>
      {isLoading && <p>Loading</p>}
      {error && <Login allowRedirect={false} />}
      {user && (
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
