import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import './Navbar.css'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Publicações', href: '#publicacoes' },
  { label: 'Competências', href: '#competencias' },
  { label: 'Contato', href: '#contato' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean)

      let currentSection = 'inicio'

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180

        if (window.scrollY >= sectionTop) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavigation = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="navbar__container">
          <a
            href="#inicio"
            className="navbar__logo"
            onClick={handleNavigation}
            aria-label="Voltar para o início"
          >
            <span className="navbar__logo-name">SKY</span>
            <span className="navbar__logo-dot">.</span>
          </a>

          <nav className="navbar__desktop">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`navbar__link ${
                    isActive ? 'navbar__link--active' : ''
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <motion.span
                      className="navbar__active-line"
                      layoutId="navbar-active-line"
                      transition={{
                        duration: 0.25,
                        ease: 'easeOut',
                      }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          <div className="navbar__actions">
            <a
              href="#contato"
              className="navbar__curriculum"
            >
              <span>Vamos conversar</span>

              <ArrowUpRight size={15} strokeWidth={1.8} />
            </a>

            <button
              type="button"
              className="navbar__menu-button"
              onClick={() => setMenuOpen((previous) => !previous)}
              aria-label={
                menuOpen
                  ? 'Fechar menu'
                  : 'Abrir menu'
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={22} strokeWidth={1.5} />
              ) : (
                <Menu size={22} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{
              opacity: 0,
              clipPath: 'inset(0 0 100% 0)',
            }}
            animate={{
              opacity: 1,
              clipPath: 'inset(0 0 0% 0)',
            }}
            exit={{
              opacity: 0,
              clipPath: 'inset(0 0 100% 0)',
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <nav className="navbar__mobile-nav">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="navbar__mobile-link"
                  onClick={handleNavigation}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.08 + index * 0.05,
                    duration: 0.4,
                  }}
                >
                  <span className="navbar__mobile-number">
                    0{index + 1}
                  </span>

                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </motion.a>
              ))}
            </nav>

            <div className="navbar__mobile-footer">
              <span>Sky Crizosti</span>

              <span>
                Software Engineering · AI · UX/UI
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
