import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Adjusted padding: 38px (announcement bar) + 80px (header) = 118px, plus some extra */}
      <main className="flex-1 pt-[138px]">{children}</main>
      <Footer />
    </div>
  );
}