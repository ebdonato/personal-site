import { useEffect, useState } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Moon,
  Sun,
} from "lucide-react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    // Animação de entrada — defer para o browser pintar o estado inicial (opacity-0) primeiro
    const frameId = requestAnimationFrame(() => setIsVisible(true));

    // Listener para reagir caso o usuário mude a preferência do SO enquanto navega
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      cancelAnimationFrame(frameId);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    "Go (Golang)",
    "TypeScript",
    "Node.js",
    "React",
    "Vue.js",
    "Python",
    "PostgreSQL",
    "Supabase",
    "AWS",
    "GraphQL",
    "Power BI",
    "Engenharia de Software",
  ];

  const experiences = [
    {
      company: "Dock",
      role: "Engenheiro de Software",
      period: "Nov 2021 — Presente",
      description:
        "Desenvolvimento de aplicações e produtos de backoffice financeiro. Atuação Full Stack construindo frontends em React e backends escaláveis em Node.js/TypeScript e Python. Responsável por ponta a ponta: arquitetura, implementação e implantação de novas APIs e funcionalidades, focando em soluções eficientes e código limpo.",
    },
    {
      company: "Eletromarquez",
      role: "Analista de Desenvolvimento",
      period: "Abr 2020 — Nov 2021",
      description:
        "Responsável pela modelagem, desenvolvimento e implantação de um Sistema Integrado de Gestão Empresarial (ERP) moderno utilizando Vue.js, Node.js e PostgreSQL. Automação de processos rotineiros via scripts e Microsoft Power Platform, além de desenvolvimento de relatórios gerenciais avançados com Power BI.",
    },
  ];

  return (
    // O wrapper principal recebe a classe 'dark' dinamicamente baseada no estado
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800 selection:text-black dark:selection:text-white transition-colors duration-300">
        <main
          className={`max-w-2xl mx-auto px-6 py-12 sm:py-24 transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Top Bar - Botão de Tema */}
          <div className="flex justify-end mb-10">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-neutral-200 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all shadow-sm"
              aria-label="Alternar tema"
              title={
                isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"
              }
            >
              {isDarkMode ? (
                <Sun size={18} strokeWidth={2.5} />
              ) : (
                <Moon size={18} strokeWidth={2.5} />
              )}
            </button>
          </div>

          {/* Cabeçalho / Hero */}
          <header className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3">
              Eduardo DONATO
            </h1>
            <h2 className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 font-medium mb-6">
              Engenheiro de Software & Desenvolvedor Full Stack
            </h2>

            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
              Engenheiro Eletricista de formação com especialização em{" "}
              <strong className="dark:text-white">Go</strong> e{" "}
              <strong className="dark:text-white">
                Engenharia de Planejamento
              </strong>
              . Transformo problemas complexos em soluções web escaláveis,
              desenvolvendo desde APIs robustas até interfaces modernas e
              intuitivas.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center text-neutral-500 dark:text-neutral-400">
                <MapPin size={16} className="mr-1.5" />
                Cachoeiro de Itapemirim, ES
              </div>
            </div>
          </header>

          {/* Contatos */}
          <section className="mb-16 flex flex-wrap gap-4">
            <a
              href="https://github.com/ebdonato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
            >
              <GithubIcon size={18} />
              <span className="font-medium text-sm">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/ebdonato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all text-neutral-700 dark:text-neutral-300 hover:text-[#0A66C2] dark:hover:text-[#3b82f6]"
            >
              <LinkedinIcon size={18} />
              <span className="font-medium text-sm">LinkedIn</span>
            </a>

            <a
              href="https://navto.me/ebdonato"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border border-neutral-900 dark:border-white rounded-lg shadow-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
            >
              <Mail size={18} />
              <span className="font-medium text-sm">Contato</span>
            </a>
          </section>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-16" />

          {/* Habilidades */}
          <section className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6 flex items-center gap-2">
              <Code2 size={16} />
              Habilidades Principais
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 text-sm rounded-md border border-neutral-200/60 dark:border-neutral-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experiência */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-8">
              Experiência Recente
            </h3>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h4 className="text-base font-semibold text-neutral-900 dark:text-white">
                      {exp.role}{" "}
                      <span className="text-neutral-400 dark:text-neutral-500 font-normal">
                        na
                      </span>{" "}
                      {exp.company}
                    </h4>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 sm:mt-0 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="https://linkedin.com/in/ebdonato"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Ver histórico completo no LinkedIn
                <ExternalLink size={14} />
              </a>
            </div>
          </section>

          {/* Rodapé */}
          <footer className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-800/50 text-center text-sm text-neutral-400 dark:text-neutral-500">
            <p>
              © {new Date().getFullYear()} Eduardo Donato. Construído com React
              & Tailwind por Gemini.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
