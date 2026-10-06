import { motion } from 'framer-motion'
import {
  ArrowDown,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Palette,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import {
  interpersonalSkills,
  languages,
  skillCategories,
} from '../data/skills'
import './Skills.css'

const icons = [
  Code2,
  Database,
  BrainCircuit,
  Sparkles,
  Server,
  ShieldCheck,
  Palette,
  BriefcaseBusiness,
  Sparkles,
]

function Skills() {
  return (
    <section id="competencias" className="skills">
      <div className="skills__background">
        <span className="skills__background-word">SKILLS</span>
        <div className="skills__glow skills__glow--one" />
        <div className="skills__glow skills__glow--two" />
      </div>

      <div className="skills__container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">
            <span />
            COMPETÊNCIAS
          </div>

          <div className="skills__heading">
            <h2>
              um repertório
              <br />
              <em>multidisciplinar.</em>
            </h2>

            <p>
              Desenvolvimento, inteligência artificial, dados, design,
              infraestrutura e gestão fazem parte de uma formação que busca
              conectar diferentes áreas da tecnologia.
            </p>
          </div>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((category, index) => {
            const Icon = icons[index]

            return (
              <motion.article
                key={category.id}
                className="skill-category"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.06,
                }}
              >
                <div className="skill-category__top">
                  <span>{category.number}</span>

                  <div className="skill-category__icon">
                    <Icon size={20} strokeWidth={1.4} />
                  </div>
                </div>

                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <div className="skill-category__skills">
                  {category.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="skill-category__line" />
              </motion.article>
            )
          })}
        </div>

        <motion.div
          className="skills__secondary"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="skills__secondary-block">
            <span className="skills__secondary-label">
              COMPETÊNCIAS INTERPESSOAIS
            </span>

            <div className="skills__chips">
              {interpersonalSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills__secondary-block skills__languages">
            <span className="skills__secondary-label">
              IDIOMAS
            </span>

            <div className="skills__languages-list">
              {languages.map((language) => (
                <div key={language.language}>
                  <strong>{language.language}</strong>
                  <span>{language.level}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="skills__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>explore por área</span>
          <ArrowDown size={15} strokeWidth={1.4} />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
