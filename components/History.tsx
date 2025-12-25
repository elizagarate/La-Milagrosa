
import React from 'react';

const History: React.FC = () => {
  return (
    <section id="historia" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Nuestra Historia</h2>
          <div className="w-16 h-1.5 bg-indigo-200 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 leading-relaxed italic">
            "Desde hace décadas, la Milagrosa ha sido el faro de fe para nuestra comunidad local. Comenzamos como un pequeño sueño de vecinos devotos y hoy somos una familia que crece día a día."
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-indigo-50 hover:bg-indigo-100 transition-colors">
            <h3 className="text-xl font-bold text-indigo-700 mb-4">Misión</h3>
            <p className="text-slate-600">Acompañar a cada persona en su camino espiritual, fomentando la caridad y la fraternidad en nuestro entorno social.</p>
          </div>
          <div className="p-8 rounded-3xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
            <h3 className="text-xl font-bold text-emerald-700 mb-4">Visión</h3>
            <p className="text-slate-600">Ser un referente de apertura y modernidad pastoral, donde todos se sientan acogidos e inspirados para servir.</p>
          </div>
          <div className="p-8 rounded-3xl bg-rose-50 hover:bg-rose-100 transition-colors">
            <h3 className="text-xl font-bold text-rose-700 mb-4">Valores</h3>
            <p className="text-slate-600">La humildad de María, la alegría del servicio comunitario y la transparencia en nuestras acciones cotidianas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
