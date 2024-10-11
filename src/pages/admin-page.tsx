import {
  Cake as CakeIcon,
  CalendarDots as CalendarDotsIcon,
  CarProfile as CarProfileIcon,
  ChartLine as ChartLineIcon,
  ChatDots as ChatDotsIcon,
  ClipboardText as ClipboardTextIcon,
  Money as MoneyIcon,
  Question as QuestionIcon,
} from "@phosphor-icons/react/dist/ssr";
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
      <div className="font-serif text-2xl">Dashboard</div>
      <div className="mt-6 grid grid-cols-6 gap-4">
        <div className="grid gap-3 rounded-md border border-gray-300 p-3 text-center">
          <div className="text-sm font-medium text-gray-600">
            Aniversariantes do mês
          </div>
          <CakeIcon className="mx-auto size-10 text-primary" />
          <div className="text-4xl font-semibold">0</div>
          <div className="text-xs text-gray-600">Clientes cadastrados: 0</div>
        </div>
        <div className="grid gap-3 rounded-md border border-gray-300 p-3 text-center">
          <div className="text-sm font-medium text-gray-600">
            Veículos no estoque
          </div>
          <CarProfileIcon className="mx-auto size-10 text-primary" />
          <div className="text-4xl font-semibold">0</div>
          <div className="text-xs text-gray-600">Próprios/Consignados: 0/0</div>
        </div>
        <div className="grid gap-3 rounded-md border border-gray-300 p-3 text-center">
          <div className="text-sm font-medium text-gray-600">
            Média de dias do estoque
          </div>
          <CalendarDotsIcon className="mx-auto size-10 text-primary" />
          <div className="text-4xl font-semibold">0</div>
          <div className="h-5 text-xs text-gray-600" />
        </div>
        <div className="grid gap-3 rounded-md border border-gray-300 p-3 text-center">
          <div className="text-sm font-medium text-gray-600">
            Vendas mês atual
          </div>
          <MoneyIcon className="mx-auto size-10 text-primary" />
          <div className="text-4xl font-semibold">0</div>
          <div className="text-xs text-gray-600">Vendas mês anterior: 0</div>
        </div>
        <div className="grid gap-3 rounded-md border border-gray-300 p-3 text-center">
          <div className="text-sm font-medium text-gray-600">
            Avaliações pendentes
          </div>
          <ClipboardTextIcon className="mx-auto size-10 text-primary" />
          <div className="text-4xl font-semibold">0</div>
          <div className="text-xs text-gray-600">Avaliações não concluídas</div>
        </div>
        <div className="grid gap-3 rounded-md border border-gray-300 p-3 text-sm">
          <div className="text-center font-medium  text-gray-600">Dúvidas?</div>
          <div className="grid gap-0.5">
            <button
              className="inline-flex gap-1 text-left font-medium hover:underline"
              type="button"
            >
              <QuestionIcon className="mt-0.5 size-4 shrink-0" />
              Vídeos de treinamento
            </button>
            <button
              className="inline-flex gap-1 text-left font-medium hover:underline"
              type="button"
            >
              <ChatDotsIcon className="mt-0.5 size-4 shrink-0" />
              Abrir chamado
            </button>
            <button
              className="inline-flex gap-1 text-left font-medium hover:underline"
              type="button"
            >
              <ChartLineIcon className="mt-0.5 size-4 shrink-0" />
              Dashboard Geral
            </button>
            <button
              className="inline-flex gap-1 text-left font-medium hover:underline"
              type="button"
            >
              <CalendarDotsIcon className="mt-0.5 size-4 shrink-0" />
              Treinamento Personalizado 30 min
            </button>
          </div>
        </div>
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
