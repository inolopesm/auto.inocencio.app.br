import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useMemo, useState } from "react";
import { z } from "zod";
import { getCookie, removeCookie, setCookie } from "../utils/cookie";

const AccessTokenSchema = z.object({
  sub: z.string(),
});

type AccessTokenDTO = z.infer<typeof AccessTokenSchema>;

interface AuthContextValue {
  accessToken: { encoded: string; decoded: AccessTokenDTO };
  login: (accessToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext(null as AuthContextValue | null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [encoded, setEncoded] = useState(() => getCookie("accessToken") ?? "");

  const value = useMemo<AuthContextValue>(
    () => ({
      accessToken: {
        encoded: encoded,
        decoded: encoded
          ? AccessTokenSchema.parse(jwtDecode(encoded))
          : { sub: "" },
      },
      login: (accessToken) => {
        setCookie("accessToken", accessToken);
        setEncoded(accessToken);
      },
      logout: () => {
        removeCookie("accessToken");
        setEncoded("");
      },
    }),
    [encoded],
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
