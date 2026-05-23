'use client'
import { useState } from 'react'

export default function GameVaultMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const products = [
    {
      id: 1,
      game: 'Valorant',
      title: 'Conta Radiant + 12 Skins Premium',
      price: 'R$ 450',
      rank: 'Radiant',
      delivery: 'Imediata',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      game: 'Free Fire',
      title: 'Conta Angelical + Passe Elite',
      price: 'R$ 180',
      rank: 'Heroico',
      delivery: '5 minutos',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      game: 'Fortnite',
      title: 'Conta OG + Skins Raras',
      price: 'R$ 790',
      rank: 'OG',
      delivery: 'Imediata',
      image:
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 4,
      game: 'CS2',
      title: 'Conta Prime + Facas',
      price: 'R$ 980',
      rank: 'Global Elite',
      delivery: '10 minutos',
      image:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const categories = ['Todos', 'Valorant', 'Free Fire', 'Fortnite', 'CS2']

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter((p) => p.game === selectedCategory)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-3xl font-black text-blue-500">GameVault</h1>
            <p className="text-sm text-slate-400">Marketplace Gamer</p>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="#marketplace" className="text-slate-300 hover:text-white">
              Marketplace
            </a>
            <a href="#dashboard" className="text-slate-300 hover:text-white">
              Dashboard
            </a>
            <a href="#vantagens" className="text-slate-300 hover:text-white">
              Vantagens
            </a>
            <a href="#faq" className="text-slate-300 hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="flex gap-3">
            <button className="rounded-xl border border-slate-700 px-5 py-2 text-sm hover:bg-slate-800">
              Login
            </button>
            <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold hover:bg-blue-500">
              Registrar
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-cyan-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
              Plataforma segura • PIX • Escrow • Entrega automática
            </span>

            <h2 className="mt-8 text-6xl font-black leading-tight">
              Compre e venda
              <span className="text-blue-500"> contas gamer </span>
              sem risco.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">
              Marketplace completo para venda de contas, skins e itens digitais.
              Sistema moderno com proteção anti-golpe, checkout via PIX e
              painel administrativo.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold hover:bg-blue-500">
                Comprar Agora
              </button>

              <button className="rounded-2xl border border-slate-700 px-8 py-4 text-lg font-bold hover:bg-slate-800">
                Vender Conta
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-400">
              <span>✔ Entrega imediata</span>
              <span>✔ Proteção anti-fraude</span>
              <span>✔ Saques via PIX</span>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Painel do Vendedor</h3>
                  <p className="text-slate-400">Controle total das vendas</p>
                </div>

                <div className="rounded-xl bg-green-500/20 px-4 py-2 font-semibold text-green-400">
                  Online
                </div>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-slate-800 p-5">
                  <p className="text-sm text-slate-400">Vendas</p>
                  <h4 className="mt-3 text-3xl font-black">124</h4>
                </div>

                <div className="rounded-2xl bg-slate-800 p-5">
                  <p className="text-sm text-slate-400">Lucro</p>
                  <h4 className="mt-3 text-3xl font-black">R$12k</h4>
                </div>

                <div className="rounded-2xl bg-slate-800 p-5">
                  <p className="text-sm text-slate-400">Pedidos</p>
                  <h4 className="mt-3 text-3xl font-black">18</h4>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-bold">Pagamento Seguro</h3>
                <p className="mt-3 text-slate-400">
                  PIX • Cartão • Mercado Pago
                </p>
                <div className="mt-5 rounded-full bg-blue-500/10 px-4 py-2 text-center text-blue-400">
                  Escrow Ativado
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-bold">Suporte 24h</h3>
                <p className="mt-3 text-slate-400">
                  Atendimento rápido para compradores.
                </p>
                <div className="mt-5 rounded-full bg-green-500/10 px-4 py-2 text-center text-green-400">
                  Atendimento Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-4xl font-black">Marketplace</h2>
            <p className="mt-3 text-lg text-slate-400">
              Contas premium disponíveis agora.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-2xl px-5 py-3 font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-blue-600'
                    : 'border border-slate-700 bg-slate-900 hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    {product.game}
                  </span>

                  <span className="text-sm text-green-400">
                    {product.delivery}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold leading-snug">
                  {product.title}
                </h3>

                <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                  <span>Rank:</span>
                  <span>{product.rank}</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-3xl font-black text-blue-400">
                    {product.price}
                  </span>

                  <button className="rounded-xl bg-blue-600 px-5 py-3 font-bold hover:bg-blue-500">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="dashboard"
        className="border-y border-slate-800 bg-slate-900"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black">Dashboard Administrativo</h2>
            <p className="mt-4 text-lg text-slate-400">
              Controle total da plataforma em tempo real.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
              <p className="text-slate-400">Usuários</p>
              <h3 className="mt-4 text-5xl font-black">2.4k</h3>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
              <p className="text-slate-400">Pedidos</p>
              <h3 className="mt-4 text-5xl font-black">845</h3>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
              <p className="text-slate-400">Receita</p>
              <h3 className="mt-4 text-5xl font-black">R$92k</h3>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">
              <p className="text-slate-400">Disputas</p>
              <h3 className="mt-4 text-5xl font-black">12</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="vantagens" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black">Vantagens da Plataforma</h2>
          <p className="mt-4 text-lg text-slate-400">
            Tudo que você precisa para vender com segurança.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">Proteção Anti-Golpe</h3>
            <p className="mt-4 leading-relaxed text-slate-400">
              Sistema escrow que protege comprador e vendedor automaticamente.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">Checkout PIX</h3>
            <p className="mt-4 leading-relaxed text-slate-400">
              Pagamentos rápidos com aprovação instantânea.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">Painel Completo</h3>
            <p className="mt-4 leading-relaxed text-slate-400">
              Controle total de anúncios, pedidos e usuários.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-black">FAQ</h2>
            <p className="mt-4 text-lg text-slate-400">
              Perguntas frequentes dos usuários.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-xl font-bold">
                Como funciona a proteção escrow?
              </h3>
              <p className="mt-3 text-slate-400">
                O pagamento fica protegido até o comprador confirmar a entrega.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-xl font-bold">
                Posso vender minhas contas?
              </h3>
              <p className="mt-3 text-slate-400">
                Sim, qualquer usuário pode anunciar após criar conta.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-xl font-bold">
                Quais métodos de pagamento existem?
              </h3>
              <p className="mt-3 text-slate-400">
                PIX, cartão de crédito e Mercado Pago.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">
          <div>
            <h4 className="text-2xl font-black text-blue-500">GameVault</h4>
            <p className="mt-2 text-sm text-slate-500">
              Marketplace gamer profissional.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#">Termos</a>
            <a href="#">Privacidade</a>
            <a href="#">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
