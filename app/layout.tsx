import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Work_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const body = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ofada Heaven — 24-hour ofada rice & karaoke in Surulere, Lagos",
  description:
    "Ofada rice, ofada sauce, chicken and chips, Oreo milkshakes and karaoke nights. Open 24 hours at 62 Adeniran Ogunsanya Street, Surulere, Lagos. Order on WhatsApp: 0803 629 5626.",
  openGraph: {
    title: "Ofada Heaven — open 24 hours in Surulere",
    description:
      "Ofada at 2am, the mic at 3. Comfort food and karaoke nights at 62 Adeniran Ogunsanya Street, Surulere, Lagos.",
    images: ["/images/ofada-rice-plate.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff5e8" },
    { media: "(prefers-color-scheme: dark)", color: "#141110" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
