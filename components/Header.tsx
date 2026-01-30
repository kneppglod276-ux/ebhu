
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', id: 'accueil' },
    { name: 'Nos services', id: 'services' },
    { name: 'Ressources', id: 'ressources' },
    { name: 'Lancez-vous', id: 'contact', isAction: true },
  ];

  const Logo = () => (
    <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onTabChange('accueil')}>
      <div className="w-10 h-10 flex flex-wrap gap-[2px] transition-transform group-hover:scale-105 duration-300">
        {/* Top Left - Blue with Chart */}
        <div className="w-[19px] h-[19px] bg-[#273f91] rounded-tl-lg flex items-end justify-center p-[3px]">
          <div className="flex items-end space-x-[1px] w-full h-full">
            <div className="w-1/3 bg-white h-[40%]"></div>
            <div className="w-1/3 bg-white h-[70%]"></div>
            <div className="w-1/3 bg-white h-[100%]"></div>
          </div>
        </div>
        {/* Top Right - Green with Arrow */}
        <div className="w-[19px] h-[19px] bg-[#39aa43] rounded-tr-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3 h-3 text-black" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        {/* Bottom Left - Red with Chevrons */}
        <div className="w-[19px] h-[19px] bg-[#e4002b] rounded-bl-lg flex items-center justify-center p-1">
          <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="7 13 12 8 17 13"></polyline>
            <polyline points="7 19 12 14 17 19"></polyline>
          </svg>
        </div>
        {/* Bottom Right - Yellow with Dots */}
        <div className="w-[19px] h-[19px] bg-[#e1d121] rounded-br-lg grid grid-cols-3 gap-[1px] p-[3px]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-full h-full bg-black rounded-full"></div>
          ))}
        </div>
      </div>
      <span className="text-3xl font-sora font-black text-[#273f91] tracking-tighter leading-none">EBHI</span>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        {/* Navigation Tabs */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => onTabChange(link.id)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 relative group ${
                link.isAction 
                  ? (activeTab === link.id 
                    ? 'bg-[#273f91] text-white shadow-lg' 
                    : 'bg-[#39aa43] text-white hover:bg-[#2e8b37] hover:shadow-xl hover:-translate-y-0.5')
                  : (activeTab === link.id 
                    ? 'text-[#39aa43] bg-slate-100' 
                    : 'text-[#273f91] hover:text-[#39aa43] hover:bg-slate-50')
              }`}
            >
              {link.name}
              {!link.isAction && activeTab === link.id && (
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#39aa43] rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <button className="hidden sm:flex items-center space-x-2 px-4 py-2 text-sm font-bold text-[#273f91] hover:text-[#e4002b] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hidden lg:inline">Espace Client</span>
          </button>
          
          <button className="md:hidden p-2 text-[#273f91]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
