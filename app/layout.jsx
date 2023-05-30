import "./globals.css";
import { Raleway } from "next/font/google";
import Header from "./components/Header";

import { Providers } from './GlobalRedux/provider';

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
          <Providers>
            <Header />
            {children}
          </Providers>
      </body>
    </html>
  )
}
