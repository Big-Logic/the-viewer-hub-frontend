import CoverPicture from "./components/CoverPicture";
import ProfilePicture from "./components/ProfilePicture";
import Tabs from "./components/Tabs";
import UserInfo from "./components/UserInfo";
function User() {
  return (
    <section>
      <CoverPicture />
      <ProfilePicture />
      <UserInfo />
      <Tabs />
    </section>
  );
}

export default User;
