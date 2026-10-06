# Sky Crizosti · Portfólio & Currículo

> **Engenharia de Software · Desenvolvimento de Software · IA Aplicada · UX/UI · Dados**

Um portfólio profissional desenvolvido para apresentar minha trajetória acadêmica, experiência profissional, projetos, pesquisas e competências em tecnologia.

O projeto foi construído como uma experiência digital própria — combinando desenvolvimento web, design de interfaces, animações e organização de conteúdo profissional em uma única aplicação.

---

## ✦ Sobre o projeto

Este site nasceu com o objetivo de transformar um currículo tradicional em uma experiência mais completa e interativa.

Além de apresentar informações profissionais, o projeto reúne:

- trajetória acadêmica em Engenharia de Software;
- especialização em Engenharia de Software em IA Aplicada;
- experiência profissional;
- projetos acadêmicos e profissionais;
- protótipos desenvolvidos em Figma;
- publicações científicas;
- competências técnicas e interpessoais;
- idiomas;
- canais de contato profissional.

A proposta visual combina **estética editorial, tecnologia e identidade pessoal**, utilizando uma interface predominantemente em tons de roxo, lilás, rosa, branco e dourado.

---

## ◌ Destaques

### Desenvolvimento

Aplicação desenvolvida com **React + Vite**, utilizando componentes reutilizáveis e organização modular.

### Motion Design

As transições e animações são construídas com **Framer Motion**, criando movimento sutil durante a navegação e entrada das seções.

### Interface

O design foi pensado para equilibrar:

- clareza de informação;
- hierarquia visual;
- responsividade;
- identidade visual;
- acessibilidade e usabilidade;
- experiência de navegação.

### Conteúdo profissional

O projeto apresenta informações reais sobre formação, experiência, projetos e pesquisas, mantendo o conteúdo alinhado ao currículo profissional.

---

## ⚙️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| React | Construção da interface |
| Vite | Desenvolvimento e build |
| JavaScript | Lógica da aplicação |
| Framer Motion | Animações e transições |
| Lucide React | Ícones de interface |
| CSS3 | Estilização e responsividade |
| ESLint | Qualidade e padronização do código |
| Git | Controle de versão |
| GitHub | Repositório e integração contínua |
| Azure Static Web Apps | Hospedagem e deploy |

---

## 🧩 Arquitetura

A aplicação foi organizada para separar componentes, páginas, dados e estilos:

```text
curriculo-sky/
│
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── foto_curriculo.png
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Publications.jsx
│   │   └── Skills.jsx
│   │
│   ├── data/
│   │   ├── education.js
│   │   ├── projects.js
│   │   ├── publications.js
│   │   └── skills.js
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ✦ Seções

O portfólio está estruturado nas seguintes áreas:

**01 · Início**  
Apresentação, especialidades e principais indicadores da trajetória.

**02 · Sobre**  
Contexto profissional e áreas de interesse.

**03 · Projetos**  
Projetos profissionais, acadêmicos e protótipos de UX/UI.

**04 · Experiência**  
Experiência profissional na gestão de loja, atendimento, operação e processos.

**05 · Formação**  
Graduação, pós-graduação e formação complementar.

**06 · Publicações**  
Pesquisas científicas publicadas na área de tecnologia e inteligência artificial.

**07 · Competências**  
Tecnologias, IA, dados, UX/UI, cloud, DevOps, gestão e habilidades interpessoais.

**08 · Contato**  
Canais profissionais para contato e oportunidades.

---

## 🚀 Executando localmente

### 1. Clone o repositório

```bash
git clone https://github.com/SkYantS28/curriculo-sky.git
```

### 2. Entre na pasta

```bash
cd curriculo-sky
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute em desenvolvimento

```bash
npm run dev
```

O Vite disponibilizará a aplicação no endereço local exibido no terminal.

---

## 🔎 Qualidade do código

O projeto utiliza ESLint para identificar problemas no código durante o desenvolvimento.

Execute:

```bash
npm run lint
```

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

---

## ☁️ Deploy

O projeto utiliza **Azure Static Web Apps** para hospedagem.

