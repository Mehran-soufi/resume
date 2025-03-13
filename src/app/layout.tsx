import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "وب سایت شخصی مهران صوفی",
  description: "مهندس کامپیوتر و برنامه نویس",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
