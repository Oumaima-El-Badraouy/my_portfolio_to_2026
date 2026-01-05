import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
 
  {
    title: 'Happynation - Employee Well-Being AI Evaluation App',
    category: 'Full-Stack Mobile Development',
    description: 'A mobile application that evaluates an employee’s well-being through a short questionnaire and uses AI to generate a clear diagnostic report with scores, risks, and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    technologies: ['Laravel', 'Flutter', 'Mysql'],
    year: '2025',
  },
  {
    title: 'Nextraction ',
    category: 'Full-Stack Web Development',
    description: 'This project involves building a Web-based Retrieval-Augmented Generation (RAG) pipeline to extract high-signal insights from public online sources. It focuses on fetching, processing, and indexing web content, then answering user questions with evidence-backed responses, proper citations, and safe refusal when information is insufficient.',
    image: 'https://raw.githubusercontent.com/Oumaima-El-Badraouy/Geeks_Images_Projects/583b2853d6d9aec598a4f42f9aae73f5cc92e793/Nextraction.png',
    technologies: ['Python', 'Flask', 'js/Css/Html', 'Gemini API'],
    year: '2025',
  },
  {
    title: 'L\' Essence- store management',
    category: 'E-Commerce Website',
    description: 'A luxurious, high-end perfume e-commerce website featuring a sophisticated "Dark Luxury" design aesthetic with gold accents, smooth animations, and a shopping cart integrated with WhatsApp ordering.',
    image: 'https://raw.githubusercontent.com/Oumaima-El-Badraouy/Geeks_Images_Projects/99477fd451390deb89f4cd9bbe0a4f488bed83ab/Essence.png',
    technologies: ['React', 'TailwindCss','WhatsApp API'],
    year: '2025',
  },
   {
    title: 'Rafiqi – Smart Healthcare Assistant',
    category: 'HealthCare app web',
    description: 'Rafiqi is a healthcare web application designed to improve the connection between patients and doctors,The platform allows patients to easily book appointments, manage their medical follow-ups, and receive helpful reminders.',
    image: 'https://raw.githubusercontent.com/Oumaima-El-Badraouy/Geeks_Images_Projects/73cef557bbbdb37cb1f354d2e09e328a71182d7b/Rafiqi.jpg',
    technologies: ['Reactjs', 'TailwindCss','Laravel','MySQL','JWT','Socket.io'],
    year: '2025',
  },
   {
    title: 'Kree-Mobile Application',
    category: 'Full-Stack Mobile Development',
    description: 'Revolutionize car rental in Morocco by eliminating price opacity and building trust through Morocco\'s first "Name Your Price" marketplace.',
    image: 'https://raw.githubusercontent.com/Oumaima-El-Badraouy/Geeks_Images_Projects/846d22e7e65029aab3700bafdc42ca88f2af6912/KREE2.png',
    technologies: ['React Native', 'Node.js','Socket.io', 'Mongodb', 'NativeWind','Expo'],
    year: '2025',
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60" />
        
        {/* Year Badge */}
        <div className="absolute top-6 right-6">
          <span className="px-3 py-1 glass rounded-full text-caption text-textMuted">
            {project.year}
          </span>
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 glass rounded-full text-text hover:text-accent transition-colors"
            aria-label="View Project"
          >
            <FaExternalLinkAlt size={20} />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 glass rounded-full text-text hover:text-accent transition-colors"
            aria-label="View Code"
          >
            <FaGithub size={20} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <span className="text-caption font-mono text-accent uppercase tracking-wider">
          {project.category}
        </span>
        
        <h3 className="text-2xl font-display text-text group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-body text-textMuted font-light leading-relaxed line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 glass rounded-full text-caption text-textMuted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-section relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-caption font-mono tracking-widest text-accent uppercase block mb-4">
            Portfolio
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h2 className="text-heading font-display">
              Selected <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="text-body text-textMuted font-light">
              A collection of projects that showcase my approach to digital product development, 
              from concept to deployment.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

       
      </div>
    </section>
  )
}

export default Projects
