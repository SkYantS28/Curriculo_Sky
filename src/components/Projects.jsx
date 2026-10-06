import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  LockKeyhole,
  Sparkles,
} from 'lucide-react'
import { featuredProjects, uiProjects } from '../data/projects'
import './Projects.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function Projects() {
  return (
    <section id="projetos" className="projects">
      <div className="projects__background">
        <div className="projects__glow projects__glow--one" />
        <div className="projects__glow projects__glow--two" />
      </div>

      <div className="projects__container">
        <motion.div
          className="projects__header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="section-label" variants={itemVariants}>
            <span />
            PROJETOS
          </motion.div>

          <motion.div className="projects__heading" variants={itemVariants}>
            <div>
              <h2>
                do conceito
                <br />
                <em>à implementação.</em>
              </h2>
            </div>

            <p>
              Projetos acadêmicos, profissionais e experimentações de UX/UI
              que mostram diferentes partes da minha formação em tecnologia.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="projects__featured"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {featuredProjects.map((project, index) => {
            const isPrivate = project.type === 'private'

            return (
              <motion.article
                key={project.id}
                className={`project-card project-card--${index + 1}`}
                variants={itemVariants}
              >
                <div className="project-card__top">
                  <span className="project-card__category">
                    {project.category}
                  </span>

                  <span className="project-card__number">
                    0{index + 1}
                  </span>
                </div>

                <div className="project-card__content">
                  <div className="project-card__icon">
                    {isPrivate ? (
                      <LockKeyhole size={21} strokeWidth={1.4} />
                    ) : project.type === 'academic' ? (
                      <Code2 size={21} strokeWidth={1.4} />
                    ) : (
                      <Sparkles size={21} strokeWidth={1.4} />
                    )}
                  </div>

                  <h3>{project.title}</h3>

                  <span className="project-card__subtitle">
                    {project.subtitle}
                  </span>

                  <p>{project.description}</p>

                  <div className="project-card__technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card__bottom">
                  <span className="project-card__highlight">
                    {project.highlight}
                  </span>

                  {project.type === 'link' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__link"
                    >
                      <span>visitar projeto</span>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.6}
                      />
                    </a>
                  )}

                  {isPrivate && (
                    <span className="project-card__private">
                      <LockKeyhole size={14} strokeWidth={1.5} />
                      código privado
                    </span>
                  )}
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          className="projects__ui-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="projects__mini-label">
              <Sparkles size={15} strokeWidth={1.5} />
              PROTOTIPAÇÃO
            </span>

            <h3>
              interfaces que
              <br />
              <em>começam no papel.</em>
            </h3>
          </div>

          <p>
            Alguns dos meus projetos de UX/UI foram desenvolvidos no Figma,
            explorando estrutura, hierarquia visual, navegação e experiência
            antes da implementação.
          </p>
        </motion.div>

        <motion.div
          className="projects__ui-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {uiProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="ui-project"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="ui-project__visual">
                <span className="ui-project__index">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <Sparkles size={24} strokeWidth={1.3} />

                <ArrowUpRight
                  className="ui-project__arrow"
                  size={18}
                  strokeWidth={1.5}
                />
              </div>

              <div className="ui-project__info">
                <div>
                  <span>{project.category}</span>
                  <h4>{project.title}</h4>
                </div>

                <p>{project.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="projects__footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>
            mais projetos e códigos estão disponíveis no meu GitHub.
          </span>

          <a
            href="https://github.com/SkYantS28"
            target="_blank"
            rel="noreferrer"
          >
            <span>explorar GitHub</span>
            <ExternalLink size={15} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
