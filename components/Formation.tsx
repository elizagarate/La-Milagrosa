
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Formation: React.FC = () => {
  const navigate = useNavigate();
  const educationItems = [
    { title: 'Catequesis Infantil', audience: 'Niños 6-12 años', icon: '🎨', color: 'bg-rose-50', link: '#' },
    { title: 'Confirmación Jóvenes', audience: 'Adolescentes', icon: '🔥', color: 'bg-indigo-50', link: '#' },
    { title: 'Formación Adultos', audience: 'Todos los públicos', icon: '📖', color: 'bg-emerald-50', link: '#' },
    { title: 'Preparación Sacramental', audience: 'Bautismo y Matrimonio', icon: '🕊️', color: 'bg-amber-50', link: '/preparacion-sacramental' },
  ];

  return (
    <section id="formacion" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Creciendo Juntos</h2>
            <p className="text-lg text-slate-600">La formación es un camino que nunca termina. Ofrecemos espacios de reflexión y aprendizaje para todas las etapas de la vida.</p>
          </div>
          <button className="text-indigo-600 font-bold border-b-2 border-indigo-200 pb-1 hover:border-indigo-500 transition-all">Ver calendario académico →</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {educationItems.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => item.link !== '#' && navigate(item.link)}
              className={`p-8 rounded-[2.5rem] ${item.color} transition-transform hover:-translate-y-2 cursor-pointer group`}
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
              <p className="text-slate-500">{item.audience}</p>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-indigo-500">
                Saber más <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formation;
