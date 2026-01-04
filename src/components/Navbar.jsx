import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import { scrollTo } from 'react-scroll'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', section: 'about' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Oumaima-El-Badraouy', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/oumaima-el-badraouy/', label: 'LinkedIn' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 glass-surface rounded-full flex items-center justify-center">
              <span className="text-lg font-display text-accent">OE</span>
            </div>
            <span className="font-display text-lg tracking-wide hidden md:block">
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollTo(item.section)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-sm uppercase tracking-widest text-textMuted hover:text-text transition-colors font-light magnetic"
              >
                {item.name}
              </motion.button>
            ))}
            
            <div className="flex items-center gap-6 pl-8 border-l border-border">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-textMuted hover:text-accent transition-colors text-lg magnetic"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-textMuted hover:text-text transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="glass mt-4 rounded-2xl p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollTo(item.section)
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-body text-textMuted hover:text-text transition-colors py-2 magnetic"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center gap-5 pt-4 border-t border-border">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textMuted hover:text-accent transition-colors text-xl magnetic"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
