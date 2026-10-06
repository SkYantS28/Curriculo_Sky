import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  FileText,
} from 'lucide-react'
import { publications } from '../data/publications'
import './Publications.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

function Publications() {
  return (
    <section id="publicacoes" className="publications">
      <div className="publications__background">
        <span className="publications__background-word">
          RESEARCH
        </span>

        <div className="publications__glow publications__glow--one" />
        <div className="publications__glow publications__glow--two" />
      </div>

      <div className="publications__container">
        <motion.div
          className="publications__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="section-label">
            <span />
            PUBLICAÇÕES
          </div>

          <div className="publications__heading">
            <div>
              <h2>
                pesquisa que
                <br />
                <em>vai além da teoria.</em>
              </h2>
            </div>

            <p>
              Trabalhos científicos desenvolvidos a partir do interesse em
              inteligência artificial, tecnologia, dados e seus impactos
              sobre a sociedade e as pessoas.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="publications__list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {publications.map((publication) => (
            <motion.article
              key={publication.id}
              className="publication-card"
              variants={itemVariants}
            >
              <div className="publication-card__number">
                {publication.number}
              </div>

              <div className="publication-card__main">
                <div className="publication-card__meta">
                  <span>
                    <BookOpen size={14} strokeWidth={1.5} />
                    {publication.journal}
                  </span>

                  <span>{publication.volume}</span>
                  <span>{publication.year}</span>
                </div>

                <h3>{publication.title}</h3>

                <p className="publication-card__authors">
                  {publication.authors}
                </p>

                <p className="publication-card__description">
                  {publication.description}
                </p>

                <div className="publication-card__details">
                  <div>
                    <span>METODOLOGIA</span>
                    <p>{publication.methodology}</p>
                  </div>
                </div>

                <div className="publication-card__tags">
                  {publication.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <a
                href={publication.link}
                target="_blank"
                rel="noreferrer"
                className="publication-card__link"
              >
                <span>ler publicação</span>
                <ArrowUpRight size={17} strokeWidth={1.5} />
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="publications__footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="publications__footer-icon">
            <FileText size={19} strokeWidth={1.4} />
          </div>

          <div>
            <span>PRODUÇÃO ACADÊMICA</span>
            <p>
              Pesquisa, análise de dados e investigação interdisciplinar
              fazem parte da minha formação em tecnologia.
            </p>
          </div>

          <ExternalLink size={17} strokeWidth={1.4} />
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
