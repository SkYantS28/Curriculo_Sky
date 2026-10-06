import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  MapPin,
  Phone,
} from 'lucide-react'
import './Contact.css'

const GithubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.16c-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18A11.1 11.1 0 0 1 12 8.41c.98 0 1.97.13 2.89.38 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedinIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V9H3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
  </svg>
)

const contacts = [
  {
    icon: Phone,
    label: 'TELEFONE',
    value: '(21) 9 8819-5784',
    href: 'tel:+5521988195784',
  },
  {
    icon: LinkedinIcon,
    label: 'LINKEDIN',
    value: 'linkedin.com/in/sky-crizosti-127b9a25b',
    href: 'https://www.linkedin.com/in/sky-crizosti-127b9a25b/',
  },
  {
    icon: GithubIcon,
    label: 'GITHUB',
    value: 'github.com/SkYantS28',
    href: 'https://github.com/SkYantS28',
  },
]

function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact__background">
        <div className="contact__orb contact__orb--one" />
        <div className="contact__orb contact__orb--two" />
        <span className="contact__background-word">HELLO</span>
      </div>

      <div className="contact__container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">
            <span />
            CONTATO
          </div>

          <h2>
            vamos criar algo
            <br />
            <em>interessante juntos?</em>
          </h2>

          <p>
            Estou aberta a oportunidades de estágio em tecnologia, projetos
            e experiências que permitam transformar conhecimento em soluções
            reais.
          </p>
        </motion.div>

        <motion.div
          className="contact__main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="contact__intro">
            <span className="contact__intro-label">
              DISPONÍVEL PARA CONVERSAR
            </span>

            <a
              href="mailto:crizostisky@gmail.com"
              className="contact__email"
            >
              <span>crizostisky@gmail.com</span>
              <ArrowUpRight size={25} strokeWidth={1.3} />
            </a>

            <div className="contact__location">
              <MapPin size={15} strokeWidth={1.5} />
              <span>Maricá, Rio de Janeiro · Brasil</span>
            </div>
          </div>

          <div className="contact__links">
            {contacts.map((contact) => {
              const Icon = contact.icon

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    contact.href.startsWith('http')
                      ? 'noreferrer'
                      : undefined
                  }
                  className="contact__link"
                >
                  <div className="contact__link-icon">
                    <Icon size={18} strokeWidth={1.4} />
                  </div>

                  <div className="contact__link-content">
                    <span>{contact.label}</span>
                    <strong>{contact.value}</strong>
                  </div>

                  <ArrowUpRight
                    className="contact__link-arrow"
                    size={17}
                    strokeWidth={1.4}
                  />
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          className="contact__availability"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="contact__availability-dot" />
          <span>
            aberta a oportunidades em desenvolvimento, IA, UX/UI e dados
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
