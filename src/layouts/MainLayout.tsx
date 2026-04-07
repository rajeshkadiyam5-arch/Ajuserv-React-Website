import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MainLayout.scss";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="main-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