O deploy é integrado ao GitHub por meio de **GitHub Actions**.

O workflow localizado em:

```text
.github/workflows/azure-static-web-apps.yml
```

é responsável por:

1. receber alterações na branch `main`;
2. instalar e preparar o projeto;
3. executar o processo de build;
4. gerar os arquivos de produção na pasta `dist`;
5. publicar a aplicação no Azure Static Web Apps.

O token de publicação é armazenado como secret no GitHub e não faz parte do código-fonte.

---

## 🎨 Direção visual

A identidade visual do projeto foi construída para fugir do padrão tradicional de portfólios de desenvolvedores.

### Conceito

**Tecnologia com identidade.**

A interface combina referências de:

- design editorial;
- portfólios contemporâneos;
- interfaces de produtos digitais;
- tipografia expressiva;
- composição assimétrica;
- motion design.

### Tipografia

- **Playfair Display** — títulos e elementos editoriais;
- **DM Sans** — textos, informações e interface.

### Paleta

A base visual utiliza:

- roxo profundo;
- lilás;
- rosa;
- dourado;
- branco;
- tons escuros de apoio.

A intenção é criar uma experiência tecnológica sem recorrer à estética tradicional de “hacker”, neon ou interfaces excessivamente futuristas.

---

## 📌 Projetos apresentados

### Academia Elite

Sistema web privado desenvolvido para gerenciamento de funcionários e jornadas de trabalho.

**Stack:** React · Vite · JavaScript · Supabase · PostgreSQL · Azure

> Projeto privado desenvolvido para uso real. O código e o acesso ao sistema não são disponibilizados publicamente.

### Lenormand Secrets

Plataforma profissional desenvolvida para apresentação de serviços, catálogo, agendamentos e experiência digital da marca.

**Stack:** React · Vite · JavaScript · HTML5 · CSS3 · Azure

### Pizzaria Veneto

Projeto acadêmico Full Stack desenvolvido para apoiar operações e gestão de uma pizzaria.

**Stack:** React · Vite · FastAPI · Python · MongoDB · Docker

### UX/UI

O portfólio também reúne protótipos desenvolvidos no Figma, incluindo:

- Mumbucash
- Churrasco
- Unicar
- Veneto Desktop
- Veneto Mobile
- Bato
- Bola na Rede

---

## 🔬 Pesquisa

O portfólio apresenta duas publicações científicas relacionadas a tecnologia e inteligência artificial:

**Análise exploratória de tecnologias inteligentes para autonomia e acessibilidade em ambientes assistidos**

Pesquisa sobre tecnologias inteligentes, inteligência artificial, machine learning e IoT aplicadas à autonomia, acessibilidade e bem-estar.

**Inteligência artificial e cognição humana em perspectiva sobre neuroplasticidade e dependência cognitiva**

Pesquisa interdisciplinar sobre impactos da inteligência artificial em aprendizagem, atenção, memória, pensamento crítico, neuroplasticidade e dependência cognitiva.

---

## 📚 Formação

**Engenharia de Software**  
Universidade de Vassouras · Campus Maricá  
2023 — 2027

**Engenharia de Software em IA Aplicada**  
Pós-graduação / Especialização  
2026 — 2027

Além da formação acadêmica, o projeto apresenta cursos complementares em desenvolvimento web, UX/UI, design, ferramentas digitais, marketing e inteligência artificial.

---

## 🛠️ Scripts disponíveis

```bash
# Desenvolvimento
npm run dev

# Verificação de código
npm run lint

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## 👩‍💻 Autoria

**Sky Crizosti**

Estudante de Engenharia de Software com interesses em:

`Desenvolvimento de Software` · `IA Aplicada` · `UX/UI` · `Análise de Dados`

GitHub: **SkYantS28**  
LinkedIn: **Sky Crizosti**

---

## ✦ Filosofia do projeto

> Um currículo mostra o que você fez.  
> Um portfólio mostra como você pensa.

Este projeto foi desenvolvido para unir os dois.

---

<p align="center">
  desenvolvido com React, curiosidade e muitas horas de código.
</p>
