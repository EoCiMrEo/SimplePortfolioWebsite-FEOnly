import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { Analytics } from "@vercel/analytics/next";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="fixed top-4 left-4 z-[9999] group cursor-pointer p-2">
        <a
          href="#hero"
          className="inline-block px-2 py-1 rounded-md backdrop-blur-sm bg-black/20 hover:bg-green-900 transition-all duration-300 hover:scale-110"
        >
          <h1 className="text-white font-bold text-sm md:text-base lg:text-lg hover:text-purple-400 transition-all duration-300 transform hover:drop-shadow-lg text-center whitespace-nowrap sm:hidden">
            Edward Phuong
          </h1>
        </a>
      </div>

      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <Experiences />
        <Approach />
        <Footer />
        <Analytics />
      </div>
    </main>
  );
}
