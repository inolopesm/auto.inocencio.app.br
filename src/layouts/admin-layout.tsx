import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

export function Component() {
  const { accessToken } = useAuth();

  return (
    <div className="flex min-h-dvh flex-col">
      <div className="px-4 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center py-3">
          <div className="mr-auto font-serif text-xl">inoauto</div>
          <div className="">{accessToken.decoded.sub}</div>
        </div>
      </div>
      <div className="grow px-4 py-10 md:px-6">
        <Outlet />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-3 text-center text-sm text-gray-600 md:px-6 dark:text-gray-400">
        Este site é mantido e operado por MATHEUS INOCENCIO LOPES -
        55.740.093/0001-82
      </div>
    </div>
  );
}
