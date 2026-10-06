import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Store,
} from 'lucide-react'
import './Experience.css'

const responsibilities = [
  'Atendimento ao cliente e acompanhamento de pedidos',
  'Operação de caixa e organização financeira da loja',
  'Controle, organização e reposição de estoque',
  'Apoio à rotina operacional e organização do ambiente',
  'Criação e gerenciamento de conteúdo para redes sociais',
  'Planejamento de tarefas e resolução de problemas do dia a dia',
]

const skills = [
  'Liderança',
  'Comunicação',
  'Organização',
  'Atendimento',
  'Gestão de rotina',
  'Tomada de decisão',
]

function Experience() {
  return (
    <section id="experiencia" className="experience">
      <div className="experience__background">
        <span className="experience__background-word">EXPERIENCE</span>
        <div className="experience__glow" />
      </div>

      <div className="experience__container">
        <motion.div
          className="experience__header"
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
            EXPERIÊNCIA
          </div>

          <div className="experience__heading">
            <h2>
              experiência
              <br />
              <em>que acontece na prática.</em>
            </h2>

            <p>
              Antes mesmo de entrar no mercado de tecnologia, minha trajetória
              profissional já envolvia pessoas, processos, organização e
              resolução de problemas.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="experience__main"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="experience__timeline">
            <div className="experience__timeline-line" />

            <div className="experience__timeline-point">
              <span />
            </div>

            <span className="experience__timeline-start">
              2017
            </span>

            <span className="experience__timeline-end">
              ATUAL
            </span>
          </div>

          <article className="experience__card">
            <div className="experience__card-header">
              <div className="experience__company">
                <div className="experience__company-icon">
                  <Store size={23} strokeWidth={1.4} />
                </div>

                <div>
                  <span className="experience__label">
                    EXPERIÊNCIA PROFISSIONAL
                  </span>

                  <h3>Juju Festas</h3>

                  <p>Gerente de Loja</p>
                </div>
              </div>

              <div className="experience__period">
                <CalendarDays size={15} strokeWidth={1.5} />
                <span>Set 2017 — Atual</span>
              </div>
            </div>

            <div className="experience__divider" />

            <div className="experience__content">
              <div className="experience__description">
                <span className="experience__content-label">
                  SOBRE A EXPERIÊNCIA
                </span>

                <p>
                  Atuo na gestão da rotina de uma loja de festas, participando
                  diretamente do atendimento ao cliente, operação de caixa,
                  organização de estoque, divulgação e funcionamento diário do
                  negócio.
                </p>

                <p>
                  A experiência também envolve lidar com diferentes demandas
                  simultaneamente, identificar problemas, tomar decisões e
                  manter a operação organizada mesmo diante de imprevistos.
                </p>

                <div className="experience__skills">
                  {skills.map((skill) => (
                    <span key={skill}>
                      <Check size={12} strokeWidth={2} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="experience__responsibilities">
                <span className="experience__content-label">
                  PRINCIPAIS ATIVIDADES
                </span>

                <ul>
                  {responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      <span className="experience__bullet" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="experience__card-footer">
              <div>
                <BriefcaseBusiness size={15} strokeWidth={1.5} />
                <span>
                  experiência contínua em ambiente profissional
                </span>
              </div>

              <a href="#formacao">
                <span>ver formação</span>
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </article>
        </motion.div>

        <motion.div
          className="experience__statement"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>01 — EXPERIÊNCIA</span>

          <p>
            Aprendi a trabalhar com pessoas, prioridades e problemas reais —
            competências que hoje levo para a forma como penso e desenvolvo
            soluções em tecnologia.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
