import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// components
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

// // medusa API
// import { MedusaProvider } from "medusa-react";
// import { QueryClient } from "@tanstack/react-query";

// const queryClient = new QueryClient();

export const metadata = {
  title: "Storefront",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en">
      <body className="grid h-screen grid-rows-[auto_1fr_auto]">
        {/* <MedusaProvider
          queryClientProviderProps={{ client: queryClient }}
          baseUrl="http://localhost:9000"
        > */}
        <Header />
        <main className="bg-blue-200">{children}</main>
        <Footer />
        {/* </MedusaProvider> */}
      </body>
    </html>
  );
}
