import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // Título da página
  title: "Curso Trader Lucas Oliveira - Transforme sua Vida Financeira",

  // Descrição da página
  description: "Aprenda a operar no mercado de opções binárias com o trader Lucas Oliveira e alcance liberdade financeira. Curso completo e prático para iniciantes e avançados.",

  // Palavras-chave para SEO
  keywords: ["curso trader", "Lucas Oliveira", "opções binárias", "liberdade financeira", "trader iniciante", "mercado financeiro"],

  // Gerador da página
  generator: "Next.js",

  // Nome do aplicativo
  applicationName: "Lucas Oliveira Curso Trader",

  // Autores do conteúdo
  authors: [{ name: "Lucas Oliveira", url: "https://lucasoliveira.com" }],

  // Referência do conteúdo (de onde foi carregado)
  referrer: "no-referrer",

  // Controla a política de exibição de snippets
  robots: {
    index: true, // Permite que a página seja indexada
    follow: true, // Segue links na página
    noimageindex: false, // Permite indexação de imagens
    nocache: false, // Permite o cacheamento da página
  },

  // Define o manifesto da web app
  manifest: "/manifest.webmanifest",

  // Especifica a cor do tema para navegadores móveis
  themeColor: "#008080", // Cor relacionada ao mercado financeiro

  // Especifica a política de navegação anterior/próximo
  colorScheme: "dark light", // Suporte para modo claro e escuro

  // Define ícones da página
  icons: {
    icon: "/favicon.ico", // Favicon padrão
    apple: "/apple-touch-icon.png", // Ícone para dispositivos iOS
    shortcut: "/shortcut-icon.png", // Ícone para atalhos
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#008080" },
    ],
  },

  // Propriedades OpenGraph (usadas em redes sociais)
  openGraph: {
    title: "Curso Trader Lucas Oliveira",
    description: "Transforme sua vida financeira com o curso de opções binárias do Lucas Oliveira.",
    url: "https://lucasoliveira.com",
    siteName: "Lucas Oliveira Trader",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://lucasoliveira.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Curso Trader Lucas Oliveira",
      },
    ],
  },

  // Propriedades do Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@lucasoliveira",
    creator: "@lucasoliveira",
    title: "Curso Trader Lucas Oliveira",
    description: "Aprenda a operar no mercado de opções binárias com o trader Lucas Oliveira.",
    images: ["https://lucasoliveira.com/twitter-image.png"],
  },

  // URL canônica
  alternates: {
    canonical: "https://lucasoliveira.com",
    languages: {
      "en-US": "https://lucasoliveira.com/en",
      "pt-BR": "https://lucasoliveira.com/pt-br",
    },
  },

  // Propriedades de navegação (páginas anteriores e próximas)
  archives: "https://lucasoliveira.com/arquivo",
  assets: "https://lucasoliveira.com/assets",
  category: "Educação Financeira",

  // Propriedades da viewport (responsividade)
  viewport: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, viewport-fit=cover",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
