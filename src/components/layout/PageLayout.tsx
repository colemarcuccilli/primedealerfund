"use client";

import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
