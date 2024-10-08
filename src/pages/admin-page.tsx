import { useEffect } from "react";
import { api } from "../lib/api";

export function Component() {
  useEffect(() => {
    api("/dashboard")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>autenticado</div>
    </div>
  );
}
