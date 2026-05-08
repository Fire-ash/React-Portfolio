import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "Vite"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Spring Boot"]
    },
    {
      title: "Tools & Concepts",
      skills: ["Git", "Linux", "DSA", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-24 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-14">
            Technologies & Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border border-gray-200 rounded-2xl p-8 bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-black mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;
