import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MapPin, Mail, ArrowRight, User, 
  BookOpen, Award, Lock, LogIn, LayoutDashboard, Database, 
  FileText, Users, FlaskConical, Trophy, Bus, Moon, Home as HomeIcon,
  Clock, Cpu, Globe, ArrowUpRight, ChevronRight, Zap, ShieldCheck, Code
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatBot from './components/ChatBot';
import { Page } from './types';
import { 
  NAVIGATION_ITEMS, COLLEGE_NAME, HERO_IMAGES, NEWS_UPDATES, 
  DEPARTMENTS, FACILITIES, GALLERY_ITEMS, MOCK_APPLICATIONS 
} from './constants';

// --- Shared Components ---

const Button: React.FC<{ children: React.ReactNode; onClick?: () => void; variant?: 'primary' | 'secondary' | 'ghost'; className?: string }> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = "relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-white/10 text-white hover:bg-white/15 border border-white/5 backdrop-blur-md",
    ghost: "text-muted hover:text-white"
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Card: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = '', hoverEffect = true }) => (
  <div className={`glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group ${className}`}>
    {hoverEffect && (
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    )}
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const SectionHeader: React.FC<{ title: string; subtitle: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

const DeveloperCredit: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      className="fixed bottom-4 left-4 z-50 flex items-center gap-3 bg-black/80 backdrop-blur-lg border border-white/10 pl-2 pr-4 py-2 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] group hover:border-white/20 transition-colors"
    >
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white shadow-lg">
        <Code size={14} />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-muted font-medium uppercase tracking-wider leading-none mb-1">Designed & Developed by</span>
        <span className="text-xs text-white font-bold font-display leading-none">Muhammad Sultan Ul Arifeen</span>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="ml-2 p-1 hover:bg-white/10 rounded-full text-muted hover:text-white transition-colors"
      >
        <X size={12} />
      </button>
    </motion.div>
  );
};

