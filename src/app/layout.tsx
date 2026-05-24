import localFont from 'next/font/local'

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";


import "./app.css";
import Header from '@/components/Header';

import ViewCanvas from "@/components/ViewCanvas";
import Footer from '@/components/Footer';

const drukcyr = localFont({
  src: '../../public/fonts/DrukCyr-Bold.woff2',
  display: 'swap',
  weight: "100 900",
  variable: "--font--drukkyr",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={drukcyr.variable}>
      <body className='overflow-x-hidden bg-[#141414]'>
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
      </body >
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
