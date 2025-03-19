import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Neelabh Studio',
  description: 'Studio Management System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white flex flex-col`}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 pt-24 pb-16">{children}</main>
        <Footer className="mt-auto" />
      </body>
    </html>
  );
}
