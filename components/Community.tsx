
import React from 'react';
import { Link } from 'react-router-dom';

const Community: React.FC = () => {
  return (
    <section id="comunidad" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800">Nuestra Comunidad en Acción</h2>
          <p className="text-slate-500 mt-4">Más que una parroquia, una familia activa y comprometida.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Emaús Section */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center group hover:shadow-xl transition-all duration-500">
            <div className="w-32 h-32 bg-orange-50 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border-4 border-white shadow-inner">
               <img 
                src="https://github.com/elizagarate/images/blob/main/La-Milagrosa/emaus-camino-I.jpg?raw=true" 
                alt="Emaús" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-slate-800 mb-3">Emaús</h3>
               <p className="text-slate-600 mb-6">Un retiro de laicos para laicos que busca un encuentro personal con el Amor de Dios y renovar la fe.</p>
               <Link 
                to="/emaus" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-orange-600 font-bold hover:underline inline-flex items-center gap-2"
               >
                Saber más sobre Emaús <span>→</span>
               </Link>
            </div>
          </div>

          {/* Cursillos Section */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center group hover:shadow-xl transition-all duration-500">
            <div className="w-32 h-32 bg-emerald-50 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border-4 border-white shadow-inner">
               <img 
                src="https://picsum.photos/seed/cursillos/200/200" 
                alt="Cursillos" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-slate-800 mb-3">Cursillos de Cristiandad</h3>
               <p className="text-slate-600 mb-6">Una experiencia transformadora para renovar tu fe, encontrar tu propósito y vivir en comunidad.</p>
               <Link 
                to="/cursillos" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-emerald-600 font-bold hover:underline inline-flex items-center gap-2"
               >
                Próximas fechas <span>→</span>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
