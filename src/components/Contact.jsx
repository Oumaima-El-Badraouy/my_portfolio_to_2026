import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000)
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'hello@developer.com', href: 'mailto:hello@developer.com' },
    { icon: FaPhone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'San Francisco, CA', href: '#' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Oumaima-El-Badraouy', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/oumaima-el-badraouy/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <section id="contact" className="py-section relative">
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
            Contact
          </span>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h2 className="text-heading font-display">
              Let's Create <span className="text-gradient-gold">Together</span>
            </h2>
            <p className="text-body text-textMuted font-light max-w-lg">
              Have a project in mind? I'd love to hear about it. Whether you need 
              a creative developer or want to collaborate on something innovative, 
              let's start a conversation.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-6 p-6 glass-surface rounded-2xl group cursor-pointer magnetic"
                >
                  <div className="w-14 h-14 glass rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <info.icon className="text-xl text-accent" />
                  </div>
                  <div>
                    <div className="text-caption text-textMuted uppercase tracking-wider mb-1">
                      {info.label}
                    </div>
                    <div className="text-body text-text group-hover:text-accent transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <span className="text-caption text-textMuted uppercase tracking-wider block mb-6">
                Connect
              </span>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-textMuted hover:text-accent hover:bg-accent/5 transition-all magnetic"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-surface p-8 md:p-10 rounded-3xl">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-caption text-textMuted uppercase tracking-wider mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-caption text-textMuted uppercase tracking-wider mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="email@example.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-caption text-textMuted uppercase tracking-wider mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  placeholder="What's this about?"
                  className="w-full"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-caption text-textMuted uppercase tracking-wider mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-5 rounded-full text-body font-medium flex items-center justify-center gap-3 transition-all magnetic ${
                  isSubmitting
                    ? 'bg-surfaceLight cursor-not-allowed text-textMuted'
                    : 'glass text-text hover:text-accent'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-textMuted/30 border-t-textMuted rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <span>→</span>
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 glass rounded-xl text-center"
                >
                  <span className="text-body text-accent">
                    Message sent successfully. I'll get back to you soon.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
