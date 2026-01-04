import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, MeshRefractionMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { scrollTo } from 'react-scroll'

function AnimatedSphere() {
  const meshRef = useRef()
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.15
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1.8, 64, 64]} ref={meshRef} scale={1}>
        <MeshDistortMaterial
          color="#d4af37"
          attach="material"
          distort={0.35}
          speed={1.8}
          roughness={0.1}
          metalness={0.9}
          envMapIntensity={1}
        />
      </Sphere>
    </Float>
  )
}

function BackgroundElements() {
  return (
    <>
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#d4af37" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#f0d878" />
      <pointLight position={[0, 0, 0]} intensity={0.8} color="#d4af37" />
    </>
  )
}

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <BackgroundElements />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80 z-0 pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20"
      >
        <div className="flex flex-col justify-center min-h-screen pt-20">
          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-caption font-mono tracking-widest text-accent uppercase">
              Creative Developer
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-display font-display mb-8 leading-tight"
          >
            <span className="text-gradient-subtle">Crafting</span>
            <br />
            <span className="text-gradient-gold">Digital</span>
            <br />
            <span className="text-text">Experiences</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-body max-w-xl mb-12 text-textMuted font-light"
          >
            I design and build immersive digital products with a focus on 
            aesthetics, interaction, and thoughtful details. Based in San Francisco.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6"
          >
            <motion.button
              onClick={() => scrollTo('projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 glass rounded-full text-body font-medium text-text flex items-center gap-3 magnetic"
            >
              <span>View Selected Work</span>
              <motion.span
                className="text-accent"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full text-body font-medium text-textMuted hover:text-text transition-colors magnetic"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap gap-4"
          >
            {['React', 'TypeScript', 'Node.js', 'Three.js', 'PostgreSQL'].map((tech, index) => (
              <span
                key={tech}
                className="px-5 py-2 glass rounded-full text-caption text-textMuted tracking-wide magnetic"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

     
    </section>
  )
}

export default Hero
