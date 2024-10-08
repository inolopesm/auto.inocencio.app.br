import { createContext, useContext, useMemo, useState } from "react";
import { getCookie } from "../utils/cookie";

interface AuthContextValue {
  accessToken: string;
  login: (accessToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext(null as AuthContextValue | null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState(
    () => getCookie("accessToken") ?? "",
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      accessToken,
      login: (token) => {
        window.document.cookie = `accessToken=${token};samesite=strict;path=/;${import.meta.env.PROD ? ";secure" : ""}`;
        setAccessToken(token);
      },
      logout: () => {
        window.document.cookie = `accessToken=;max-age=0;samesite=strict;path=/;${import.meta.env.PROD ? ";secure" : ""}`;
        setAccessToken("");
      },
    }),
    [accessToken],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);

  if (value === null) {
    throw new Error("Please add AuthProvider in the tree");
  }

  return value;
}
