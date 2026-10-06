import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Code2,
  Database,
  Palette,
  ArrowUpRight,
} from 'lucide-react'
import './About.css'

const areas = [
  {
    number: '01',
    icon: Code2,
    title: 'Desenvolvimento',
    description:
      'Construção de aplicações web, sistemas e soluções digitais com foco em estrutura, usabilidade e qualidade.',
  },
  {
    number: '02',
    icon: BrainCircuit,
    title: 'IA Aplicada',
    description:
      'Exploração de inteligência artificial, LLMs, agentes, RAG e integração de modelos em aplicações reais.',
  },
  {
    number: '03',
    icon: Palette,
    title: 'UX / UI',
    description:
      'Criação de interfaces, protótipos e experiências digitais conectando estética, clareza e funcionalidade.',
  },
  {
    number: '04',
    icon: Database,
    title: 'Dados',
    description:
      'Análise exploratória, estatística, visualização e utilização de dados como apoio à tomada de decisões.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function About() {
  return (
    <section
      id="sobre"
      className="about"
    >
      <div className="about__background">
        <div className="about__background-word">
          ABOUT
        </div>

        <div className="about__glow" />
      </div>

      <div className="about__container">
        <motion.div
          className="about__header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.div
            className="section-label"
            variants={itemVariants}
          >
            <span />
            SOBRE MIM
          </motion.div>

          <motion.h2
            className="about__title"
            variants={itemVariants}
          >
            tecnologia,
            <br />
            <em>mas não apenas código.</em>
          </motion.h2>

          <motion.p
            className="about__subtitle"
            variants={itemVariants}
          >
            Uma formação em Engenharia de Software construída
            entre desenvolvimento, inteligência artificial,
            design e análise de dados.
          </motion.p>
        </motion.div>

        <div className="about__main">
          <motion.div
            className="about__text"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="about__quote-mark">
              “
            </span>

            <p>
              Sou estudante de Engenharia de Software e
              atualmente estou no 7º período, buscando
              transformar conhecimento acadêmico em
              experiências e soluções digitais concretas.
            </p>

            <p>
              Meu interesse vai além do desenvolvimento
              tradicional. Gosto de entender como software,
              inteligência artificial, dados e design podem
              trabalhar juntos para resolver problemas de
              forma mais eficiente e intuitiva.
            </p>

            <p>
              Ao longo da minha formação, participei de
              projetos acadêmicos e profissionais envolvendo
              desenvolvimento Full Stack, interfaces,
              prototipação, bancos de dados, análise de dados
              e aplicações de inteligência artificial.
            </p>

            <a
              href="#projetos"
              className="about__link"
            >
              <span>conhecer meus projetos</span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
              />
            </a>
          </motion.div>

          <motion.div
            className="about__visual"
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="about__visual-center">
              <span>SKY</span>

              <small>
                SOFTWARE
                <br />
                ENGINEERING
              </small>
            </div>

            <div className="about__ring about__ring--one" />
            <div className="about__ring about__ring--two" />
            <div className="about__ring about__ring--three" />

            <div className="about__visual-point about__visual-point--one" />
            <div className="about__visual-point about__visual-point--two" />
            <div className="about__visual-point about__visual-point--three" />

            <span className="about__visual-label about__visual-label--top">
              CREATE
            </span>

            <span className="about__visual-label about__visual-label--right">
              BUILD
            </span>

            <span className="about__visual-label about__visual-label--bottom">
              CONNECT
            </span>
          </motion.div>
        </div>

        <motion.div
          className="about__areas"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {areas.map((area) => {
            const Icon = area.icon

            return (
              <motion.article
                key={area.number}
                className="about__area"
                variants={itemVariants}
              >
                <div className="about__area-top">
                  <span className="about__area-number">
                    {area.number}
                  </span>

                  <Icon
                    className="about__area-icon"
                    size={20}
                    strokeWidth={1.4}
                  />
                </div>

                <h3>{area.title}</h3>

                <p>{area.description}</p>

                <div className="about__area-line" />
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          className="about__facts"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="about__fact">
            <strong>2023</strong>

            <span>
              início da graduação
            </span>
          </div>

          <div className="about__fact">
            <strong>2025</strong>

            <span>
              primeiras publicações científicas
            </span>
          </div>

          <div className="about__fact">
            <strong>2026</strong>

            <span>
              especialização em IA aplicada
            </span>
          </div>

          <div className="about__fact about__fact--highlight">
            <strong>2027</strong>

            <span>
              conclusão prevista da graduação
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
