# Portfolio — React + TypeScript

Portfólio pessoal em **Vite + React 18 + TypeScript + React Router + Framer Motion + CSS Modules**. Minimalista, profissional, com dark/light mode.

## Stack

- ⚡ **Vite 6** — build rápido
- ⚛️ **React 18** + **TypeScript**
- 🛣️ **React Router 6** — rotas reais
- 🎬 **Framer Motion** — animações suaves
- 🎨 **CSS Modules** — estilos escopados, sem framework

## Passo a passo (do zero)

### 1. Pré-requisitos
- **Node.js 18+** instalado ([baixar aqui](https://nodejs.org))
- Editor (recomendo VS Code)
- Git instalado

### 2. Instalar dependências
Dentro da pasta do projeto:

```bash
npm install
```

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`. Hot reload ativo — qualquer edição aparece na hora.

### 4. Build de produção

```bash
npm run build
```

Gera a pasta `dist/` pronta pra deploy.

### 5. Preview do build

```bash
npm run preview
```

## Estrutura do projeto

```
portfolio/
├── index.html                    # HTML raiz (Vite)
├── package.json
├── tsconfig.json                 # com path alias @/* → src/*
├── vite.config.ts
└── src/
    ├── main.tsx                  # Entry point
    ├── App.tsx                   # Rotas
    ├── components/               # Componentes reutilizáveis
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx              # Landing
    │   ├── About.tsx             # Seção sobre
    │   ├── Featured.tsx          # Projetos em destaque
    │   ├── Contact.tsx
    │   └── Reveal.tsx            # Animação de scroll
    ├── pages/
    │   ├── HomePage.tsx          # Compõe Hero + About + Featured + Contact
    │   ├── ProjectsPage.tsx      # Listagem com filtros
    │   └── ProjectDetailPage.tsx # Detalhe individual
    ├── context/
    │   └── ThemeContext.tsx      # Gerencia dark/light
    ├── data/
    │   └── projects.ts           # << EDITE AQUI os projetos
    ├── types/
    │   └── index.ts              # Types TS
    ├── hooks/
    │   └── useInView.ts
    └── styles/
        └── global.css            # Variáveis CSS e reset
```

## Rotas

| Rota | Página |
|------|--------|
| `/` | Home (Hero + About + Featured + Contact) |
| `/projetos` | Lista todos os projetos com filtros |
| `/projetos/:id` | Detalhe do projeto |

Âncoras na home: `/#sobre`, `/#contato`.

## Como personalizar

### 1. Suas informações
Edite os arquivos em `src/components/`:
- **Hero.tsx** — título, subtítulo, meta info
- **About.tsx** — texto sobre você e array `SKILLS`
- **Contact.tsx** — email e array `SOCIALS`
- **Navbar.tsx** — logo (atualmente "S.")
- **Footer.tsx** — nome no copyright

### 2. Adicionar/editar projetos
Edite **`src/data/projects.ts`**. O array `PROJECTS` é tipado com `Project[]`, então o TS te avisa se faltar algum campo.

```ts
{
  id: 'meu-projeto',           // usado na URL: /projetos/meu-projeto
  title: 'Meu Projeto',
  year: '2025',
  category: 'Web App',         // gera filtros automaticamente
  tags: ['React', 'Node.js'],
  summary: 'Descrição curta.',
  role: 'Full-Stack Developer',
  duration: '3 meses',
  client: 'Pessoal',
  cover: '01',                 // ou 'https://exemplo.com/img.jpg'
  links: {
    live: 'https://...',
    github: 'https://...'
  },
  content: `
    <h3>Título</h3>
    <p>Conteúdo HTML.</p>
  `
}
```

### 3. Cores e fontes
Edite `src/styles/global.css`. As variáveis CSS principais:

```css
:root {
  --accent: #c8553d;            /* destaque (light) */
  --font-display: 'Fraunces', serif;
  --font-body: 'Inter', sans-serif;
}

[data-theme='dark'] {
  --accent: #e87a5d;            /* destaque (dark) */
}
```

## Deploy

### Vercel (mais fácil)
1. Crie conta em [vercel.com](https://vercel.com)
2. Faça push pro GitHub
3. Importe o repositório — detecta Vite automaticamente
4. Deploy

### Netlify
1. Conecte o repositório
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
Adicione em `vite.config.ts`:
```ts
export default defineConfig({
  base: '/nome-do-repo/',
  // ...
});
```
E use a action `peaceiris/actions-gh-pages` ou faça deploy manual da `dist/`.

## Features inclusas

- ✓ Dark/light mode com persistência (localStorage) + preferência do sistema
- ✓ Animação anti-flash de tema (script no `index.html`)
- ✓ Totalmente responsivo (mobile menu, breakpoints)
- ✓ Animações Framer Motion (entrada, scroll reveal, stagger)
- ✓ Animação de transição na lista de projetos ao filtrar
- ✓ Navegação prev/next entre projetos
- ✓ Scroll suave pra âncoras (`/#sobre`, `/#contato`)
- ✓ Path alias `@/` → `src/`
- ✓ TypeScript strict mode
- ✓ Build otimizado (~98kb gzipped)
