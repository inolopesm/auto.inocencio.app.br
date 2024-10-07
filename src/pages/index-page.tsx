import {
  ChartLineUp as ChartLineUpIcon,
  Package as PackageIcon,
  Plug as PlugIcon,
  WhatsappLogo as WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export function Component() {
  return (
    <>
      {createPortal(
        <>
          {/* eslint-disable prettier/prettier */}
          <meta content="Simplifique a gestão da sua loja de automóveis. Gerencie a entrada e saída de veículos e integre suas operações com plataformas como OLX e Instagram para maximizar suas vendas." name="description" />
          <meta content="gestão de veículos, gerenciamento de automóveis, integração com OLX, integração com Instagram, loja de automóveis, inoauto, plataforma para revenda de carros, software para lojas de veículos, controle de estoque automotivo, anúncios de carros, gerenciar anúncios de carros, vender carros online, gestão de entrada e saída de veículos" name="keywords" />
          <meta content="summary" name="twitter:card" />
          <meta content="inoauto" name="twitter:title" />
          <meta content="Simplifique a entrada e saída de veículos na sua loja e aumente suas vendas com integração a OLX e Instagram." name="twitter:description" />
          <meta content="inoauto" property="og:title" />
          <meta content="Facilite a gestão da sua loja de automóveis e integre suas operações a plataformas de anúncios como OLX e Instagram." property="og:description" />
          <meta content="website" property="og:type" />
          <link href="/manifest.json" rel="manifest" />
          {/* eslint-enable prettier/prettier */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org/",
                "@type": "WebSite",
                "name": "inoauto",
                "description": "Simplifique a entrada e saída de veículos na sua loja e aumente suas vendas com integração a OLX e Instagram.",
                "url": "https://auto.inocencio.app.br/",
              }
            `}
          </script>
        </>,
        window.document.head,
      )}
      <div className="flex min-h-dvh flex-col bg-gradient-to-tr from-primary/10 to-transparent">
        <header className="mx-auto flex h-14 w-full max-w-7xl items-center px-4 md:px-6">
          <Link className="font-serif text-2xl" to="/">
            <span className="text-primary">auto</span>ino
          </Link>
          <Button className="ml-auto" variant="ghost" asChild>
            <Link to="/admin">Admin</Link>
          </Button>
        </header>
        <main className="grow">
          <section className="px-4 md:px-6">
            <div className="mx-auto flex max-w-7xl py-20">
              <div className="text-center md:flex md:w-1/2 md:flex-col md:justify-center md:text-left">
                <h1 className="font-serif text-4xl">
                  Sistema para lojas de veículos
                </h1>
                <p className="mt-2 max-w-2xl">
                  Acompanhe facilmente todo o fluxo de veículos e integre suas
                  operações com plataformas como OLX e Instagram. Tudo em um
                  único lugar.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <a
                      href="https://wa.me/5583991957887?text=Vim%20do%20site%20auto.inocencio.app.br"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <WhatsappLogoIcon className="size-5" />
                      Agendar demonstração gratuita
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hidden h-[30rem] overflow-x-hidden md:flex md:w-1/2 md:justify-end">
                <img
                  alt="um homem andando e usando um telefone na frente de alguns carros"
                  className="rounded opacity-75 duration-1000 animate-in slide-in-from-right-full"
                  loading="lazy"
                  src="/assets/images/henry-co-fMBRKrkp37k-unsplash.webp"
                />
              </div>
            </div>
          </section>
          <section className="mx-auto w-full max-w-7xl px-4 py-20 md:px-6">
            <h2 className="font-serif text-2xl">Principais Funcionalidades</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
                <div className="flex aspect-[2/1] items-center justify-center rounded-t bg-gray-200 dark:bg-gray-800">
                  <PackageIcon className="size-20 text-primary" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">
                    Gerenciamento Eficiente de Veículos
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Tenha controle total sobre a entrada e saída de veículos em
                    sua loja, desde a chegada até a venda.
                  </p>
                </div>
              </div>
              <div className="rounded border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
                <div className="flex aspect-[2/1] items-center justify-center rounded-t bg-gray-200 dark:bg-gray-800">
                  <PlugIcon className="size-20 text-primary" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Integrações Poderosas</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Conecte sua loja diretamente a plataformas como OLX e
                    Instagram para divulgar seus veículos automaticamente e
                    alcançar mais clientes.
                  </p>
                </div>
              </div>
              <div className="rounded border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
                <div className="flex aspect-[2/1] items-center justify-center rounded-t bg-gray-200 dark:bg-gray-800">
                  <ChartLineUpIcon className="size-20 text-primary" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Visão Geral em Tempo Real</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Veja todos os veículos, históricos de movimentação e status
                    de anúncios em um painel simples e fácil de usar.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="px-4 py-20 md:px-6">
            <div className="mx-auto max-w-7xl">
              <h2 className="font-serif text-2xl">Veículos Anunciados</h2>
              <p className="mt-6 text-gray-400">Nenhum anúncio encontrado</p>
            </div>
          </section>
        </main>
        <footer className="mx-auto flex h-16 items-center px-4 text-center text-sm text-gray-600 md:px-6 dark:text-gray-400">
          Este site é mantido e operado por MATHEUS INOCENCIO LOPES -
          55.740.093/0001-82
        </footer>
      </div>
    </>
  );
}
