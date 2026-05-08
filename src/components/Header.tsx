import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = ["about", "skills", "projects", "education", "contact"];

    const onScroll = () => {
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const top = section.offsetTop - 140;

        if (window.scrollY >= top) {
          current = id;
        }
      });

      setActive(current);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    "about",
    "skills",
    "projects",
    "education",
    "contact"
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-black hover:opacity-70 transition"
        >
          Portfolio
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">

          {links.map((item) => {
            const isActive = active === item;

            return (
              <a
                key={item}
                href={`#${item}`}
                className={`relative transition-all duration-300 ${
                  isActive
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-black transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            );
          })}

        </nav>

        <div className="flex items-center gap-4">

          <a
            href="https://github.com/Fire-ash"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-black text-white text-sm hover:opacity-80 transition-all duration-300"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </motion.header>
  );
};

export default Header;
