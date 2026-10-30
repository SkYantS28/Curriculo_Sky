
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe,
  Headset,
  ShieldCheck,
  Wrench,
  FileText,
  Clock,
  CreditCard,
  LockKeyhole,
} from 'lucide-react'

import './Services.css'

// ==========================================
// 1. SERVIÇOS DE CRIAÇÃO DE SITES
// ==========================================

const websiteServices = [
  {
    id: 'catalogo',
    number: '01',
    title: 'Catálogo digital',
    price: 'R$ 2.500,00',
    description:
      'Ideal para profissionais autônomos, prestadores de serviços e empresas que desejam apresentar seus produtos, serviços e informações na internet.',
    features: [
      'Desenvolvimento com identidade visual personalizada',
      'Apresentação de produtos e serviços',
      'Seções institucionais e informações profissionais',
      'Botões de WhatsApp e redes sociais',
      'Formulário de contato, conforme o projeto',
      'Layout responsivo para computadores e celulares',
      'Publicação do site na internet',
    ],
    note:
      'O número de páginas, o conteúdo e as funcionalidades serão definidos durante o planejamento.',
  },
  {
    id: 'agendamento',
    number: '02',
    title: 'Site com agendamento e pagamentos',
    price: 'R$ 6.500,00',
    description:
      'Uma solução para profissionais e empresas que desejam apresentar seus serviços, receber agendamentos e oferecer opções de pagamento online.',
    features: [
      'Funcionalidades aplicáveis ao catálogo digital',
      'Apresentação dos serviços oferecidos',
      'Fluxo de agendamento online',
      'Organização das informações dos agendamentos',
      'Integração com soluções de pagamento',
      'Área ou painel de gerenciamento, conforme escopo',
      'Interface responsiva',
      'Publicação do site na internet',
    ],
    note:
      'As regras de agendamento e as integrações serão definidas previamente. Tarifas de plataformas e serviços de terceiros são pagas pelo cliente.',
  },
]

// ==========================================
// 2. SERVIÇOS DE DESENVOLVIMENTO DE SISTEMAS
// ==========================================

const systemServices = [
  {
    id: 'basico',
    number: '01',
    title: 'Sistema básico de ponto',
    price: 'R$ 2.500,00',
    description:
      'Para negócios que precisam registrar e consultar horários de entrada e saída de funcionários.',
    features: [
      'Registro manual de entrada e saída',
      'Botões para registrar os horários',
      'Armazenamento das marcações',
      'Histórico de registros',
      'Consulta dos registros realizados',
    ],
    note:
      'Cadastro de funcionários, perfis de acesso e relatórios adicionais serão definidos no escopo contratado.',
  },
  {
    id: 'horas',
    number: '02',
    title: 'Sistema de ponto com cálculo de horas',
    price: 'R$ 5.000,00',
    description:
      'Uma solução para empresas que precisam acompanhar a jornada de trabalho e consultar cálculos de horas.',
    features: [
      'Funcionalidades do sistema básico',
      'Cálculo das horas trabalhadas',
      'Apuração de atrasos e horas extras',
      'Regras de jornada configuráveis',
      'Relatórios de jornada',
      'Consulta de totais por período',
      'Estimativas de valores a pagar',
    ],
    note:
      'Os cálculos financeiros são estimativas baseadas nas regras configuradas e não substituem uma folha de pagamento ou validação trabalhista especializada.',
  },
  {
    id: 'completo',
    number: '03',
    title: 'Sistema de ponto e gestão',
    price: 'R$ 9.000,00',
    description:
      'Uma solução mais abrangente para empresas que precisam centralizar informações de funcionários, registros de jornada e consultas administrativas.',
    features: [
      'Funcionalidades de registro e consulta de ponto',
      'Cadastro e gerenciamento de funcionários',
      'Histórico de registros de jornada',
      'Cálculo de horas trabalhadas e extras',
      'Relatórios diários e mensais',
      'Estimativas de valores a pagar',
      'Painel administrativo',
      'Organização das informações dos funcionários',
    ],
    note:
      'Escalas, banco de horas, múltiplas unidades, integrações externas e permissões avançadas serão avaliados e orçados conforme os requisitos.',
  },
]

