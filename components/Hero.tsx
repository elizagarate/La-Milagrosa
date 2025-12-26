
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-indigo-200/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[15%] right-[5%] w-96 h-96 bg-rose-200/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 animate-reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/50 border border-indigo-100/50 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em]">
              Parroquia de La Virgen de la Medalla Milagrosa
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] text-slate-900 tracking-tight text-balance">
            Un hogar para <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500">tu espíritu.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl font-medium">
            Bienvenidos a La Milagrosa. Un espacio de encuentro, fe y alegría donde cada persona es parte fundamental de nuestra familia en El Puerto.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              to="/servicios-parroquiales" 
              className="group bg-slate-900 hover:bg-indigo-600 text-white px-10 py-5 rounded-[2rem] font-bold text-lg shadow-2xl shadow-indigo-200/50 transition-soft flex items-center justify-center gap-3"
            >
              Horarios de Misa
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link 
              to="/contacto" 
              className="bg-white/80 hover:bg-white text-slate-800 border border-slate-200 px-10 py-5 rounded-[2rem] font-bold text-lg transition-soft text-center backdrop-blur-sm"
            >
              Ubicación
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=parroquia${i}`} alt="Comunidad" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-slate-500">
              <span className="text-indigo-600">+500 vecinos</span> unidos en la fe
            </p>
          </div>
        </div>
        
        <div className="relative lg:h-[700px] flex items-center justify-center animate-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="relative z-10 w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white group">
            <img 
              src="https://horariosmisas.com/wp-content/uploads/2025/02/Parroquia-de-La-Medalla-Milagrosa-El-Puerto-de-Santa-Maria-Calle-Federico-Garcia-Lorca-sn-11500-El-Puerto-de-Santa-Maria-Cadiz.jpg" 
              alt="Parroquia La Milagrosa" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 hidden md:block border border-slate-50 animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Próxima Misa</p>
                <p className="text-xl font-bold text-slate-800">Hoy, 20:00 h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
