import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Your College Name",
      year: "2022 — 2026",
      description:
        "Focused on backend systems, algorithms, operating systems, and scalable application development."
    },
    {
      degree: "Senior Secondary Education",
      institution: "Your School Name",
      year: "2020 — 2022",
      description:
        "Studied Physics, Chemistry, and Mathematics with strong analytical and problem-solving foundations."
    }
  ];

  return (
    <section id="education" className="py-24 border-t border-gray-100 bg-grid">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-14">
            Academic Background
          </h2>
        </motion.div>

        <div className="space-y-8">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border border-gray-200 rounded-2xl p-8 bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    {item.degree}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="md:text-right">
                  <p className="text-black font-medium">
                    {item.institution}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.year}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
