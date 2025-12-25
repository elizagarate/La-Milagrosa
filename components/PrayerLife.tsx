
import React from 'react';

const PrayerLife: React.FC = () => {
  return (
    <section id="oracion" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                   <img src="https://picsum.photos/seed/prayer1/300/400" className="rounded-3xl shadow-lg" alt="Prayer 1" />
                   <div className="bg-indigo-500 h-32 rounded-3xl p-6 text-white flex flex-col justify-end">
                      <span className="text-2xl font-bold">24h</span>
                      <span className="text-xs uppercase font-bold tracking-widest opacity-80">Adoración</span>
                   </div>
                </div>
                <div className="space-y-4 pt-12">
                   <div className="bg-rose-100 h-48 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                      <span className="text-4xl">🙏</span>
                      <span className="mt-2 font-bold text-rose-700">Grupos de Oración</span>
                   </div>
                   <img src="https://picsum.photos/seed/prayer2/300/300" className="rounded-3xl shadow-lg" alt="Prayer 2" />
                </div>
             </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl font-bold text-slate-800">Vida de Oración</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              La oración es el motor de nuestra comunidad. Ofrecemos diferentes espacios para que cada uno encuentre su forma de conectar con el Señor: Adoración al Santísimo, Rosario comunitario y retiros espirituales.
            </p>
            <ul className="space-y-4">
               {['Adoración Nocturna (Primeros Viernes)', 'Rosario de la Aurora', 'Retiros de Emaús', 'Lectio Divina Semanal'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                    {item}
                 </li>
               ))}
            </ul>
            <button className="bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-700 transition-colors">
              Peticiones de Oración
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerLife;
