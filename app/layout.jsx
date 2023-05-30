import "./globals.css";
import { Raleway } from "next/font/google";
import Header from "./components/Header";

import { Providers } from './GlobalRedux/provider';

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Home | Music.World",
    template: "%s | Music.World",
  },
  description: "Explore the world of music with Music.World",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body className={raleway.className}>
          <Providers>
            <Header />
            {children}
          </Providers>
      </body>
    </html>
  )
}
