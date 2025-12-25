
import React from 'react';

const Community: React.FC = () => {
  return (
    <section id="comunidad" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800">Nuestra Comunidad en Acción</h2>
          <p className="text-slate-500 mt-4">Más que una parroquia, una familia activa y comprometida.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Scout Section */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 bg-indigo-50 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
               <img src="https://picsum.photos/seed/scouts/200/200" alt="Scouts" />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-slate-800 mb-3">Grupo Scout La Milagrosa</h3>
               <p className="text-slate-600 mb-6">Formando ciudadanos del mañana a través de la naturaleza, el servicio y la fe.</p>
               <button className="text-indigo-600 font-bold hover:underline">Unirse a la aventura →</button>
            </div>
          </div>

          {/* Cursillos Section */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 bg-emerald-50 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
               <img src="https://picsum.photos/seed/cursillos/200/200" alt="Cursillos" />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-slate-800 mb-3">Cursillos de Cristiandad</h3>
               <p className="text-slate-600 mb-6">Una experiencia transformadora para renovar tu fe y encontrar tu propósito.</p>
               <button className="text-emerald-600 font-bold hover:underline">Próximas fechas →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
