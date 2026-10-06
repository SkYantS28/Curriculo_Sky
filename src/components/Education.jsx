import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Sparkles,
} from 'lucide-react'
import {
  complementaryEducation,
  mainEducation,
} from '../data/education'
import './Education.css'

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

function Education() {
  return (
    <section id="formacao" className="education">
      <div className="education__background">
        <div className="education__orb education__orb--one" />
        <div className="education__orb education__orb--two" />
      </div>

      <div className="education__container">
        <motion.div
          className="education__header"
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
            FORMAÇÃO
          </div>

          <div className="education__heading">
            <h2>
              conhecimento
              <br />
              <em>em construção.</em>
            </h2>

            <p>
              Uma formação que combina engenharia de software com
              especialização em inteligência artificial e aprendizado
              complementar em tecnologia, design e ferramentas digitais.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="education__main"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {mainEducation.map((education, index) => (
            <motion.article
              key={education.id}
              className={`education-card education-card--${index + 1}`}
              variants={itemVariants}
            >
              <div className="education-card__top">
                <span className="education-card__number">
                  0{index + 1}
                </span>

                <span className="education-card__status">
                  <span />
                  {education.status}
                </span>
              </div>

              <div className="education-card__icon">
                {index === 0 ? (
                  <GraduationCap size={24} strokeWidth={1.3} />
                ) : (
                  <Sparkles size={23} strokeWidth={1.3} />
                )}
              </div>

              <span className="education-card__period">
                {education.period}
              </span>

              <h3>{education.title}</h3>

              <span className="education-card__institution">
                {education.institution}
              </span>

              <p>{education.description}</p>

              <div className="education-card__footer">
                <strong>{education.highlight}</strong>

                <BookOpen size={16} strokeWidth={1.4} />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="education__complementary-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="education__mini-label">
              FORMAÇÃO COMPLEMENTAR
            </span>

            <h3>
              aprendendo
              <br />
              <em>continuamente.</em>
            </h3>
          </div>

          <p>
            Cursos e formações que complementam minha trajetória em
            desenvolvimento, UX/UI, design, dados e ferramentas digitais.
          </p>
        </motion.div>

        <motion.div
          className="education__list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {complementaryEducation.map((course, index) => (
            <motion.article
              key={course.title}
              className="education-item"
              variants={itemVariants}
            >
              <span className="education-item__number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="education-item__main">
                <span className="education-item__category">
                  {course.category}
                </span>

                <h4>{course.title}</h4>

                <span className="education-item__institution">
                  {course.institution}
                </span>
              </div>

              <span className="education-item__period">
                {course.period}
              </span>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="education__footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>formação acadêmica + prática + aprendizado contínuo</span>

          <a href="#publicacoes">
            <span>conhecer pesquisas</span>
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
