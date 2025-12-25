
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background blobs for visual stimulation */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-rose-50 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-800">
            Un lugar de <span className="text-indigo-500">encuentro</span> y esperanza.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
            Bienvenidos a la Parroquia Nuestra Señora la Milagrosa. Somos una comunidad abierta que camina de la mano, compartiendo la alegría del Evangelio en el corazón de nuestro barrio.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#servicios" 
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100 transition-all hover:-translate-y-1"
            >
              Nuestros Servicios
            </a>
            <a 
              href="#historia" 
              className="bg-white hover:bg-slate-50 text-indigo-600 border-2 border-indigo-50 px-8 py-4 rounded-2xl font-bold text-lg shadow-sm transition-all hover:-translate-y-1"
            >
              Conócenos
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-700 bg-white">
            <img 
              src="https://horariosmisas.com/wp-content/uploads/2025/02/Parroquia-de-La-Medalla-Milagrosa-El-Puerto-de-Santa-Maria-Calle-Federico-Garcia-Lorca-sn-11500-El-Puerto-de-Santa-Maria-Cadiz.jpg" 
              alt="Interior de la Parroquia" 
              className="w-full h-full object-cover min-h-[500px]"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-50 rounded-3xl -z-10 rotate-12"></div>
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-indigo-50 rounded-full -z-10 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
