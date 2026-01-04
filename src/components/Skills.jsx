import { motion } from 'framer-motion'

function Skills() {
  const skillCategories = [
    {
      name: 'Creative Development',
      skills: [
        { name: 'React & Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Three.js / WebGL', level: 85 },
        { name: 'Framer Motion', level: 92 },
      ]
    },
    {
      name: 'Backend & Infrastructure',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
      ]
    },
    {
      name: 'Design & Tools',
      skills: [
        { name: 'UI/UX Design', level: 90 },
        { name: 'Figma', level: 87 },
        { name: 'Git', level: 95 },
        { name: 'Testing', level: 82 },
      ]
    }
  ]

  const additionalSkills = [
    'GraphQL', 'Python', 'Redis', 'Kubernetes', 'Tailwind CSS', 'Storybook', 
    'CI/CD', 'MongoDB', 'Serverless', 'Stripe', 'Prisma', 'Zustand'
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
            Expertise
          </span>
          <h2 className="text-heading font-display mb-6">
            Technical <span className="text-gradient-gold">Proficiency</span>
          </h2>
          <p className="text-body text-textMuted font-light max-w-2xl mx-auto">
            A curated selection of technologies and methodologies I employ 
            to deliver exceptional digital solutions.
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
                      <span className="text-caption text-accent font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.2 }}
                        className="h-full bg-gradient-to-r from-accent/80 to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-caption text-textMuted uppercase tracking-widest mb-6">Also Proficient In</p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="px-4 py-2 glass rounded-full text-caption text-textMuted hover:text-text hover:bg-white/5 transition-all cursor-default magnetic"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
