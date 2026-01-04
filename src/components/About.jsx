import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaCode, FaLayerGroup } from 'react-icons/fa'

function About() {
  const stats = [
    { label: 'Years Experience', value: '2' },
    { label: 'Projects Delivered', value: '20+' },
    { label: 'Happy Clients', value: '5+' },
    { label: 'Technologies', value: '4+' },
  ]

  const expertise = [
    { 
      icon: FaCode, 
      title: ' Development', 
      description: 'Building complete web solutions by combining clean UI design with solid backend logic.' 
    },
    { 
      icon: FaReact, 
      title: 'Creative Technology', 
      description: 'Building interactive experiences using React, WebGL, and emerging web technologies.' 
    },
    { 
      icon: FaLayerGroup, 
      title: 'System Architecture', 
      description: 'Building modern frontend applications using React, Next.js, and modern UI patterns.' 
    },
    { 
      icon: FaDatabase, 
      title: 'Data', 
      description: 'Designing and managing databases, data models, and queries for real-world applications.' 
    },
    { 
      icon: FaCloud, 
      title: 'hosting', 
      description: 'Deploying and maintaining applications using modern hosting .' 
    },
    { 
      icon: FaNodeJs, 
      title: 'API Design', 
      description: 'Designing and developing secure, performant REST and API-based systems.' 
    },
  ]

  return (
    <section id="about" className="py-section relative">
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
            About
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h2 className="text-heading font-display">
Building <span className="text-gradient-gold">End-to-End</span> Solutions
            </h2>
            <p className="text-body text-textMuted font-light max-w-lg">
              I'm Oumaima El Badraouy, full stack developer focused on building complete web applications,
from backend architecture and APIs to clean, responsive user interfaces.
I enjoy solving complex problems, designing scalable systems, and delivering
solutions that are reliable, performant, and easy to use.

            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-surface p-8 md:p-10 text-center group"
            >
              <motion.div
                className="text-4xl md:text-5xl font-display text-text mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-caption text-textMuted uppercase tracking-wider font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 rounded-2xl group cursor-default"
            >
              <div className="w-14 h-14 glass rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <item.icon className="text-xl text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-3 text-text group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-body text-textMuted font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />
      </div>
    </section>
  )
}

export default About
