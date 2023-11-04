import Login from "../components/auth/login/Login";
import Loader from "../components/reusable/Loader/Loader";
import AppFooter from "../components/reusable/appFooter/AppFooter";
import AppHeader from "../components/reusable/appHeader/AppHeader";
import MainContainer from "../components/reusable/mainContainer/MainContainer";
import useLoginedUser from "../hooks/useLoginedUser";

function PostPage() {
  const [user, isLoading, error] = useLoginedUser();

  return (
    <>
      {isLoading && <Loader />}
      {error && <Login allowRedirect={false} />}
      {!error && !isLoading && user && (
        <>
          <AppHeader />
          <MainContainer>
            <p>Hooray!! post page</p>
          </MainContainer>
          <AppFooter />
        </>
      )}
    </>
  );
}

export default PostPage;
