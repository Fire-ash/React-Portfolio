import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "FixedHack",
      description:
        "Designed REST APIs and handled backend logic for scalable data flow in a hackathon discovery platform.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/Fire-ash/fixedhack",
      demo: "https://fixedhack.netlify.app/",
      featured: true,
      status: "Featured Project"
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React, Vite, and Tailwind with responsive layouts, motion effects, and modern UI structure.",
      tech: ["React", "Vite", "Tailwind", "Framer Motion"],
      github: "https://github.com/Fire-ash/portfolio",
      demo: "https://your-portfolio-link.vercel.app",
      status: "Live"
    },
    {
      title: "Guess Command Line Game",
      description:
        "CLI-based number guessing game in Java focused on control flow, logic building, and user interaction handling.",
      tech: ["Java", "CLI"],
      github: "https://github.com/Fire-ash/Guess-CommandLineApplication",
      status: "Open Source"
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-14">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >

              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-green-50 flex items-center justify-center">

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute opacity-20"
                >
                  <svg width="260" height="260" viewBox="0 0 200 200">
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

                <div className="relative z-10 border border-gray-200 rounded-2xl bg-black text-green-400 p-5 w-[260px] shadow-xl">
                  <p className="text-xs text-gray-500 mb-3">
                    project.preview
                  </p>

                  <div className="space-y-2 text-sm font-mono">
                    <p>{"> loading modules..."}</p>
                    <p>{"> compiling systems..."}</p>
                    <p>{"> deployment active"}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur text-xs text-gray-700 border border-gray-200">
                  {project.status}
                </div>

              </div>

              <div className="p-8">

                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-semibold text-black">
                    {project.title}
                  </h3>

                  {project.featured && (
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm hover:bg-black hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-xl bg-black text-white hover:opacity-80 transition"
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
