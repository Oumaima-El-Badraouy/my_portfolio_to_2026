import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Navigation: [
      { name: 'About', href: '#about' },
      { name: 'Work', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    Social: [
      { name: 'GitHub', href: 'https://github.com/Oumaima-El-Badraouy' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/oumaima-el-badraouy/' },
    ],
    Capabilities: [
      { name: 'Web Development', href: '#skills' },
      { name: 'UI/UX Design', href: '#skills' },
      { name: 'Creative Direction', href: '#about' },
    ],
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Oumaima-El-Badraouy', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/oumaima-el-badraouy/', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-surface/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 glass-surface rounded-full flex items-center justify-center">
                <span className="text-lg font-display text-accent">OU</span>
              </div>
              <span className="font-display text-lg tracking-wide">Portfolio</span>
            </div>
            <p className="text-body text-textMuted font-light mb-6">
Developing end-to-end web solutions, combining robust backend systems with modern, intuitive interfaces.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-textMuted hover:text-accent hover:bg-accent/5 transition-all magnetic"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4 className="text-sm font-medium text-text uppercase tracking-widest mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-body text-textMuted hover:text-text transition-colors magnetic"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-caption text-textMuted">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-caption text-textMuted">
            <span>Designed & Developed with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accent"
            >
              <FaHeart size={14} />
            </motion.span>
            <span>in San Francisco</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
