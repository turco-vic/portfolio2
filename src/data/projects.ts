import type { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'projeto-um',
    title: 'Nome do Projeto Um',
    year: '2025',
    category: 'Web App',
    tags: ['React', 'TypeScript', 'Node.js'],
    summary:
      'Uma breve descrição do projeto que aparece nos cards e no topo da página de detalhes.',
    role: 'Full-Stack Developer',
    duration: '3 meses',
    client: 'Pessoal',
    cover: '01',
    links: {
      live: 'https://example.com',
      github: 'https://github.com/seu-usuario/projeto-um',
    },
    content: `
      <h3>Visão geral</h3>
      <p>Descreva aqui o contexto do projeto: qual problema ele resolve, para quem foi feito e o que motivou sua criação.</p>

      <h3>O desafio</h3>
      <p>Detalhe os principais desafios técnicos ou de design enfrentados.</p>

      <h3>A solução</h3>
      <p>Como você abordou o problema. Que decisões técnicas foram tomadas e por quê.</p>

      <ul>
        <li>Funcionalidade ou destaque um</li>
        <li>Funcionalidade ou destaque dois</li>
        <li>Funcionalidade ou destaque três</li>
      </ul>

      <h3>Resultado</h3>
      <p>O que foi alcançado. Métricas, aprendizados, impacto.</p>
    `,
  },
  {
    id: 'projeto-dois',
    title: 'Projeto Dois',
    year: '2024',
    category: 'Mobile',
    tags: ['React Native', 'Firebase'],
    summary:
      'Outro projeto incrível com uma descrição curta para o card de listagem.',
    role: 'Mobile Developer',
    duration: '6 meses',
    client: 'Cliente XYZ',
    cover: '02',
    links: {
      live: 'https://example.com',
      github: 'https://github.com/seu-usuario/projeto-dois',
    },
    content: `
      <h3>Visão geral</h3>
      <p>Substitua este texto pelo conteúdo real do seu projeto.</p>
    `,
  },
  {
    id: 'projeto-tres',
    title: 'API de Dados',
    year: '2024',
    category: 'Backend',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    summary: 'API REST escalável para processamento de dados em tempo real.',
    role: 'Backend Developer',
    duration: '2 meses',
    client: 'Pessoal',
    cover: '03',
    links: {
      github: 'https://github.com/seu-usuario/projeto-tres',
    },
    content: `
      <h3>Sobre</h3>
      <p>Conteúdo do projeto.</p>
    `,
  },
  {
    id: 'projeto-quatro',
    title: 'Dashboard Analytics',
    year: '2023',
    category: 'Web App',
    tags: ['Next.js', 'D3.js', 'Tailwind'],
    summary: 'Painel de visualização de dados com gráficos interativos.',
    role: 'Front-End Developer',
    duration: '4 meses',
    client: 'Empresa ABC',
    cover: '04',
    links: {
      live: 'https://example.com',
    },
    content: `
      <h3>Sobre</h3>
      <p>Conteúdo do projeto.</p>
    `,
  },
];

export const CATEGORIES: string[] = [
  'Todos',
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];