// ==========================================
// 3. VALORES DE REFERÊNCIA DE DOMÍNIOS
// ==========================================

const domainPrices = [
  ['1 ano', 'R$ 40,00'],
  ['2 anos', 'R$ 76,00'],
  ['3 anos', 'R$ 112,00'],
  ['4 anos', 'R$ 148,00'],
  ['5 anos', 'R$ 184,00'],
  ['6 anos', 'R$ 220,00'],
  ['7 anos', 'R$ 256,00'],
  ['8 anos', 'R$ 292,00'],
  ['9 anos', 'R$ 328,00'],
  ['10 anos', 'R$ 364,00'],
]

// ==========================================
// 4. COMPONENTE DE CARD
// ==========================================

function ServiceCard({ service, index }) {
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="service-card__top">
        <span className="service-card__number">
          {service.number}
        </span>
        <ArrowUpRight size={19} strokeWidth={1.4} />
      </div>

      <h4>{service.title}</h4>

      <p className="service-card__description">
        {service.description}
      </p>

      <div className="service-card__price">
        <span>INVESTIMENTO</span>
        <strong>{service.price}</strong>
        <small>valor de desenvolvimento</small>
      </div>

      <ul className="service-card__features">
        {service.features.map((feature) => (
          <li key={feature}>
            <Check size={15} strokeWidth={1.7} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {service.note && (
        <p className="service-card__note">
          {service.note}
        </p>
      )}

      <a
        className="service-card__cta"
        href="#contato"
        aria-label={`Solicitar orçamento: ${service.title}`}
      >
        Conversar sobre este serviço
        <ArrowUpRight size={16} />
      </a>
    </motion.article>
  )
}

// ==========================================
// 5. COMPONENTE PRINCIPAL
// ==========================================

function Services() {
  return (
    <section id="servicos" className="services">

      {/* FUNDO DECORATIVO */}
      <div className="services__background" aria-hidden="true">
        <span className="services__background-word">
          SERVICES
        </span>

        <div className="services__glow services__glow--one" />
        <div className="services__glow services__glow--two" />
      </div>

      <div className="services__container">

        {/* APRESENTAÇÃO */}
        <motion.header
          className="services__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-label">
            <span />
            CATÁLOGO DE SERVIÇOS
          </div>

          <div className="services__heading">
            <h2>
              soluções digitais
              <br />
              <em>feitas sob medida.</em>
            </h2>

            <p>
              Desenvolvo sites e sistemas web personalizados para
              profissionais e empresas que desejam fortalecer sua
              presença digital, organizar processos e oferecer uma
              experiência profissional aos seus clientes.

              Cada projeto é planejado de acordo com as necessidades
              do negócio, priorizando funcionalidade, organização,
              usabilidade e apresentação visual.
            </p>
          </div>
        </motion.header>

        {/* ==================================
            CRIAÇÃO DE SITES
        ================================== */}

        <div className="services__section-heading">
          <div className="services__section-icon">
            <Globe size={20} strokeWidth={1.4} />
          </div>

          <div>
            <span>01 — PRESENÇA DIGITAL</span>
            <h3>Criação de sites</h3>
          </div>
        </div>

        <div className="services__website-grid">
          {websiteServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* ==================================
            SISTEMAS WEB
        ================================== */}

        <div className="services__section-heading services__section-heading--systems">
          <div className="services__section-icon">
            <Code2 size={20} strokeWidth={1.4} />
          </div>

          <div>
            <span>02 — SISTEMAS PERSONALIZADOS</span>
            <h3>Sistemas web para empresas</h3>
          </div>
        </div>

        <p className="services__section-description">
          Desenvolvo sistemas web acessíveis pela internet, planejados
          para organizar informações, automatizar tarefas e apoiar os
          processos de empresas e profissionais.

          As funcionalidades são definidas conforme os requisitos
          de cada projeto. Os pacotes abaixo representam escopos
          de referência.
        </p>

        <div className="services__system-grid">
          {systemServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* ==================================
            HOSPEDAGEM E DOMÍNIO
        ================================== */}

        <motion.div
          className="services__hosting"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="services__hosting-icon">
            <Globe size={22} strokeWidth={1.4} />
          </div>

          <div className="services__hosting-content">
            <span>INFRAESTRUTURA</span>

            <h3>Hospedagem e domínio</h3>

            <p>
              Os custos de infraestrutura são separados do investimento
              de desenvolvimento.

              A hospedagem é gerenciada por mim por meio do meu plano
              de hospedagem, conforme os recursos disponíveis no serviço.

              O domínio é contratado pelo cliente diretamente com o
              provedor, ficando sob sua responsabilidade a titularidade
              e a renovação.
            </p>

            <div className="services__hosting-costs">
              <div>
                <small>Hospedagem</small>
                <strong>R$ 100,00/ano</strong>
                <span>Valor anual de referência</span>
              </div>

              <div>
                <small>Domínio</small>
                <strong>Pago ao provedor</strong>
                <span>Conforme extensão e período contratado</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TABELA DE DOMÍNIO */}

        <div className="services__domain">
          <div className="services__domain-header">
            <div>
              <span className="services__eyebrow">
                REFERÊNCIA DE PREÇOS
              </span>

              <h3>Registro de domínio .com.br</h3>

              <p>
                O domínio é o endereço utilizado para acessar um site,
                como suaempresa.com.br.

                Os valores abaixo são referências e devem ser confirmados
                diretamente com o provedor no momento da contratação.
              </p>
            </div>
          </div>

          <div className="services__domain-grid">
            {domainPrices.map(([period, price]) => (
              <div
                className="services__domain-item"
                key={period}
              >
                <span>{period}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================
            MANUTENÇÃO
        ================================== */}

        <div className="services__section-heading services__section-heading--maintenance">
          <div className="services__section-icon">
            <Wrench size={20} strokeWidth={1.4} />
          </div>

          <div>
            <span>03 — CONTINUIDADE</span>
            <h3>Manutenção e atualizações</h3>
          </div>
        </div>

        <div className="services__maintenance-grid">

          <article className="services__maintenance-card">
            <span className="services__eyebrow">
              SOLICITAÇÃO AVULSA
            </span>

            <h4>Manutenção sob demanda</h4>

            <strong>R$ 1.000 a R$ 2.000</strong>

            <p>
              Indicada para ajustes, atualizações e alterações pontuais
              em sites existentes.

              O valor depende da complexidade, do tempo estimado e
              do escopo de cada solicitação.
            </p>
          </article>

          <article className="services__maintenance-card services__maintenance-card--featured">
            <span className="services__eyebrow">
              ACOMPANHAMENTO CONTÍNUO
            </span>

            <h4>Plano mensal para sites</h4>

            <strong>R$ 200,00/mês</strong>

            <p>
              Inclui manutenção recorrente e pequenas alterações
              dentro do escopo acordado para o plano.

              Reformulações completas e novas funcionalidades
              são orçadas separadamente.
            </p>
          </article>

          <article className="services__maintenance-card">
            <span className="services__eyebrow">
              SISTEMAS WEB
            </span>

            <h4>Manutenção de sistemas</h4>

            <strong>Sob orçamento</strong>

            <p>
              Avaliação individual conforme a complexidade da aplicação,
              infraestrutura, requisitos técnicos e serviços solicitados.
            </p>
          </article>

        </div>

        {/* ==================================
            GARANTIA E CORREÇÕES
        ================================== */}

        <div className="services__policy-grid">

          <article className="services__policy">
            <ShieldCheck size={23} strokeWidth={1.4} />

            <div>
              <h4>Garantia e correção de erros</h4>

              <p>
                Erros técnicos reproduzíveis em funcionalidades previstas
                no escopo aprovado e entregues por mim serão corrigidos
                sem custo adicional durante o período de garantia
                definido no contrato.

                A garantia não cobre novas funcionalidades, alterações
                solicitadas após a aprovação, intervenções de terceiros
                ou falhas em serviços externos fora do meu controle.
              </p>
            </div>
          </article>

          <article className="services__policy">
            <Headset size={23} strokeWidth={1.4} />

            <div>
              <h4>Suporte e manutenção</h4>

              <p>
                A garantia técnica não substitui um plano de manutenção
                contínua.

                Atualizações, melhorias, alterações de conteúdo e novas
                funcionalidades após o período de garantia serão
                avaliadas conforme o serviço contratado.
              </p>
            </div>
          </article>

        </div>

        {/* ==================================
            CONDIÇÕES DE CONTRATAÇÃO
        ================================== */}

        <div className="services__section-heading services__section-heading--maintenance">
          <div className="services__section-icon">
            <FileText size={20} strokeWidth={1.4} />
          </div>

          <div>
            <span>04 — TRANSPARÊNCIA</span>
            <h3>Condições de contratação</h3>
          </div>
        </div>

        <p className="services__section-description">
          Para garantir clareza durante o desenvolvimento e a entrega,
          cada projeto terá suas condições alinhadas previamente.
        </p>

        <div className="services__contract-grid">

          <article className="services__contract-card">
            <FileText size={21} />
            <div>
              <h4>Escopo do projeto</h4>
              <p>
                Funcionalidades, páginas, conteúdo, integrações e
                entregáveis serão definidos antes do início.
              </p>
            </div>
          </article>

          <article className="services__contract-card">
            <Clock size={21} />
            <div>
              <h4>Prazos</h4>
              <p>
                O cronograma será estabelecido conforme a complexidade,
                a disponibilidade das informações e as etapas de
                aprovação do cliente.
              </p>
            </div>
          </article>

          <article className="services__contract-card">
            <CreditCard size={21} />
            <div>
              <h4>Pagamento</h4>
              <p>
                As condições, os vencimentos e as etapas de pagamento
                serão acordados antes do início do desenvolvimento.
              </p>
            </div>
          </article>

          <article className="services__contract-card">
            <Wrench size={21} />
            <div>
              <h4>Alterações e funcionalidades extras</h4>
              <p>
                Solicitações que ultrapassem o escopo aprovado poderão
                exigir prazo adicional e orçamento complementar.
              </p>
            </div>
          </article>

          <article className="services__contract-card">
            <Globe size={21} />
            <div>
              <h4>Custos de terceiros</h4>
              <p>
                Domínios, tarifas de pagamentos, assinaturas de
                plataformas e serviços externos serão discriminados
                quando aplicáveis.
              </p>
            </div>
          </article>

          <article className="services__contract-card">
            <LockKeyhole size={21} />
            <div>
              <h4>Entrega e acessos</h4>
              <p>
                A entrega do projeto, os acessos administrativos,
                as credenciais e as condições de disponibilização
                do código-fonte serão definidos no contrato.
              </p>
            </div>
          </article>

        </div>

        {/* ==================================
            CHAMADA FINAL
        ================================== */}

        <motion.div
          className="services__footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="services__eyebrow">
            SKY CRIZOSTI | DESENVOLVIMENTO WEB
          </span>

          <h3>
            Seu projeto, suas necessidades
            <br />
            <em> e uma solução digital feita sob medida.</em>
          </h3>

          <p className="services__footer-description">
            O primeiro passo é entender seus objetivos, identificar
            as funcionalidades necessárias e definir uma solução
            compatível com seu orçamento e suas prioridades.
          </p>

          <a
            href="#contato"
            className="services__footer-link"
          >
            Vamos conversar sobre seu projeto
            <ArrowDownRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Services
