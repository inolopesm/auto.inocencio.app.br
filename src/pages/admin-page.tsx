import { Cake as CakeIcon } from "@phosphor-icons/react/dist/ssr";
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
      <div>Dashboard</div>
      <div className="grid grid-cols-5">
        <div className="grid gap-3 rounded-md border border-gray-300 p-3 text-center">
          <div className="text-sm font-medium text-gray-600">
            Aniversariantes do mês
          </div>
          <CakeIcon className="mx-auto size-10 text-primary" />
          <div className="text-4xl font-semibold">0</div>
          <div className="text-xs text-gray-600">Clientes cadastrados: 0</div>
        </div>
        <div>Veículos em estoque: -1 de -1 próprios e -1 consignados</div>
        <div>Média de dias do estoque: -1</div>
        <div>Vendas mês atual: -1 comparado com -1 do mês anterior</div>
        <div>Avaliações pendentes: -1 (Avaliações não concluídas)</div>
      </div>
      <div>
        Cadastros recentes (veiculo, placa, ano): V1 / P1 / A1, V2 / P2 / A2...
        V5 / P5 / A5
      </div>
      <div>
        Tempo no estoque (período x quantidade): -1 até 30 dias, -1 entre 31 e
        60 dias, -1 entre 91 e 120 dias, -1 mais que 120 dias
      </div>
      <div>
        Ranking vendedores (vendedor x mes atual x mes anterior): fulano / -1 /
        -1, sicrano / -1 / -1, beltrano / -1 / -1
      </div>
      <div>
        Comunicador interno (use para conversar com os usuários do sistema da
        sua loja): [Digite sua mensagem aqui] [Enviar] [Atualizar] [Pesquisar]
      </div>
      <div>
        Alertas (tarefas / calendário) (kanban): [digite o nome de um
        responsável ou descrição] [status] [pesquisar] [incluir: responsavel*,
        status*, email para, descricao*, marcador]
      </div>
    </div>
  );
}
