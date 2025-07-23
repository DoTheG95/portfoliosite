'use client';
import Home from "../pages/home";
import Footer from "../components/footer";

export default function Main() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-rows-[auto_1fr_auto] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Home />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
