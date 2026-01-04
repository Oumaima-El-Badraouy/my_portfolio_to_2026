import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full-Stack Development',
    description: 'A sophisticated e-commerce solution featuring real-time inventory management, seamless payment processing, and a comprehensive admin dashboard. The platform delivers exceptional performance while maintaining an elegant user experience.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    year: '2024',
  },
  {
    title: 'Task Management App',
    category: 'Productivity Tool',
    description: 'A collaborative project management platform with real-time updates, team workspaces, and intuitive automated workflows. Features include drag-and-drop kanban boards and comprehensive analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    year: '2024',
  },
  {
    title: 'Social Media Dashboard',
    category: 'Analytics Platform',
    description: 'An elegant analytics dashboard for social media management with multi-platform integration, intelligent scheduling, and deep engagement metrics through interactive visualizations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    technologies: ['Vue.js', 'Python', 'GraphQL', 'D3.js'],
    year: '2023',
  },
  {
    title: 'Real-time Chat Application',
    category: 'Communication Platform',
    description: 'A feature-rich messaging platform supporting channels, direct messages, file sharing, and video calls. Built with end-to-end encryption and customizable themes.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=800&fit=crop',
    technologies: ['React', 'Express', 'Socket.io', 'MongoDB'],
    year: '2023',
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

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <motion.a
            href="https://github.com/Oumaima-El-Badraouy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full text-body text-text hover:text-accent transition-colors magnetic"
          >
            <span>Explore All Projects</span>
            <FaExternalLinkAlt size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
