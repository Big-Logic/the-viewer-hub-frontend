import { Outlet } from "react-router-dom";

function AuthPage() {
  return (
    <section>
      <hi>Authentication page</hi>
      <Outlet />
    </section>
  );
}

export default AuthPage;
