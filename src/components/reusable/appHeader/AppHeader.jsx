import { useUser } from "../../../contexts/AuthContext";

// COMPONENTS
import Logo from "./components/Logo";
import SearchButton from "./components/SearchButton";
import NotificationButton from "./components/NotificationButton";
import User from "./components/User";
// //////

// CSS STYLES
import styles from "./AppHeader.module.css";
function AppHeader() {
  const { user } = useUser();
  console.log(user);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.headerItemsContainer}>
          <div>
            <SearchButton />
          </div>
          <div>
            <NotificationButton />
          </div>
          <div>
            <User />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
