import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
    >
      <div className="hero__background">
        <div className="hero__orb hero__orb--one" />
        <div className="hero__orb hero__orb--two" />
        <div className="hero__orb hero__orb--three" />

        <div className="hero__grid" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <motion.div
            className="hero__eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <span className="hero__eyebrow-line" />

            <span>
              SOFTWARE · AI · DIGITAL EXPERIENCES
            </span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="hero__title-small">
              olá, eu sou
            </span>

            <span className="hero__title-name">
              Sky
            </span>

            <span className="hero__title-last">
              Crizosti<span>.</span>
            </span>
          </motion.h1>

          <motion.div
            className="hero__description"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
          >
            <p className="hero__role">
              Estudante de Engenharia de Software
            </p>

            <p className="hero__specialties">
              Desenvolvimento de Software
              <span>·</span>
              IA Aplicada
              <span>·</span>
              UX/UI
              <span>·</span>
              Dados
            </p>
          </motion.div>

          <motion.p
            className="hero__intro"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
          >
            Construindo soluções digitais que conectam
            tecnologia, inteligência artificial e experiência
            humana.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.85,
            }}
          >
            <a
              href="#projetos"
              className="hero__button hero__button--primary"
            >
              <span>explorar projetos</span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
              />
            </a>

            <a
              href="#contato"
              className="hero__button hero__button--secondary"
            >
              <span>vamos conversar</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{
            opacity: 0,
            scale: 0.92,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.1,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero__visual-glow" />

          <motion.div
            className="hero__visual-frame"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="hero__image-wrapper">
              <img
                src="/img/foto_curriculo.png"
                alt="Sky Crizosti"
                className="hero__image"
              />

              <div className="hero__image-overlay" />
            </div>

            <div className="hero__frame-corner hero__frame-corner--top" />

            <div className="hero__frame-corner hero__frame-corner--bottom" />
          </motion.div>

          <motion.div
            className="hero__floating-card hero__floating-card--top"
            animate={{
              y: [0, -7, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles
              size={15}
              strokeWidth={1.5}
            />

            <span>AI Applied</span>
          </motion.div>

          <motion.div
            className="hero__floating-card hero__floating-card--bottom"
            animate={{
              y: [0, 7, 0],
              rotate: [0, -1, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span>Software Engineering</span>
          </motion.div>

          <div className="hero__gold-orbit hero__gold-orbit--one" />
          <div className="hero__gold-orbit hero__gold-orbit--two" />
        </motion.div>
      </div>

      <motion.div
        className="hero__bottom"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.3,
          duration: 0.8,
        }}
      >
        <div className="hero__stats">
          <div className="hero__stat">
            <strong>7º</strong>
            <span>período</span>
          </div>

          <div className="hero__stat-divider" />

          <div className="hero__stat">
            <strong>2</strong>
            <span>publicações</span>
          </div>

          <div className="hero__stat-divider" />

          <div className="hero__stat">
            <strong>21+</strong>
            <span>repositórios</span>
          </div>
        </div>

        <a
          href="#sobre"
          className="hero__scroll"
        >
          <span>role para explorar</span>

          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown
              size={15}
              strokeWidth={1.5}
            />
          </motion.span>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
