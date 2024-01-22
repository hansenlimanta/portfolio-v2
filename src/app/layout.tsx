import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Hansen Limanta",
  description: "Hansen Limanta Web Portfolio build with Nextjs",
  keywords:
    "web development, programming, portfolio, react, hansen limanta, frontend",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-pt-20 scroll-smooth selection:bg-teal-300 selection:text-slate-900"
    >
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
