import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Code, 
  Database, 
  Server, 
  Briefcase,
  GraduationCap,
  Target,
  ExternalLink,
  Download,
  Star,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

function App() {
  const handleHireMe = () => {
    window.location.href = 'mailto:williamaraujo2707@gmail.com?subject=Oportunidade de Trabalho&body=Olá William, gostaria de conversar sobre uma oportunidade...';
  };

  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = '/curriculo_william.pdf'; // Arquivo na pasta public
      link.download = 'William-Araujo-Curriculo.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "✅ Download realizado!",
        description: "O currículo foi baixado com sucesso!"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "❌ Erro no download",
        description: "Ocorreu um erro ao baixar o currículo. Por favor, tente novamente."
      });
    }
  };

  const handleProjectClick = (githubPath) => {
    window.open(`https://github.com/${githubPath}`, '_blank');
  };

  const skills = [
    { name: 'PHP', level: 'Avançado', icon: Code, color: 'from-purple-500 to-pink-500' },
    { name: 'Java Spring Boot', level: 'Intermediário', icon: Server, color: 'from-green-500 to-blue-500' },
    { name: 'MySQL', level: 'Avançado', icon: Database, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 'Intermediário', icon: Code, color: 'from-yellow-500 to-orange-500' },
    { name: 'PostgreSQL', level: 'Intermediário', icon: Database, color: 'from-blue-500 to-indigo-500' },
    { name: 'Git/GitHub', level: 'Avançado', icon: Github, color: 'from-gray-500 to-gray-700' }
  ];

  const projects = [
    {
      title: 'API de Controle de Finanças Pessoais',
      description: 'Sistema completo para gestão financeira pessoal com categorização de gastos',
      tech: 'Java Spring Boot, MySQL',
      status: 'Em desenvolvimento',
      github: 'WilliamOut/finances'
    },
    {
      title: 'API de Agendamento Médico',
      description: 'Sistema de agendamento com validações e controle de disponibilidade',
      tech: 'PHP PDO, MySQL, Arquitetura MVC',
      status: 'Concluído',
      github: 'WilliamOut/API_AGENDAMENTO'
    },
    {
      title: 'API Medidor de Força de Senhas',
      description: 'Validador inteligente com múltiplos critérios de segurança',
      tech: 'Java Spring Boot, API RESTful',
      status: 'Concluído',
      github: 'WilliamOut/Api-RestFul-Spring-Boot-medidor-de-senha'
    },
    {
      title: 'API de Transações Financeiras',
      description: 'Sistema bancário com validações robustas e tratamento de exceções',
      tech: 'Java Spring Boot, Validation, Exception Handling',
      status: 'Concluído',
      github: 'WilliamOut/Desafio-Spring-Boot'
    },
    {
      title: 'API de Gestão de Funcionários',
      description: 'Sistema corporativo para controle de RH com relatórios',
      tech: 'PHP PDO, MySQL, CRUD Completo',
      status: 'Concluído',
      github: 'WilliamOut/API-funcionarios'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Toaster />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              className="mb-8"
              variants={scaleIn}
            >
              <div className="relative inline-block">
                <img 
                  src="https://avatars.githubusercontent.com/u/129528912?v=4" 
                  alt="William Araújo - Desenvolvedor Back-End"
                  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 glow-effect floating-animation"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full pulse-glow"></div>
                </div>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={fadeInUp}
            >
              <span className="gradient-text">William Araújo</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              variants={fadeInUp}
            >
              Desenvolvedor Back-End | PHP | Java Spring Boot | API REST
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Salvador, BA</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <Mail className="w-4 h-4 text-green-400" />
                <span>williamaraujo2707@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>71 985391138</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={fadeInUp}
            >
              <Button 
                onClick={handleHireMe}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 glow-effect"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contrate-me
              </Button>
              <Button 
                onClick={handleDownloadCV}
                variant="outline"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button 
                onClick={() => window.open('https://github.com/WilliamOut', '_blank')}
                variant="outline"
                className="border-2 border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 section-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              <span className="gradient-text">Resumo Profissional</span>
            </motion.h2>

            <motion.div 
              className="glass-effect rounded-2xl p-8 mb-12"
              variants={fadeInUp}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Desenvolvedor Back-End com <strong className="text-blue-400">1+ anos de experiência</strong> em desenvolvimento de 
                APIs REST e sistemas web robustos. Especializado em <strong className="text-purple-400">PHP</strong> e <strong className="text-green-400">Java Spring Boot</strong>, 
                com sólida experiência em arquitetura MVC, otimização de banco de dados e 
                integração de sistemas.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Atualmente cursando <strong className="text-yellow-400">Ciência da Computação (5º semestre)</strong> e buscando oportunidades para contribuir com soluções tecnológicas 
                inovadoras.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={staggerContainer}
            >
              <motion.div 
                className="tech-card"
                variants={scaleIn}
              >
                <Server className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">APIs REST Escaláveis</h3>
                <p className="text-gray-400">Desenvolvimento de APIs performáticas e escaláveis</p>
              </motion.div>

              <motion.div 
                className="tech-card"
                variants={scaleIn}
              >
                <Code className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Arquitetura MVC</h3>
                <p className="text-gray-400">Design patterns e arquitetura de software</p>
              </motion.div>

              <motion.div 
                className="tech-card"
                variants={scaleIn}
              >
                <Database className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Otimização de BD</h3>
                <p className="text-gray-400">Consultas e procedures MySQL otimizadas</p>
              </motion.div>

              <motion.div 
                className="tech-card"
                variants={scaleIn}
              >
                <Briefcase className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Integração de Sistemas</h3>
                <p className="text-gray-400">Integração com bibliotecas e sistemas externos</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              <span className="gradient-text">Experiência Profissional</span>
            </motion.h2>

            <motion.div 
              className="glass-effect rounded-2xl p-8"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Desenvolvedor Back-End</h3>
                  <p className="text-blue-400 font-semibold mb-2">MITIKAS Tecnologia da Informação</p>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Out 2024 - Dez 2024</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Desenvolveu soluções em PHP puro para sistemas corporativos de alta performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Implementou geração automatizada de relatórios utilizando biblioteca FPDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Criou e otimizou procedures e funções MySQL para melhorar performance dos sistemas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Colaborou no desenvolvimento de funcionalidades críticas para softwares empresariais</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Manteve comunicação constante com banco de dados MySQL para operações complexas</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 section-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              <span className="gradient-text">Competências Técnicas</span>
            </motion.h2>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="tech-card group"
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-400">{skill.level}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-12 glass-effect rounded-2xl p-8"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="gradient-text">Outras Competências</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Frameworks & Tecnologias</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Spring Boot</li>
                    <li>• jQuery</li>
                    <li>• PDO</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Idiomas</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Português (Nativo)</li>
                    <li>• Inglês (Avançado)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              <span className="gradient-text">Projetos em Destaque</span>
            </motion.h2>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  className="project-card p-6 relative z-10"
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                >
                  <img  
                    className="w-full h-48 object-cover rounded-lg mb-6" 
                    alt={project.title}
                    src="https://images.unsplash.com/photo-1644995722044-6cd197ffb440" 
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.split(', ').map(tech => (
                        <span 
                          key={tech} 
                          className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`${project.status === 'Em desenvolvimento' ? 'text-yellow-400' : 'text-green-400'} text-sm`}>
                        {project.status}
                      </span>
                      <Button 
                        onClick={() => handleProjectClick(project.github)}
                        variant="ghost" 
                        size="sm"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 section-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              <span className="gradient-text">Formação Acadêmica</span>
            </motion.h2>

            <motion.div 
              className="glass-effect rounded-2xl p-8"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Bacharelado em Ciência da Computação</h3>
                  <p className="text-blue-400 font-semibold mb-2">UNIJORGE</p>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Fev 2023 - Dez 2026</span>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-yellow-400 font-semibold">Cursando 5º semestre</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              <span className="gradient-text">Objetivos Profissionais</span>
            </motion.h2>

            <motion.div 
              className="glass-effect rounded-2xl p-8"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Busco oportunidades como <strong className="text-blue-400">Desenvolvedor Back-End</strong> onde possa aplicar minha 
                    experiência em desenvolvimento de APIs, contribuir para projetos desafiadores e 
                    continuar evoluindo tecnicamente em um ambiente colaborativo e inovador.
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-300">
                    "Focado em escrever código limpo, escalável e em constante aprendizado de 
                    novas tecnologias para entregar soluções de qualidade."
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 section-bg">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              variants={fadeInUp}
            >
              <span className="gradient-text">Vamos Trabalhar Juntos?</span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-300 mb-12"
              variants={fadeInUp}
            >
              Estou sempre aberto a novas oportunidades e projetos desafiadores. 
              Entre em contato e vamos conversar!
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              <Button 
                onClick={handleHireMe}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 glow-effect"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </Button>
              <Button 
                onClick={() => window.open('https://github.com/WilliamOut', '_blank')}
                variant="outline"
                className="border-2 border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2" />
                Ver GitHub
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 William Araújo
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;