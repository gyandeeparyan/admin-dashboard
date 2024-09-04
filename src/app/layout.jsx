import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux-provider";
import store from "@/store/store";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard | Geektrust",
  description: "Geekturst admin-dashboard assignment",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
     
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ReduxProvider>
  );
}
