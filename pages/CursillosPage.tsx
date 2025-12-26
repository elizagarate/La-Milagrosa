
import React from 'react';
import SEO from '../components/SEO';

const CursillosPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SEO 
        title="Cursillos de Cristiandad" 
        description="Encuentra información sobre los retiros de Cursillos de Cristiandad, Encuentros en la Esperanza y La Búsqueda en nuestra diócesis."
      />
      {/* Hero Header */}
      <section className="py-24 pastel-gradient-3 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/60 text-amber-700 text-xs font-bold uppercase tracking-widest animate-fade-in">
            Movimientos Diocesanos
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 animate-scale-in">
            Cursillos de <span className="text-amber-600">Cristiandad</span>
          </h1>
          <div className="max-w-3xl mx-auto mb-8 bg-white/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/50">
            <svg className="w-10 h-10 text-amber-200 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.2386 16.7784 9 14.017 9V6C18.4353 6 22.017 9.58172 22.017 14V21H14.017ZM2.0166 21L2.0166 18C2.0166 16.8954 2.91203 16 4.0166 16H7.0166V14C7.0166 11.2386 4.77801 9 2.0166 9V6C6.43488 6 10.0166 9.58172 10.0166 14V21H2.0166Z" />
            </svg>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed italic">
              "Un instrumento suscitado por Dios para el anuncio del Evangelio en nuestro tiempo."
            </p>
            <p className="text-amber-600 font-bold mt-4 tracking-widest uppercase text-sm">— San Juan Pablo II</p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      </section>

      {/* Main Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12 text-center md:text-left">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed">
                El Movimiento de Cursillos de Cristiandad ofrece experiencias transformadoras para todas las etapas: desde adultos hasta jóvenes y pre-adolescentes. Son convivencias de dos o tres días diseñadas para redescubrir la alegría de la fe en comunidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Adultos', subtitle: 'Cursillos de Cristiandad', icon: '🫂', color: 'bg-amber-50' },
                { title: 'Jóvenes', subtitle: 'Encuentros en la Esperanza', icon: '🌟', color: 'bg-indigo-50' },
                { title: 'Pre-adolescentes', subtitle: 'La Búsqueda', icon: '🔍', color: 'bg-emerald-50' }
              ].map((type, i) => (
                <div key={i} className={`p-8 rounded-[2.5rem] ${type.color} border border-white transition-transform hover:-translate-y-1`}>
                  <div className="text-4xl mb-4" aria-hidden="true">{type.icon}</div>
                  <h2 className="text-xl font-bold text-slate-800 mb-1">{type.title}</h2>
                  <p className="text-slate-600 font-medium">{type.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">Nuestras Casas de Encuentro</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Villa Milagrosa */}
            <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 space-y-6 flex flex-col">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Villa Milagrosa</h3>
              <p className="text-slate-500 font-medium">Casa de Espiritualidad en Picadueñas Alta.</p>
              <div className="space-y-3 flex-grow">
                <p className="text-slate-600 flex items-start gap-3">
                  <span className="text-amber-500 font-bold" aria-hidden="true">📍</span>
                  Calle Las Flores, 2. Jerez de la Fra.
                </p>
                <p className="text-slate-600 flex items-start gap-3">
                  <span className="text-amber-500 font-bold" aria-hidden="true">📞</span>
                  956 34 30 94
                </p>
              </div>
              <div className="pt-6 border-t border-slate-50">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Celebra: Cursillos de Adultos</span>
              </div>
            </div>

            {/* Casa de Nazaret */}
            <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 space-y-6 flex flex-col">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Casa de Nazaret</h3>
              <p className="text-slate-500 font-medium">Sede de Pastoral Juvenil.</p>
              <div className="space-y-3 flex-grow">
                <p className="text-slate-600 flex items-start gap-3">
                  <span className="text-indigo-500 font-bold" aria-hidden="true">📍</span>
                  Calle D, 1. Jerez de la Frontera.
                </p>
                <a 
                  href="http://pjasidonia.org/la-casa-de-nazaret/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-bold hover:underline flex items-center gap-2"
                >
                  Ver sitio web →
                </a>
              </div>
              <div className="pt-6 border-t border-slate-50">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Celebra: Encuentros y La Búsqueda</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center md:text-left">
                <h2 className="text-3xl font-bold">Secretariado Diocesano</h2>
                <p className="text-slate-400">Para consultas generales sobre el movimiento en nuestra Diócesis:</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">📞</div>
                    <span className="text-xl font-bold">956 30 60 60</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-[2rem] border border-slate-700">
                <h3 className="text-xl font-bold mb-6 text-amber-400">¿Cómo apuntarse?</h3>
                <p className="text-sm text-slate-300 mb-6">Llama directamente a cualquiera de estos números para realizar tu inscripción:</p>
                <div className="space-y-4 font-mono">
                  <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-xl border border-slate-700">
                    <span>Opción 1:</span>
                    <span className="font-bold text-white">676 024 216</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-xl border border-slate-700">
                    <span>Opción 2:</span>
                    <span className="font-bold text-white">679 790 381</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-xl border border-slate-700">
                    <span>Opción 3:</span>
                    <span className="font-bold text-white">669 223 673</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CursillosPage;
