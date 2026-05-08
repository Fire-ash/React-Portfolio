import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-28 bg-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
            Backend Developer · Problem Solver
          </p>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
            Building systems <br />
            that scale with clarity.
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-10">
            I’m Udit Bisht, a Computer Science student focused on backend engineering,
            scalable application design, and problem solving through algorithms,
            systems thinking, and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3 bg-black text-white rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
            >
              Contact
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-gray-500">
            <div>
              <p className="text-2xl font-semibold text-black">130+</p>
              <p>LeetCode Problems</p>
            </div>

            <div className="w-px h-10 bg-gray-200"></div>

            <div>
              <p className="text-2xl font-semibold text-black">3+</p>
              <p>Projects Built</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-green-100/40 to-blue-100/40 blur-3xl rounded-full"></div>

          <div className="relative w-full h-[420px] rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden flex items-center justify-center">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute"
            >
              <svg
                width="420"
                height="420"
                viewBox="0 0 200 200"
                className="opacity-70"
              >
                <g stroke="#10b981" strokeWidth="0.5" fill="none">

                  <rect x="20" y="20" width="40" height="40" />
                  <rect x="80" y="20" width="40" height="40" />
                  <rect x="140" y="20" width="40" height="40" />

                  <rect x="50" y="70" width="40" height="40" />
                  <rect x="110" y="70" width="40" height="40" />

                  <rect x="20" y="120" width="40" height="40" />
                  <rect x="80" y="120" width="40" height="40" />
                  <rect x="140" y="120" width="40" height="40" />

                </g>
              </svg>
            </motion.div>

            <div className="relative z-10 border border-gray-200 rounded-2xl bg-black text-green-400 p-6 w-[300px] shadow-2xl">
              <p className="text-xs text-gray-500 mb-4">
                system.log
              </p>

              <div className="space-y-3 text-sm font-mono">
                <p>{"> initializing backend..."}</p>
                <p>{"> loading modules..."}</p>
                <p>{"> solving problems..."}</p>
                <p className="text-white">{"> status: active"}</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
