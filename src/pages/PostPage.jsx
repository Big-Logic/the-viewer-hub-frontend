import AppFooter from "../components/reusable/appFooter/AppFooter";
import AppHeader from "../components/reusable/appHeader/AppHeader";
import useLoginedUser from "../hooks/useLoginedUser";

function PostPage() {
  const [user, isLoading, error] = useLoginedUser();

  return (
    <>
      {isLoading && <p>Loading</p>}
      {error && <p>{error.message}</p>}
      {user && (
        <>
          <AppHeader />
          <p>Hooray!! post page</p>
          <AppFooter />
        </>
      )}
    </>
  );
}

export default PostPage;
