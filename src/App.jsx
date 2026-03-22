import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Smartphone,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import './App.css';

// Importar imagens
import heroImage from './assets/C095IH8eEQC4.jpg';
import techBg from './assets/ERookbuDauSc.jpg';
import projectImage1 from './assets/GiPHac3PD29g.jpg';
import projectImage2 from './assets/TRmYVtDSHzq6.jpg';

const App = () => {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('Enviando...');
    setIsSuccess(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/xanbvnkd", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus('Mensagem enviada com sucesso! ✅');
        setIsSuccess(true);
        e.target.reset();
      } else {
        setStatus('Erro ao enviar. ❌');
        setIsSuccess(false);
      }
    } catch {
      setStatus('Erro de conexão. ❌');
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: [
      { name: 'React.js', level: 95, color: '#61DAFB' },
      { name: 'Vue.js', level: 90, color: '#4FC08D' },
      { name: 'Angular', level: 85, color: '#DD0031' },
      { name: 'JavaScript', level: 95, color: '#F7DF1E' },
      { name: 'TypeScript', level: 90, color: '#3178C6' },
      { name: 'HTML5/CSS3', level: 95, color: '#E34F26' }
    ],
    backend: [
      { name: 'Node.js', level: 90, color: '#339933' },
      { name: 'Python', level: 85, color: '#3776AB' },
      { name: 'Java', level: 80, color: '#007396' },
      { name: 'PHP', level: 75, color: '#777BB4' },
      { name: 'Express.js', level: 90, color: '#000000' },
      { name: 'Django', level: 80, color: '#092E20' }
    ],
    database: [
      { name: 'MySQL', level: 90, color: '#4479A1' },
      { name: 'PostgreSQL', level: 85, color: '#336791' },
      { name: 'MongoDB', level: 85, color: '#47A248' },
      { name: 'Firebase', level: 80, color: '#FFCA28' },
      { name: 'Redis', level: 75, color: '#DC382D' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 95, color: '#F05032' },
      { name: 'Docker', level: 80, color: '#2496ED' },
      { name: 'AWS', level: 75, color: '#FF9900' },
      { name: 'Webpack', level: 85, color: '#8DD6F9' },
      { name: 'Jest', level: 80, color: '#C21325' }
    ]
  };

  const projects = [
    {
      id: 1,
      title: 'Conversor de Moedas',
      description: 'Aplicação web completa para conversão de moedas em tempo real com gráficos interativos, mapa mundial e notícias econômicas. Desenvolvida com JavaScript vanilla e APIs de cotação.',
      image: projectImage1,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'API REST', 'Charts.js'],
      liveUrl: 'https://yurihbo.github.io/conversor-de-moedas/',
      githubUrl: 'https://github.com/yurihbo/conversor-de-moedas',
      features: [
        'Conversão em tempo real de 20+ moedas',
        'Gráficos históricos interativos',
        'Mapa mundial com seleção de países',
        'Feed de notícias econômicas',
        'Interface responsiva e moderna'
      ]
    },
    {
      id: 2,
      title: 'Lista Interativa de Mercado',
      description: 'Lista de compras inteligente com interface moderna e funcionalidades avançadas. Permite adicionar, editar e remover itens com cálculo automático de totais.',
      image: projectImage2,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage', 'Responsive Design'],
      liveUrl: 'https://yurihbo.github.io/Lista-de-Mercado-/',
      githubUrl: 'https://github.com/yurihbo/Lista-de-Mercado-',
      features: [
        'Interface intuitiva e responsiva',
        'Persistência de dados local',
        'Cálculo automático de totais',
        'Animações suaves',
        'Design moderno com gradientes'
      ]
    },

    {
  id: 3,
  title: 'Gestão de Gastos',
  description: 'Aplicação web progressiva (PWA) para controle financeiro pessoal, com gerenciamento de receitas e despesas, visualização de dados através de gráficos interativos e suporte offline com cache inteligente.',
  image: projectImage1,
  technologies: [
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'PWA',
    'Service Workers',
    'LocalStorage',
    'Charts.js',
    'Responsive Design'
  ],
  liveUrl: 'https://yurihbo.github.io/gestao-gastos/',
  githubUrl: 'https://github.com/Yurihbo/gestao-gastos',
  features: [
    'Controle de receitas e despesas com edição e exclusão',
    'Visualização de gastos mensais com gráficos interativos',
    'Cálculo automático de saldo e organização financeira',
    'Funcionamento offline com cache (PWA)',
    'Interface responsiva e otimizada para mobile'
  ]
}
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
            >
              Yuri.dev
            </motion.div>

            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item === 'home' ? 'Início' : 
                   item === 'about' ? 'Sobre' :
                   item === 'skills' ? 'Habilidades' :
                   item === 'projects' ? 'Projetos' : 'Contato'}
                </button>
              ))}
            </div>

          
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

       
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-800 border-t border-slate-700"
            >
              <div className="px-4 py-2 space-y-2">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-2 px-4 rounded hover:bg-slate-700 transition-colors"
                  >
                    {item === 'home' ? 'Início' : 
                     item === 'about' ? 'Sobre' :
                     item === 'skills' ? 'Habilidades' :
                     item === 'projects' ? 'Projetos' : 'Contato'}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

     
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${techBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                Yuri
              </span>
            </h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 mb-8"
            >
              Desenvolvedor Full Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Criando soluções digitais inovadoras que conectam ideias e pessoas. 
              Especializado em tecnologias modernas e sempre em busca de novos desafios.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Ver Projetos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300"
              >
                Entre em Contato
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </section>

     
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={heroImage}
                alt="Workspace"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou um desenvolvedor full stack apaixonado por criar soluções digitais que fazem a diferença. 
                Com experiência sólida tanto no frontend quanto no backend, trabalho com as tecnologias mais 
                modernas do mercado para entregar produtos de alta qualidade.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Minha jornada na programação começou com curiosidade e evoluiu para uma paixão por resolver 
                problemas complexos através do código. Estou sempre aprendendo novas tecnologias e 
                metodologias para me manter atualizado com as tendências do mercado.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">3+</div>
                  <div className="text-gray-300">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-slate-700 rounded-lg">
                  <div className="text-3xl font-bold text-green-400">15+</div>
                  <div className="text-gray-300">Projetos Concluídos</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      <section id="skills" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Habilidades
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  {category === 'frontend' && <Code className="text-blue-400 mr-2" size={24} />}
                  {category === 'backend' && <Server className="text-green-400 mr-2" size={24} />}
                  {category === 'database' && <Database className="text-purple-400 mr-2" size={24} />}
                  {category === 'tools' && <Smartphone className="text-orange-400 mr-2" size={24} />}
                  <h3 className="text-xl font-semibold capitalize">
                    {category === 'frontend' ? 'Frontend' :
                     category === 'backend' ? 'Backend' :
                     category === 'database' ? 'Banco de Dados' : 'Ferramentas'}
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillList.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="projects" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Projetos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-lg overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Principais Funcionalidades:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Ver Projeto
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border-2 border-gray-600 rounded-lg text-gray-300 font-semibold hover:border-gray-500 hover:text-white transition-all duration-300"
                    >
                      <Github size={16} className="mr-2" />
                      Código
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Vamos Conversar?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Estou sempre aberto a novas oportunidades e projetos interessantes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <Mail className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">yuridesousasilva@gmail.com</p>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <Github className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">github.com/yurihbo</p>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <Linkedin className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">www.linkedin.com/in/yuri-de-sousa-silva</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text" name="nome"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email" name="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit" disabled={isSending}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensagem
              </button>
            {status && (<p className={`text-center mt-4 text-sm ${isSuccess ? "text-green-400" : "text-red-400"}`}>{status}</p>)}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Yuri - Desenvolvedor Full Stack. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
