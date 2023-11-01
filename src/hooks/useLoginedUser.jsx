import { useEffect } from "react";
import { useUser } from "../contexts/AuthContext";

function useLoginedUser() {
  const { loadUserData, user, isLoading, error } = useUser();
  useEffect(function () {
    if (!user) {
      (async function () {
        await loadUserData();
      })();
    }
  }, []);
  return [user, isLoading, error];
}

export default useLoginedUser;
