import Navbar from "./components/navbar";

import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";
import Hobbies from "./hobbies";
import Footer from "./components/footer";

export default function Main() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Navbar /> */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Home />
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Hoobies /> */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
