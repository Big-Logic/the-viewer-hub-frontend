import { Outlet } from "react-router-dom";
import MainContainer from "../components/reusable/mainContainer/MainContainer";

function AuthPage() {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
}

export default AuthPage;
