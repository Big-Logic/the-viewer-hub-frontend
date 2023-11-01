import { createContext, useContext, useReducer } from "react";
import { ROUTES } from "../provider/provider";
import fetchData from "../model/fetchData";

const UserContext = createContext();

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, error: null, isLoading: true };
    case "notloading":
      return { ...state, error: null, isLoading: false };
    case "error":
      return { ...state, error: action.payload, isLoading: false };
    case "user/loaded":
      return { ...state, user: action.payload, isLoading: false, error: null };
    case "user/logout":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function UserProvider({ children }) {
  const [{ user, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //This async function is for getting user data for the app the app
  async function loadUserData() {
    dispatch({ type: "loading" });
    try {
      const { data } = await fetchData(`${ROUTES.users}/logineduser`);
      dispatch({ type: "user/loaded", payload: data });
    } catch (err) {
      dispatch({ type: "error", payload: err });
    }
  }

  //This async function is for loging user in to the app
  async function login(obj) {
    dispatch({ type: "loading" });
    try {
      const { data } = await fetchData(`${ROUTES.auth}/login`, obj, "POST");
      dispatch({ type: "user/loaded", payload: data });
      return true;
    } catch (err) {
      dispatch({ type: "error", payload: err });
    }
  }

  //This async function is for Signing user up for the app
  async function signup(obj) {
    dispatch({ type: "loading" });
    try {
      const { data } = await fetchData(`${ROUTES.auth}/signup`, obj, "POST");
      dispatch({ type: "user/loaded", payload: data });
      return true;
    } catch (err) {
      dispatch({ type: "error", payload: err });
    }
  }

  // This async function is for  logging user out of the app
  async function logout() {
    dispatch({ type: "loading" });
    try {
      await fetchData(`${ROUTES.auth}/logout`, {}, "POST");
      dispatch({ type: "user/logout" });
      return true;
    } catch (err) {
      console.log(err, "AuthContext");
      dispatch({ type: "error", payload: err });
    }
  }

  return (
    <UserContext.Provider
      value={{ user, isLoading, error, login, logout, signup, loadUserData }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  return context;
}

export { UserProvider, useUser };
