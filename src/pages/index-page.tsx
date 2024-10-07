import { createPortal } from "react-dom";

export function Component() {
  return (
    <>
      {createPortal(
        <>
          <meta name="description" content="Simplifique a gestão da sua loja de automóveis. Gerencie a entrada e saída de veículos e integre suas operações com plataformas como OLX e Instagram para maximizar suas vendas." />
          <meta name="keywords" content="gestão de veículos, gerenciamento de automóveis, integração com OLX, integração com Instagram, loja de automóveis, inoauto, plataforma para revenda de carros, software para lojas de veículos, controle de estoque automotivo, anúncios de carros, gerenciar anúncios de carros, vender carros online, gestão de entrada e saída de veículos" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="inoauto" />
          <meta name="twitter:description" content="Simplifique a entrada e saída de veículos na sua loja e aumente suas vendas com integração a OLX e Instagram." />
          <meta property="og:title" content="inoauto" />
          <meta property="og:description" content="Facilite a gestão da sua loja de automóveis e integre suas operações a plataformas de anúncios como OLX e Instagram." />
          <meta property="og:type" content="website" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
          <link rel="stylesheet" href="/assets/css/bootstrap.css" />
          <link rel="stylesheet" href="/assets/css/co-headline.css" />
          <link rel="manifest" href="/manifest.json" />
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
      <div className="min-vh-100 d-flex flex-column">
        <header className="navbar">
          <div className="container">
            <a className="navbar-brand font-co-headline" href="/">
              <span className="text-primary">auto</span>ino
            </a>
            <a
              className="btn btn-link"
              href="https://admin.auto.inocencio.app.br"
              target="_blank"
            >
              Admin
            </a>
          </div>
        </header>
        <main className="flex-grow-1">
          <section className="bg-primary bg-opacity-10 py-5">
            <div className="container">
              <div className="row">
                <div className="col d-flex flex-column justify-content-center py-5">
                  <h1>Sistema para lojas de veículos</h1>
                  <p>
                    Acompanhe facilmente todo o fluxo de veículos e integre suas
                    operações com plataformas como OLX e Instagram. Tudo em um
                    único lugar.
                  </p>
                  <div>
                    <a
                      className="btn btn-primary"
                      href="https://wa.me/5583991957887?text=Vim%20do%20site%20auto.inocencio.app.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi-whatsapp d-inline-block me-1" />
                      Agendar demonstração gratuita
                    </a>
                  </div>
                </div>
                <div className="col d-none d-md-flex justify-content-end">
                  <img
                    className="img-fluid border border-primary rounded"
                    src="/assets/images/swansway-motor-group-Tzlck2eqdBA-unsplash-small.webp"
                    alt="uma pessoa filmando carros com seu celular"
                    loading="lazy"
                    style={{ maxHeight: "480px" }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            <div className="container">
              <h2 className="mb-4">Principais Funcionalidades</h2>
              <div className="d-grid gap-3 grid-cols-md-3">
                <div className="card">
                  <div
                    className="card-img-top bg-secondary bg-opacity-10 d-flex justify-content-center align-items-center"
                    style={{ aspectRatio: "2 / 1" }}
                  >
                    <i className="bi-box-seam text-primary" style={{ fontSize: "5rem" }} />
                  </div>
                  <div className="card-body">
                    <h3 className="h5 card-title">
                      Gerenciamento Eficiente de Veículos
                    </h3>
                    <p className="card-text">
                      Tenha controle total sobre a entrada e saída de veículos
                      em sua loja, desde a chegada até a venda.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-img-top bg-secondary bg-opacity-10 d-flex justify-content-center align-items-center"
                    style={{ aspectRatio: "2 / 1" }}
                  >
                    <i className="bi-plug text-primary" style={{ fontSize: "5rem" }} />
                  </div>
                  <div className="card-body">
                    <h3 className="h5 card-title">Integrações Poderosas</h3>
                    <p className="card-text">
                      Conecte sua loja diretamente a plataformas como OLX e
                      Instagram para divulgar seus veículos automaticamente e
                      alcançar mais clientes.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="card-img-top bg-secondary bg-opacity-10 d-flex justify-content-center align-items-center"
                    style={{ aspectRatio: "2 / 1" }}
                  >
                    <i className="bi-graph-up-arrow text-primary" style={{ fontSize: "5rem" }} />
                  </div>
                  <div className="card-body">
                    <h3 className="h5 card-title">Visão Geral em Tempo Real</h3>
                    <p className="card-text">
                      Veja todos os veículos, históricos de movimentação e
                      status de anúncios em um painel simples e fácil de usar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5 bg-primary bg-opacity-10">
            <div className="container">
              <h2 className="mb-4">Veículos Anunciados</h2>
              <p>Nenhum anúncio encontrado</p>
            </div>
          </section>
        </main>
        <footer className="py-3">
          <p className="container mb-0">
            Este site é mantido e operado por MATHEUS INOCENCIO LOPES -
            55.740.093/0001-82
          </p>
        </footer>
      </div>
    </>
  );
}
