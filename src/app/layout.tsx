import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vivek Ray | CSE Undergraduate Portfolio",
  description:
    "CSE undergraduate building software systems, interactive tools, and experiments one project at a time.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
