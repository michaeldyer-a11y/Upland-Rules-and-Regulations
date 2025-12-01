import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, ChevronRight, BookOpen, Shield, Users, Trophy, Calendar } from 'lucide-react';
import { ruleData } from './data';
import { RuleSection, SubSection } from './types';

const CATEGORIES = {
  ALL: 'All Sections',
  ADMIN: 'Administrative',
  TEAM: 'Team Formation',
  GAME: 'Gameplay',
  CONDUCT: 'Conduct',
  SPECIFIC: 'Specific Divisions'
};

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Administrative': return <BookOpen className="w-5 h-5" />;
    case 'Team Formation': return <Users className="w-5 h-5" />;
    case 'Gameplay': return <Trophy className="w-5 h-5" />;
    case 'Conduct': return <Shield className="w-5 h-5" />;
    case 'Specific Divisions': return <Calendar className="w-5 h-5" />;
    default: return <BookOpen className="w-5 h-5" />;
  }
};

interface SectionCardProps {
  section: RuleSection;
  isOpen: boolean;
  toggleOpen: () => void;
}

const SectionCard: React.FC<SectionCardProps> = ({ section, isOpen, toggleOpen }) => {
  return (
    <div id={section.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6 transition-all duration-300 hover:shadow-md">
      <button 
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-green-50 rounded-lg text-hilltopper-green">
            <CategoryIcon category={section.category} />
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{section.category}</span>
            <h3 className="text-xl font-bold text-gray-900 font-display mt-1">{section.title}</h3>
          </div>
        </div>
        {isOpen ? <ChevronDown className="text-gray-400" /> : <ChevronRight className="text-gray-400" />}
      </button>

      {isOpen && (
        <div className="p-6 pt-0 border-t border-gray-100 animate-fadeIn">
          {section.content && section.content.length > 0 && (
            <div className="mb-6 prose max-w-none text-gray-700">
              <ul className="list-disc pl-5 space-y-2">
                {section.content.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {section.subSections && (
            <div className="space-y-6">
              {section.subSections.map((sub, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                  {sub.title && (
                    <h4 className="font-bold text-hilltopper-green mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-softball-yellow"></span>
                      {sub.title}
                    </h4>
                  )}
                  <ul className="space-y-3">
                    {sub.items.map((item, i) => (
                      <li key={i} className="text-gray-700 text-sm leading-relaxed flex gap-3">
                        <span className="text-gray-400 select-none">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES.ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set([ruleData[0].id]));

  const filteredData = ruleData.filter(section => {
    const matchesCategory = activeCategory === CATEGORIES.ALL || section.category === activeCategory;
    const matchesSearch = section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content?.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      section.subSections?.some(s => s.items.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())));
    
    return matchesCategory && matchesSearch;
  });

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const handleNavClick = (id: string) => {
    // Ensure section is expanded
    if (!expandedSections.has(id)) {
      toggleSection(id);
    }
    // Mobile close
    setIsSidebarOpen(false);
    // Scroll
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-hilltopper-green text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-hilltopper-green rounded-full flex items-center justify-center font-bold font-display border-2 border-softball-yellow">
            U
          </div>
          <span className="font-display font-bold text-lg">Hilltoppers Rules</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-white/10 rounded">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:sticky top-0 h-screen w-full md:w-80 bg-hilltopper-dark text-white z-40 flex flex-col shadow-xl
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white text-hilltopper-green rounded-full flex items-center justify-center font-bold text-xl font-display border-2 border-softball-yellow shadow-lg">
              U
            </div>
            <div>
              <h1 className="font-display font-bold text-xl tracking-wide">UPLAND HILLTOPPERS</h1>
              <p className="text-xs text-softball-yellow font-semibold tracking-widest uppercase">Girls Softball League</p>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            Rules & Regulations • Revised Aug 2025
          </div>
        </div>

        <div className="p-4 border-b border-white/10">
           <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search rules..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-softball-yellow focus:border-softball-yellow transition-all"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-1">
          <div className="mb-4">
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">Filter by Category</h3>
             <div className="space-y-1">
               {Object.values(CATEGORIES).map((cat) => (
                 <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                      activeCategory === cat 
                        ? 'bg-hilltopper-green text-white font-medium shadow-sm' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                 >
                   {cat}
                   {activeCategory === cat && <div className="w-1.5 h-1.5 rounded-full bg-softball-yellow"></div>}
                 </button>
               ))}
             </div>
          </div>

          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-6 px-3">Quick Navigation</h3>
          {filteredData.map(section => (
             <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-softball-yellow transition-colors truncate block"
            >
              {section.title}
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-white/10 bg-black/20">
          <p className="text-center text-xs text-gray-500">
            © 2025 Upland Hilltoppers
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 h-full md:h-screen md:overflow-y-auto custom-scrollbar">
        <div className="max-w-4xl mx-auto p-4 md:p-8 lg:p-12 pb-24">
          
          <header className="mb-10 text-center md:text-left animate-slideDown">
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-hilltopper-green text-xs font-bold tracking-wider uppercase mb-3 border border-green-200">
              Official Documentation
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
              League Rules & Regulations
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Comprehensive guidelines for players, coaches, and parents. Use the search bar or category filters to find specific regulations.
            </p>
          </header>

          <div className="space-y-2">
            {filteredData.length > 0 ? (
              filteredData.map((section) => (
                <SectionCard 
                  key={section.id} 
                  section={section} 
                  isOpen={expandedSections.has(section.id)}
                  toggleOpen={() => toggleSection(section.id)}
                />
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No rules found</h3>
                <p className="text-gray-500">Try adjusting your search query or category filter.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveCategory(CATEGORIES.ALL);}}
                  className="mt-4 text-hilltopper-green font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          
          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex gap-4 items-start">
            <div className="p-2 bg-yellow-100 rounded-full text-yellow-700 shrink-0">
               <Shield className="w-6 h-6" />
            </div>
            <div>
               <h4 className="font-bold text-yellow-900 mb-1">Important Note</h4>
               <p className="text-sm text-yellow-800 leading-relaxed">
                 These rules are revised as of August 2025. In any instance where specific League rules are not defined, official USA Softball rules apply.
               </p>
            </div>
          </div>

        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}