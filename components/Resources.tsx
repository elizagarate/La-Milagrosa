
import React from 'react';

const Resources: React.FC = () => {
  const resources = [
    { title: 'Cantoral Parroquial', type: 'Música', icon: '🎵', desc: 'Acordes y letras para nuestras celebraciones.' },
    { title: 'Revista "El Púlpito"', type: 'Publicación', icon: '📰', desc: 'Nuestra voz trimestral con noticias y reflexión.' },
    { title: 'Álbum de Fotos', type: 'Multimedia', icon: '📸', desc: 'Momentos compartidos en nuestra comunidad.' },
    { title: 'Libros y Novedades', type: 'Lectura', icon: '📚', desc: 'Recomendaciones espirituales para profundizar.' },
  ];

  return (
    <section id="recursos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
          <h2 className="text-4xl font-bold text-slate-800">Recursos y Medios</h2>
          <p className="text-slate-500 md:max-w-sm text-center md:text-right">Materiales para alimentar tu espíritu y mantenerte informado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, i) => (
            <div key={i} className="glass-morphism p-8 rounded-[2rem] hover:shadow-xl hover:shadow-indigo-50 transition-all border border-slate-100 flex flex-col h-full">
              <div className="text-3xl mb-4">{res.icon}</div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-2">{res.type}</span>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{res.title}</h4>
              <p className="text-slate-500 text-sm mb-6 flex-grow">{res.desc}</p>
              <button className="w-full py-3 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                Explorar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
