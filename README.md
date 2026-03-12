# Eduardo Donato — Personal Site

Meu site pessoal / portfólio, construído com **React**, **TypeScript**, **Tailwind CSS v4** e **Vite**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

## ✨ Funcionalidades

- **Dark / Light mode** — respeita a preferência do sistema e permite alternância manual
- **Design responsivo** — layout adaptado para mobile, tablet e desktop
- **Animações suaves** — transições de entrada e micro-interações via CSS
- **Ícones** — biblioteca [Lucide React](https://lucide.dev/) para ícones consistentes e leves

## 🛠️ Tech Stack

| Camada      | Tecnologia                                                       |
| ----------- | ---------------------------------------------------------------- |
| Framework   | [React 19](https://react.dev/)                                   |
| Linguagem   | [TypeScript 5.9](https://www.typescriptlang.org/)                |
| Estilização | [Tailwind CSS 4](https://tailwindcss.com/)                       |
| Bundler     | [Vite 7](https://vite.dev/)                                      |
| Ícones      | [Lucide React](https://lucide.dev/)                              |
| Lint        | [ESLint](https://eslint.org/) + plugins React                    |

## 🚀 Primeiros Passos

### Pré-requisitos

- **Node.js** ≥ 20
- **npm** (incluído com o Node.js)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ebdonato/personal-site.git
cd personal-site

# Instale as dependências
npm install
```

### Scripts Disponíveis

```bash
# Servidor de desenvolvimento com HMR
npm run dev

# Build de produção (TypeScript + Vite)
npm run build

# Pré-visualização do build de produção
npm run preview

# Verificação de lint
npm run lint
```

## 📁 Estrutura do Projeto

```text
personal-site/
├── public/
│   └── eu.png              # Foto de perfil / favicon
├── src/
│   ├── App.tsx              # Componente principal da aplicação
│   ├── App.css              # Estilos do componente App
│   ├── index.css            # Estilos globais + Tailwind
│   ├── main.tsx             # Ponto de entrada React
│   └── assets/              # Assets estáticos
├── index.html               # Template HTML
├── vite.config.ts           # Configuração do Vite
├── tsconfig.json            # Configuração base do TypeScript
├── tsconfig.app.json        # Configuração TS para a aplicação
├── tsconfig.node.json       # Configuração TS para o Node
├── eslint.config.js         # Configuração do ESLint
└── package.json
```

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados.

---

Construído com ☕ por **Eduardo Donato**
