
import React from 'react';
import SEO from '../components/SEO';

const EmmausPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SEO 
        title="Retiros de Emaús en Cádiz" 
        description="Descubre qué es el retiro de Emaús, fechas para los próximos retiros de hombres y mujeres en la Parroquia La Milagrosa de El Puerto de Santa María."
      />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-rose-50 to-amber-50 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-200/50 text-orange-700 text-xs font-bold uppercase tracking-widest animate-fade-in">
            Retiros de Espiritualidad en Cádiz
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 animate-scale-in">
            Vivir el Retiro de <span className="text-orange-500">Emaús</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in">
            ¿Buscas un encuentro personal con Dios? El retiro de Emaús en El Puerto de Santa María es una experiencia transformadora para renovar tu fe en comunidad.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-100 transition-all hover:-translate-y-1">
              Próximas Fechas 2024
            </button>
            <a href="#info" className="bg-white text-orange-600 border-2 border-orange-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all hover:-translate-y-1">
              ¿En qué consiste?
            </a>
          </div>
        </div>
      </section>

      {/* Info Section with FAQs */}
      <section id="info" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Preguntas Frecuentes sobre Emaús</h2>
          <div className="space-y-8">
            <div className="p-8 rounded-[2rem] bg-orange-50/50 border border-orange-100">
              <h3 className="font-bold text-slate-800 text-xl mb-4">¿Qué es exactamente el retiro de Emaús?</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Es un retiro espiritual de laicos para laicos que busca un encuentro profundo con el Amor de Dios. Basado en el pasaje de los discípulos de Emaús (Lucas 24), es una oportunidad para desconectar del mundo y reconectar con lo esencial.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-800 text-xl mb-4">¿Quién puede participar en estos retiros en El Puerto?</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Cualquier persona mayor de 18 años, sea o no practicante habitual. Ofrecemos retiros específicos: <strong>Emaús Mujeres Cádiz</strong> y <strong>Emaús Hombres El Puerto</strong>.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-800 text-xl mb-4">¿Cómo apuntarse al próximo retiro de Emaús?</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Las plazas suelen agotarse rápido. Recomendamos contactar directamente con la secretaría de la parroquia o estar atentos a nuestras redes sociales para el lanzamiento de los formularios de inscripción.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmmausPage;
