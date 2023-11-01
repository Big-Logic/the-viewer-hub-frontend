import { Link } from "react-router-dom";
import AppFooter from "../components/reusable/appFooter/AppFooter";
import AppHeader from "../components/reusable/appHeader/AppHeader";
import useLoginedUser from "../hooks/useLoginedUser";

function HomePage() {
  const [user, isLoading, error] = useLoginedUser();

  return (
    <>
      {isLoading && <p>Loading</p>}
      {error && (
        <p>
          {error.message}
          <Link to="/auth" />
        </p>
      )}
      {user && (
        <>
          <AppHeader />
          <p>Hooray!! home page</p>
          <AppFooter />
        </>
      )}
    </>
  );
}

export default HomePage;
