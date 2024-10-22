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
  title: "Curso Trader Gabriel Mozaner - Transforme sua Vida Financeira",

  // Descrição da página
  description: "Aprenda a operar no mercado de opções binárias com o trader Gabriel Mozaner e alcance liberdade financeira. Curso completo e prático para iniciantes e avançados.",

  // Palavras-chave para SEO
  keywords: ["curso trader", "Gabriel Mozaner", "opções binárias", "liberdade financeira", "trader iniciante", "mercado financeiro"],

  // Gerador da página
  generator: "Next.js",

  // Nome do aplicativo
  applicationName: "Gabriel Mozaner Curso Trader",

  // Autores do conteúdo
  authors: [{ name: "Gabriel Mozaner", url: "https://gabrielmozaner.com" }],

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
    title: "Curso Trader Gabriel Mozaner",
    description: "Transforme sua vida financeira com o curso de opções binárias do Gabriel Mozaner.",
    url: "https://gabrielmozaner.com",
    siteName: "Gabriel Mozaner Trader",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://gabrielmozaner.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Curso Trader Gabriel Mozaner",
      },
    ],
  },

  // Propriedades do Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@gabrielmozaner",
    creator: "@gabrielmozaner",
    title: "Curso Trader Gabriel Mozaner",
    description: "Aprenda a operar no mercado de opções binárias com o trader Gabriel Mozaner.",
    images: ["https://gabrielmozaner.com/twitter-image.png"],
  },

  // URL canônica
  alternates: {
    canonical: "https://gabrielmozaner.com",
    languages: {
      "en-US": "https://gabrielmozaner.com/en",
      "pt-BR": "https://gabrielmozaner.com/pt-br",
    },
  },

  // Propriedades de navegação (páginas anteriores e próximas)
  archives: "https://gabrielmozaner.com/arquivo",
  assets: "https://gabrielmozaner.com/assets",
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
