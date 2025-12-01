import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hola",
  description: "Una cálida bienvenida en la web."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
