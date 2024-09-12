import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux-provider";
import store from "@/store/store";
import { Navbar } from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard | Geektrust",
  description: "Geekturst admin-dashboard assignment",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
     
      <html lang='en'>
         <head><link rel="icon" href="/favicon.png" sizes="any" /></head>
        <body className={inter.className}><Navbar/>{children}</body>
      </html>
    </ReduxProvider>
  );
}
