import Nav from "../components/nav";
import Footer from "../components/footer";
import "./globals.css";
import { Inter, Roboto_Mono, Caveat } from "next/font/google";

const canveat = Caveat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-canveat",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Events In Kandy",
  description: "Events In Kandy - Buy your Tickets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${canveat.variable} ${inter.className} font-inter bg-slate-900 min-h-screen relative text-slate-100 flex flex-col`}
      >
        <Nav />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
