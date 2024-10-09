import { Outlet } from "react-router-dom";

export function Component() {
  return (
    <div className="flex min-h-dvh flex-col">
      <div>Cabeçalho</div>
      <div className="grow">
        <Outlet />
      </div>
      <div>Rodapé</div>
    </div>
  );
}
