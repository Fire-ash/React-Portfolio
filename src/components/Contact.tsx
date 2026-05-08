import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [done, setDone] = useState(false);

  return (
    <section id="contact" className="py-20 border-t border-gray-100 bg-grid">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-500 mb-3 tracking-wide">
            Get in touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Let’s work together
          </h2>

          <p className="text-gray-600 max-w-md leading-relaxed">
            Whether you want to collaborate, discuss ideas, or just connect,
            feel free to reach out. I’m always open to meaningful conversations.
          </p>

          <div className="mt-6 flex gap-4 text-sm text-gray-600">
            <a href="https://github.com/Fire-ash" target="_blank" className="hover:text-black transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-black transition">
              LinkedIn
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-black transition">
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">

            {done ? (
              <p className="text-green-600 text-sm">
                Message sent successfully.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
                className="space-y-5"
              >
                <input
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  placeholder="Your Email"
                  type="email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition"
                >
                  Send Message
                </button>
              </form>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
