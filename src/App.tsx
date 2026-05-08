import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.08),transparent_30%)]"></div>

      <Header />

      <main className="relative">

        <Hero />

        <div className="max-w-7xl mx-auto px-4">
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>

      </main>

      <Footer />

    </div>
  );
}

export default App;
