import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-24 border-t border-gray-100 overflow-hidden bg-white">
      
      <div className="absolute inset-0 bg-grid opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 flex flex-col items-center text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Let’s build something meaningful.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-10"
        >
          Open to collaborations, backend projects, and opportunities
          focused on scalable systems and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >

          <a
            href="https://github.com/Fire-ash"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-2xl border border-gray-200 bg-white hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-2xl bg-black text-white hover:opacity-80 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            LinkedIn
          </a>

          <a
            href="mailto:youremail@example.com"
            className="px-6 py-3 rounded-2xl border border-gray-200 bg-white hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            Email
          </a>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 220 }}
          className="px-8 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm text-sm text-gray-600 hover:shadow-xl transition-all duration-300 cursor-default"
        >
          Built with React · Vite · Tailwind · Framer Motion
        </motion.div>

        <p className="mt-10 text-sm text-gray-400">
          © {new Date().getFullYear()} Udit Bisht
        </p>

      </div>

    </footer>
  );
};

export default Footer;
