
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L3 9V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V9L12 2Z" />
                    <path d="M9 22V12H15V22" />
                 </svg>
              </div>
              <span className="font-bold text-xl">La Milagrosa</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Caminando con María hacia el corazón de Cristo. Una parroquia viva, moderna y al servicio del prójimo.
            </p>
            <div className="flex gap-4">
               {[1, 2, 3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-slate-400 rounded-sm"></div>
                 </div>
               ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Secciones</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/#historia" className="hover:text-indigo-400">Sobre Nosotros</Link></li>
              <li><Link to="/contacto" onClick={() => window.scrollTo(0, 0)} className="hover:text-indigo-400">Horarios y Servicios</Link></li>
              <li><Link to="/formacion" onClick={() => window.scrollTo(0, 0)} className="hover:text-indigo-400">Catequesis y Cursos</Link></li>
              <li><Link to="/contacto" onClick={() => window.scrollTo(0, 0)} className="hover:text-indigo-400">Página de Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Comunidad</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/emaus" onClick={() => window.scrollTo(0, 0)} className="hover:text-indigo-400">Emaús</Link></li>
              <li><a href="#" className="hover:text-indigo-400">Cáritas Parroquial</a></li>
              <li><Link to="/cursillos" onClick={() => window.scrollTo(0, 0)} className="hover:text-indigo-400">Cursillos</Link></li>
              <li><a href="#" className="hover:text-indigo-400">Revista Digital</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Contacto Directo</h4>
            <div className="p-6 bg-slate-800 rounded-[2rem] space-y-4">
              <p className="text-slate-300 text-sm">Cualquier duda, estamos aquí:</p>
              <a href="mailto:info@parroquiamedallamligrosa.es" className="block text-indigo-400 font-bold hover:underline text-sm">info@parroquiamedallamligrosa.es</a>
              <Link to="/contacto" onClick={() => window.scrollTo(0, 0)} className="block w-full py-3 bg-indigo-500 text-center rounded-xl font-bold hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20">
                Contactar Ahora
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Parroquia Nuestra Señora la Milagrosa. Todos los derechos reservados.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-slate-300">Aviso Legal</a>
             <a href="#" className="hover:text-slate-300">Política de Privacidad</a>
             <a href="#" className="hover:text-slate-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
