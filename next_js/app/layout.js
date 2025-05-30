import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./script_CSS/globals.css";
import Header from './components/header';
import Footer from "./components/footer";
import Search from "./components/search";
import "./script_CSS/style.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="bg-secondary">
          <Header />
          <Search />
          {children}
          <Footer />
        </div>
      
      </body>
      
    </html>
  );
}
