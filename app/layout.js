import { Comic_Neue } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Loading from "./loading";
import { Suspense } from "react";
import ReduxProvider from "./lib/redux/redux-provider";
import { AuthUpdater } from "./UI/components/base";
import { ToastContainer } from "react-toastify";
import { Body } from "./UI/layout";
const comic = Comic_Neue({ subsets: ["latin"], weight: ["300", "400", "700"] });
import Head from "next/head";

export const metadata = {
  title: "Torny Town",
  description: "Enter the Arena, Leave a Legend!",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <Body style={comic.className}>
          <Suspense fallback={<Loading />}>
            <main className="flex flex-col ">{children}</main>
          </Suspense>
          <AuthUpdater />
          <ToastContainer />
        </Body>
      </ReduxProvider>
    </html>
  );
}
