import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-gray-100 bg-grid">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
              About
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Backend-focused developer building scalable and efficient systems.
            </h2>
          </div>

          <div className="space-y-6">

            <p className="text-lg text-gray-600 leading-relaxed">
              I’m Udit Bisht, a Computer Science student with strong interest in
              backend engineering, systems design, and algorithmic problem solving.
              I enjoy building practical applications that combine clean architecture
              with efficient logic.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              My current focus includes backend development using Node.js and Express,
              exploring scalable system design concepts, and strengthening problem-solving
              skills through Data Structures & Algorithms.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">

              <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl font-bold text-black mb-2">
                  130+
                </p>

                <p className="text-gray-500 text-sm">
                  LeetCode Problems Solved
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl font-bold text-black mb-2">
                  3+
                </p>

                <p className="text-gray-500 text-sm">
                  Projects Built
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