// --- Header ---
const Header: React.FC<{ activePage: Page; setPage: (p: Page) => void }> = ({ activePage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-heavy py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => setPage(Page.HOME)}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white to-gray-400 flex items-center justify-center text-black shadow-lg shadow-white/10">
                <Zap size={20} fill="currentColor" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-display font-bold text-lg leading-none text-white tracking-tight">
                  FGSDC
                </span>
                <span className="text-xs text-muted font-medium">
                  Future Campus
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1.5 border border-white/5 backdrop-blur-md">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setPage(item.page as Page)}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-full ${
                    activePage === item.page 
                      ? 'text-white bg-white/10 shadow-inner' 
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
               <button 
                onClick={() => setPage(Page.ADMIN)}
                className="text-sm font-medium text-muted hover:text-white transition-colors flex items-center gap-2"
              >
                <Lock size={14} /> Staff
              </button>
              <Button onClick={() => setPage(Page.ADMISSIONS)} className="!py-2 !px-4 !text-xs">
                Apply Now <ArrowRight size={14} />
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background md:hidden flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-display font-bold text-xl text-white">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-white/5 rounded-full text-white">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setPage(item.page as Page);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-4 rounded-2xl text-lg font-medium font-display transition-colors ${
                    activePage === item.page
                      ? 'bg-white text-black'
                      : 'text-muted hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-white/10 my-4"></div>
               <button
                  onClick={() => {
                    setPage(Page.ADMIN);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-4 rounded-2xl text-lg font-medium font-display text-muted hover:text-white"
                >
                  Staff Portal
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Footer ---
const Footer: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => (
  <footer className="border-t border-white/5 pt-20 pb-10 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black">
              <Zap size={16} fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">FGSDC</h3>
          </div>
          <p className="text-muted text-sm leading-relaxed max-w-xs">
            Empowering the next generation of engineers and scientists with world-class education.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-white mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-muted">
            {NAVIGATION_ITEMS.slice(0, 4).map(item => (
              <li key={item.page}>
                <button onClick={() => setPage(item.page as Page)} className="hover:text-white transition-colors">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-6">Connect</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li className="flex items-center gap-2"><Mail size={14}/> info@fgsdc.edu.pk</li>
            <li className="flex items-center gap-2"><Phone size={14}/> +92 51 9314101</li>
            <li className="flex items-center gap-2"><MapPin size={14}/> Wah Cantt, Pakistan</li>
          </ul>
        </div>

        <div>
           <h4 className="text-sm font-semibold text-white mb-6">Internal</h4>
           <Button onClick={() => setPage(Page.ADMIN)} variant="secondary" className="w-full justify-center !text-xs">
             <ShieldCheck size={14} /> Staff Access
           </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-muted">
        <p>&copy; 2025 FG Science Degree College.</p>
        <p className="flex gap-6">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </p>
      </div>
    </div>
  </footer>
);

// --- Page Components ---

const Home: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col justify-center pt-20">
        <div className="absolute inset-0 bg-hero-glow opacity-30 blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium text-white">Admissions 2025 Now Open</span>
              <ArrowRight size={12} className="text-muted" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Crafting the <span className="text-gradient">Future</span> of <br/> Science & Technology
            </h1>
            
            <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
              FGSDC provides an ecosystem where academic rigor meets modern innovation. Join the premier institution for pre-engineering and computer science.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => setPage(Page.ADMISSIONS)} className="!px-8 !py-4 !text-base">
                Apply for Admission
              </Button>
              <Button variant="secondary" onClick={() => setPage(Page.DEPARTMENTS)} className="!px-8 !py-4 !text-base">
                View Programs
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Abstract UI Elements */}
        <div className="hidden lg:block absolute top-1/2 left-10 -translate-y-1/2 w-64 p-4 glass rounded-2xl border border-white/10 rotate-[-6deg] animate-float opacity-60">
          <div className="flex items-center gap-3 mb-3">
             <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400"><Cpu size={20}/></div>
             <div>
               <p className="text-white text-sm font-bold">Computer Science</p>
               <p className="text-xs text-muted">Lab 101 - Active</p>
             </div>
          </div>
          <div className="h-2 bg-white/10 rounded-full w-full overflow-hidden">
            <div className="h-full bg-blue-500 w-3/4"></div>
          </div>
        </div>

        <div className="hidden lg:block absolute top-1/2 right-10 -translate-y-1/2 w-64 p-4 glass rounded-2xl border border-white/10 rotate-[6deg] animate-float opacity-60" style={{ animationDelay: '1s' }}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-muted uppercase">Recent Result</p>
            <span className="text-green-400 text-xs font-bold">+12% YoY</span>
          </div>
          <p className="text-3xl font-display font-bold text-white mb-1">98.5%</p>
          <p className="text-sm text-muted">Pass Percentage</p>
        </div>
      </section>

      {/* Ticker */}
      <div className="border-y border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center py-4 px-6">
          <span className="text-xs font-bold text-white bg-white/10 px-2 py-1 rounded mr-6 uppercase tracking-wider whitespace-nowrap">Latest News</span>
          <div className="overflow-hidden flex-1 relative h-5">
             <motion.div 
               animate={{ x: ["100%", "-100%"] }} 
               transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
               className="absolute whitespace-nowrap text-sm font-medium text-muted flex items-center gap-8"
             >
               {NEWS_UPDATES.map((n, i) => (
                 <span key={i} className="flex items-center gap-2">
                   <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>
                   <span className="text-white">{n.title}</span>
                   <span className="opacity-50">— {n.date}</span>
                 </span>
               ))}
             </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { icon: <Cpu className="text-blue-400"/>, title: "Advanced Labs", desc: "Equipped with latest i9 workstations and high-speed fiber internet for CS students." },
             { icon: <Users className="text-violet-400"/>, title: "Expert Faculty", desc: "Learn from PhD scholars and industry veterans dedicated to your success." },
             { icon: <Trophy className="text-pink-400"/>, title: "Proven Track Record", desc: "Consistently securing top positions in FBISE board examinations." },
           ].map((feature, idx) => (
             <Card key={idx} className="h-full">
               <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5">
                 {feature.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
               <p className="text-muted leading-relaxed">{feature.desc}</p>
             </Card>
           ))}
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-20 border-t border-white/5 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Academic Departments" subtitle="Programs" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEPARTMENTS.slice(0, 4).map((dept, i) => (
              <Card key={i} className="p-0 group cursor-pointer hover:border-white/20 transition-colors">
                 <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                   <img src={dept.image} alt={dept.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"/>
                 </div>
                 <div className="p-6">
                   <h3 className="text-lg font-bold text-white mb-1">{dept.name}</h3>
                   <p className="text-sm text-muted line-clamp-2">{dept.description}</p>
                   <div className="mt-4 flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                     Learn more <ArrowRight size={14}/>
                   </div>
                 </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="secondary" onClick={() => setPage(Page.DEPARTMENTS)}>View All Departments</Button>
          </div>
        </div>
      </section>

      {/* Principal Quote */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white/10 mb-8">
          <img src="https://picsum.photos/seed/principal/200/200" alt="Principal" className="w-full h-full object-cover"/>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight mb-8">
          "We don't just teach science; we cultivate the <span className="text-white/50">scientific temper</span> necessary to navigate the complexities of the modern world."
        </h2>
        <div>
          <p className="text-white font-bold">Mr. Asad Mehmood</p>
          <p className="text-muted text-sm">Principal, FGSDC</p>
        </div>
      </section>
    </div>
  );
};

const About: React.FC = () => (
  <div className="pt-32 pb-20 min-h-screen">
    <div className="max-w-4xl mx-auto px-6">
       <SectionHeader title="Our Legacy & Vision" subtitle="About Us" />
       
       <div className="prose prose-invert prose-lg mx-auto text-muted">
         <p className="lead text-xl text-white font-medium mb-8">
           FG Science Degree College for Men, Wah Cantt has been a beacon of academic excellence since 1985. Located in the heart of the cantonment, we provide a secure and stimulating environment for young minds.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
            <Card>
               <Globe className="mb-4 text-primary" size={32} />
               <h3 className="text-white font-bold text-xl mb-2">Our Vision</h3>
               <p className="text-sm">To be a premier institution that produces leaders in science, technology, and engineering who are ethically sound and socially responsible.</p>
            </Card>
            <Card>
               <Award className="mb-4 text-secondary" size={32} />
               <h3 className="text-white font-bold text-xl mb-2">Our Mission</h3>
               <p className="text-sm">To provide quality education through modern teaching methodologies, state-of-the-art facilities, and a focus on holistic development.</p>
            </Card>
         </div>
       </div>

       <div className="mt-20">
         <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">Campus Facilities</h3>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {FACILITIES.map((fac, i) => {
               const Icon = {
                 BookOpen, FlaskConical, Trophy, Bus, Home: HomeIcon, Moon
               }[fac.iconName] || BookOpen;
               return (
                 <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col items-center text-center">
                    <Icon className="mb-3 text-muted" size={24} />
                    <span className="text-white font-medium text-sm">{fac.title}</span>
                 </div>
               )
            })}
         </div>
       </div>
    </div>
  </div>
);

const Departments: React.FC = () => (
  <div className="pt-32 pb-20 min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Academic Programs" subtitle="Departments" />
      
      <div className="grid grid-cols-1 gap-12">
        {DEPARTMENTS.map((dept, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={idx} 
            className="flex flex-col md:flex-row gap-8 items-center bg-white/5 rounded-3xl p-6 md:p-8 border border-white/5"
          >
            <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden bg-black">
              <img src={dept.image} alt={dept.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-display font-bold text-white">{dept.name}</h2>
                <div className="p-2 bg-white/5 rounded-full border border-white/5">
                   <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>
              <p className="text-muted text-lg mb-8 leading-relaxed">{dept.description}</p>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-black/20 w-fit border border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                   <img src={`https://picsum.photos/seed/${dept.head.replace(/\s/g, '')}/100/100`} className="w-full h-full object-cover"/>
                </div>
                <div>
                   <p className="text-xs text-muted uppercase tracking-wider font-medium">Head of Department</p>
                   <p className="text-white font-medium">{dept.head}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Gallery: React.FC = () => (
  <div className="pt-32 pb-20 min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
       <SectionHeader title="Life at FGSDC" subtitle="Gallery" />

       <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
         {GALLERY_ITEMS.map((item) => (
           <motion.div 
             key={item.id}
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in"
           >
             <img 
               src={item.src} 
               alt={item.caption} 
               className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-white font-medium">{item.caption}</h3>
             </div>
           </motion.div>
         ))}
       </div>
    </div>
  </div>
);

const Admissions: React.FC = () => (
  <div className="pt-32 pb-20 min-h-screen">
     <div className="max-w-6xl mx-auto px-6">
       <SectionHeader title="Start Your Journey" subtitle="Admissions" />

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         {/* Sidebar Info */}
         <div className="lg:col-span-4 space-y-6">
            <Card>
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Clock className="text-primary" size={18}/> Schedule
              </h3>
              <div className="space-y-6 relative">
                 <div className="absolute left-[5px] top-2 bottom-2 w-px bg-white/10"></div>
                 {[
                   { l: 'Forms Available', d: 'May 01', active: false },
                   { l: 'Submission Deadline', d: 'May 20', active: true },
                   { l: 'Merit List Display', d: 'June 05', active: false }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 relative">
                     <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${item.active ? 'bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-white/20'}`}></div>
                     <div>
                       <p className="text-white text-sm font-medium">{item.l}</p>
                       <p className="text-muted text-xs">{item.d}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </Card>

            <Card className="bg-primary/5 border-primary/10">
              <h3 className="text-white font-bold mb-4">Need Help?</h3>
              <p className="text-muted text-sm mb-4">
                Our admissions office is open Mon-Sat, 8:00 AM - 2:00 PM.
              </p>
              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <Phone size={14}/> +92 51 9314101
              </div>
            </Card>
         </div>

         {/* Form */}
         <div className="lg:col-span-8">
           <Card className="!p-8 md:!p-12">
             <h3 className="text-2xl font-display font-bold text-white mb-2">Pre-Registration Form</h3>
             <p className="text-muted text-sm mb-8">Submit your details to receive the digital prospectus.</p>
             
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted uppercase">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted uppercase">Father's Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted uppercase">Matric Roll No</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted uppercase">Marks Obtained</label>
                    <input type="number" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="/ 1100" />
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-medium text-muted uppercase">Preferred Program</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all [&>option]:bg-surface">
                    <option>F.Sc Pre-Engineering</option>
                    <option>F.Sc Pre-Medical</option>
                    <option>ICS (Computer Science)</option>
                    <option>ICS (Statistics)</option>
                    <option>General Science</option>
                  </select>
               </div>

               <div className="pt-4">
                 <Button className="w-full py-4 text-base">Submit Application</Button>
               </div>
             </form>
           </Card>
         </div>
       </div>
     </div>
  </div>
);

const Contact: React.FC = () => (
  <div className="pt-32 pb-20 min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader title="Get in Touch" subtitle="Contact" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card>
           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
             <div className="space-y-2">
               <label className="text-xs font-medium text-muted uppercase">Your Email</label>
               <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white" placeholder="you@example.com" />
             </div>
             <div className="space-y-2">
               <label className="text-xs font-medium text-muted uppercase">Subject</label>
               <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white" placeholder="Admission Inquiry" />
             </div>
             <div className="space-y-2">
               <label className="text-xs font-medium text-muted uppercase">Message</label>
               <textarea rows={6} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white" placeholder="How can we help?"></textarea>
             </div>
             <Button className="w-full">Send Message</Button>
           </form>
        </Card>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Visit Us', val: 'The Mall, Wah Cantt', icon: MapPin },
              { label: 'Call Us', val: '+92 51 9314101', icon: Phone },
              { label: 'Email Us', val: 'info@fgsdc.edu.pk', icon: Mail },
              { label: 'Hours', val: 'Mon-Sat, 8am - 2pm', icon: Clock },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-center">
                 <item.icon className="text-muted mb-4" size={20} />
                 <p className="text-xs text-muted uppercase tracking-wider mb-1">{item.label}</p>
                 <p className="text-white font-medium">{item.val}</p>
              </div>
            ))}
          </div>
          
          <div className="h-64 rounded-2xl overflow-hidden border border-white/5 relative grayscale invert-[.1]">
             <img src="https://picsum.photos/seed/map/800/400" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="secondary" className="!bg-black/80 !backdrop-blur-none">View on Google Maps</Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Admin Section ---

const AdminDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  return (
    <div className="min-h-screen pt-20 flex bg-background">
       {/* Sidebar */}
       <div className="w-64 border-r border-white/5 hidden md:flex flex-col fixed h-full pt-6 bg-surface/30 backdrop-blur-md">
         <div className="px-6 mb-8">
           <div className="flex items-center gap-2 mb-1">
             <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white"><ShieldCheck size={14}/></div>
             <span className="font-bold text-white tracking-tight">Admin Portal</span>
           </div>
           <p className="text-xs text-muted">FGSDC Management v2.4</p>
         </div>
         <nav className="space-y-1 px-3">
           {['Dashboard', 'Students', 'Faculty', 'Notices', 'Database'].map((item, idx) => (
             <button key={item} className={`w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${idx === 0 ? 'bg-white/10 text-white' : 'text-muted hover:text-white hover:bg-white/5'}`}>
               {idx === 0 ? <LayoutDashboard size={16} className="mr-3" /> : idx === 4 ? <Database size={16} className="mr-3" /> : <FileText size={16} className="mr-3" />}
               {item}
             </button>
           ))}
         </nav>
         <div className="mt-auto p-4 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
              <div className="overflow-hidden">
                <p className="text-sm font-medium text-white truncate">Admin User</p>
                <p className="text-xs text-muted truncate">admin@fgsdc.edu.pk</p>
              </div>
            </div>
         </div>
       </div>

       {/* Main Content */}
       <div className="flex-1 md:ml-64 p-8">
         <header className="flex justify-between items-center mb-10">
           <div>
             <h1 className="text-2xl font-bold text-white font-display">Dashboard</h1>
             <p className="text-muted text-sm">Welcome back, here's what's happening today.</p>
           </div>
           <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 text-xs font-medium text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20">
               <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
               System Operational
             </div>
             <Button variant="secondary" onClick={onLogout} className="!py-2 !px-4 !text-xs">Log Out</Button>
           </div>
         </header>

         {/* Stats Cards */}
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
           {[
             { label: 'Total Students', val: '2,450', icon: Users, color: 'text-blue-400' },
             { label: 'Applications', val: '854', icon: FileText, color: 'text-violet-400' },
             { label: 'Faculty', val: '120', icon: User, color: 'text-pink-400' },
             { label: 'Messages', val: '12', icon: Mail, color: 'text-orange-400' },
           ].map((stat, i) => (
             <Card key={i} className="!p-6 flex items-center justify-between">
               <div>
                 <p className="text-xs text-muted font-medium uppercase tracking-wider mb-1">{stat.label}</p>
                 <h3 className="text-3xl font-bold text-white font-display tracking-tight">{stat.val}</h3>
               </div>
               <div className={`p-3 rounded-xl bg-white/5 border border-white/5 ${stat.color}`}>
                 <stat.icon size={20} />
               </div>
             </Card>
           ))}
         </div>

         {/* Recent Applications Table */}
         <Card className="!p-0">
           <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
             <h3 className="font-bold text-white">Recent Applications</h3>
             <button className="text-xs font-medium text-muted hover:text-white transition-colors">View All</button>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
               <thead className="bg-white/5 text-muted font-medium border-b border-white/5">
                 <tr>
                   <th className="px-6 py-3 font-normal">ID</th>
                   <th className="px-6 py-3 font-normal">Student Name</th>
                   <th className="px-6 py-3 font-normal">Score</th>
                   <th className="px-6 py-3 font-normal">Program</th>
                   <th className="px-6 py-3 font-normal">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5 text-gray-300">
                 {MOCK_APPLICATIONS.map((app) => (
                   <tr key={app.id} className="hover:bg-white/5 transition-colors">
                     <td className="px-6 py-4 font-mono text-xs text-muted">{app.id}</td>
                     <td className="px-6 py-4 font-medium text-white">{app.name}</td>
                     <td className="px-6 py-4">{app.marks}</td>
                     <td className="px-6 py-4">{app.program}</td>
                     <td className="px-6 py-4">
                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                         ${app.status === 'Approved' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                           app.status === 'Rejected' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 
                           'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'}`}>
                         {app.status}
                       </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </Card>
       </div>
    </div>
  );
};

const AdminLogin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1500);
  };

  if (isLoggedIn) {
    return <AdminDashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-10 blur-[100px] pointer-events-none"></div>
      
      <Card className="w-full max-w-sm !p-8 md:!p-10 relative z-10 backdrop-blur-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Lock size={20} />
          </div>
          <h2 className="text-2xl font-bold text-white font-display mb-2">Staff Portal</h2>
          <p className="text-muted text-sm">Enter your credentials to access the secure dashboard.</p>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted uppercase">Staff ID</label>
            <input 
              type="text" 
              className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all text-sm placeholder-gray-600"
              placeholder="admin" 
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted uppercase">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all text-sm placeholder-gray-600"
              placeholder="••••••••" 
              required
            />
          </div>
          <Button 
            className="w-full mt-2" 
            variant="primary"
            onClick={() => {}} // Form submission handles it
          >
            {isLoading ? "Authenticating..." : "Sign In"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

// --- Main App Component ---
function App() {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case Page.HOME: return <Home setPage={setActivePage} />;
      case Page.ABOUT: return <About />;
      case Page.DEPARTMENTS: return <Departments />;
      case Page.ADMISSIONS: return <Admissions />;
      case Page.GALLERY: return <Gallery />;
      case Page.CONTACT: return <Contact />;
      case Page.ADMIN: return <AdminLogin />;
      default: return <Home setPage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30 selection:text-white">
      <Header activePage={activePage} setPage={setActivePage} />
      
      <main className="flex-grow relative">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {renderPage()}
        </motion.div>
      </main>

      <ChatBot />
      <DeveloperCredit />
      <Footer setPage={setActivePage} />
    </div>
  );
}

export default App;