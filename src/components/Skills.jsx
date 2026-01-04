import { motion } from 'framer-motion'

function Skills() {
 const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React & Next.js' },
      { name: 'TypeScript & JavaScript (ES6+)' },
      { name: 'Tailwind CSS' },
      { name: 'React Native' },
      { name: 'State Management (Redux )' },
      { name: 'Responsive Design' },
      { name: 'Web Performance Optimization' },
    ]
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js (Express / Fastify)' },
      { name: 'API Design (REST)' },
      { name: 'Laravel' },
      { name: 'Flask' },
      { name: 'Authentication & Authorization (JWT)' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'ORMs ( Eloquent)' },
    ]
  },

  {
    name: 'Tools',
    skills: [
      { name: 'Git & Version Control' },
      { name: 'Testing & Debugging' },
      { name: 'Clean Architecture' },
      { name: 'Agile / Scrum Workflow' },
      { name: 'API Documentation ( Postman)' },
      {name:'Docker'},
      {name:'Deployment (Vercel / Railway)'}
    ]
  }
]


  

  return (
    <section id="skills" className="py-section relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-caption font-mono tracking-widest text-accent uppercase block mb-4">
            Skills
          </span>
          <h2 className="text-heading font-display mb-6">
           Technical  <span className="text-gradient-gold">Expertise</span>
          </h2>
          <p className="text-body text-textMuted font-light max-w-2xl mx-auto">
            A practical overview of the technologies I use to build, deploy
            and maintain full-stack web applications.

          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="glass-surface p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/50 rounded-full" />
                <h3 className="text-lg font-medium text-text">{category.name}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.15 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-body text-textLight font-light">{skill.name}</span>
                    </div>
                   
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  )
}

export default Skills
