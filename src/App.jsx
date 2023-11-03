import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/AuthContext";
// PAGES
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import SettingPage from "./pages/SettingPage";
////////////////////
////////////////////

//AUTH PAGE COMPONENTS
import Login from "./components/auth/login/Login";
import Signup from "./components/auth/signup/Signup";
// /////////////
// /////////////

// USER PAGE COMPONENTS
import UserPosts from "./components/user/userPosts/UserPosts";
import UserProfile from "./components/user/userProfile/UserProfile";
// ///////////
// ///////////
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/post" element={<PostPage />} />
          <Route path="/user" element={<UserPage />}>
            <Route index element={<UserPosts />} />
            <Route path="about" element={<UserProfile />} />
          </Route>
          <Route path="/auth" element={<AuthPage />}>
            <Route index element={<Login allowRedirect={true} />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<p>Nothing was found at this route</p>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
