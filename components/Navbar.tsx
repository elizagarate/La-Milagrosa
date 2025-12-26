
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Horarios', href: '/servicios-parroquiales' },
    { label: 'Formación', href: '/formacion' },
    { 
      label: 'Sacramentos', 
      href: '/sacramentos',
      subItems: [
        { label: 'La Eucaristía', href: '/eucaristia' },
        { label: 'Los Sacramentos', href: '/sacramentos' },
        { label: 'Preparación Sacramental', href: '/preparacion-sacramental' },
      ]
    },
    { label: 'Cursillos', href: '/cursillos' },
    { label: 'Emaús', href: '/emaus' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center shadow-inner">
             <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-indigo-500" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L3 9V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V9L12 2Z" />
                <path d="M9 22V12H15V22" />
             </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-700 hidden sm:inline-block">
            La Milagrosa
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div 
              key={item.label} 
              className={`relative group ${item.label === 'Inicio' ? 'md:hidden lg:block' : ''}`}
            >
              {item.subItems ? (
                <div className="flex items-center">
                   <button 
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex items-center gap-1 font-medium transition-colors py-2 ${location.pathname.startsWith(item.href) ? 'text-indigo-500' : 'text-slate-600 hover:text-indigo-500'}`}
                  >
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 glass-morphism rounded-2xl shadow-xl border border-white/50 py-3 transition-all duration-200 transform origin-top ${activeDropdown === item.label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        onClick={handleLinkClick}
                        className={`block px-5 py-2.5 text-sm font-medium transition-colors hover:bg-indigo-50 ${location.pathname === sub.href ? 'text-indigo-600 bg-indigo-50/50' : 'text-slate-600 hover:text-indigo-500'}`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  to={item.href} 
                  onClick={handleLinkClick}
                  className={`font-medium transition-colors py-2 block ${location.pathname === item.href ? 'text-indigo-500' : 'text-slate-600 hover:text-indigo-500'}`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link 
            to="/contacto" 
            onClick={handleLinkClick}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md transition-all hover:scale-105 active:scale-95"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-600 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-morphism border-t border-slate-100 animate-fade-in-down overflow-hidden">
          <div className="px-6 py-6 flex flex-col space-y-1">
            {menuItems.map((item) => (
              <div key={item.label} className="flex flex-col">
                {item.subItems ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(item.label)}
                      className="flex justify-between items-center py-3 text-slate-700 font-bold"
                    >
                      {item.label}
                      <svg className={`w-5 h-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 pb-2 flex flex-col space-y-1 animate-fade-in">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            onClick={handleLinkClick}
                            className={`py-2 text-sm font-medium ${location.pathname === sub.href ? 'text-indigo-500' : 'text-slate-50'}`}
                          >
                            • {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={item.href} 
                    className={`py-3 font-bold ${location.pathname === item.href ? 'text-indigo-500' : 'text-slate-700'}`}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link 
                to="/contacto" 
                className="bg-indigo-500 text-white block w-full py-4 rounded-2xl font-bold text-center shadow-lg"
                onClick={handleLinkClick}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
