import { Manrope, Noto_Sans_Devanagari } from 'next/font/google';
import { Header, BodyWrapper, Footer } from '@/components/layout';
import { LanguageProvider } from '@/context/LanguageContext';
import { SITE_CONFIG } from '@/config/site.config';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-devanagari',
});

export const metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${devanagari.variable} font-sans`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#11284A" />
      </head>
      <body className="bg-dpxBg text-dpxNavy antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <BodyWrapper>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </BodyWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
