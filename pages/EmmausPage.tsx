
import React from 'react';

const EmmausPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-rose-50 to-amber-50 -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-200/50 text-orange-700 text-xs font-bold uppercase tracking-widest animate-fade-in">
            Retiros de Espiritualidad
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 animate-scale-in">
            Caminando hacia <span className="text-orange-500">Emaús</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in">
            "¿No ardía nuestro corazón mientras nos hablaba por el camino?" — Lucas 24:32. 
            Una oportunidad única para desconectar del ruido y reencontrarte con el Amor de Dios.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-100 transition-all hover:-translate-y-1">
              Próximas Fechas
            </button>
            <button className="bg-white text-orange-600 border-2 border-orange-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all hover:-translate-y-1">
              Testimonios
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"></div>
      </section>

      {/* What is Emmaus? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-700">
                <img 
                  src="https://horariosmisas.com/wp-content/uploads/2025/02/Parroquia-de-La-Medalla-Milagrosa-El-Puerto-de-Santa-Maria-Calle-Federico-Garcia-Lorca-sn-11500-El-Puerto-de-Santa-Maria-Cadiz.jpg" 
                  alt="Inspiración Emaús" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-3xl -z-10 -rotate-6"></div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-800">¿Qué es el Retiro de Emaús?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                El retiro de Emaús no es un curso bíblico ni una conferencia. Es un retiro de laicos para laicos, basado en el pasaje del Evangelio según San Lucas (24: 13-35). 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Está diseñado para ayudarte a tomar un descanso en tu vida cotidiana y reflexionar sobre tu relación con Dios y con los demás. Es un fin de semana lleno de sorpresas, testimonios y momentos de profunda paz.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-3xl bg-orange-50">
                  <span className="text-3xl mb-3 block">🚶‍♂️</span>
                  <h4 className="font-bold text-slate-800">Caminar</h4>
                  <p className="text-sm text-slate-500">Un recorrido personal y comunitario.</p>
                </div>
                <div className="p-6 rounded-3xl bg-amber-50">
                  <span className="text-3xl mb-3 block">🔥</span>
                  <h4 className="font-bold text-slate-800">Arder</h4>
                  <p className="text-sm text-slate-500">Renovar el fuego de la fe en el corazón.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Men & Women Sections */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800">Nuestros Retiros</h2>
            <p className="text-slate-500 mt-4">Organizamos retiros específicos para hombres y mujeres.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Women's Emmaus */}
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-100 transition-colors">
                <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Emaús Mujeres</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Un espacio para compartir entre hermanas, sanar heridas y redescubrir la alegría de ser amadas por Dios. 
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                  Próximo retiro: Octubre 2024
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                  Inscripciones abiertas próximamente
                </div>
              </div>
              <button className="w-full py-4 bg-rose-500 text-white rounded-2xl font-bold hover:bg-rose-600 transition-colors shadow-lg shadow-rose-100">
                Contactar Responsables
              </button>
            </div>

            {/* Men's Emmaus */}
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Emaús Hombres</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Fortalece tu identidad como hombre de fe, padre, esposo y amigo. Un encuentro potente y transformador.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  Próximo retiro: Mayo 2024
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  Últimas plazas disponibles
                </div>
              </div>
              <button className="w-full py-4 bg-blue-500 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-100">
                Contactar Responsables
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Preparation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Información Útil</h2>
          <div className="space-y-6">
            {[
              { q: "¿Quién puede asistir?", a: "Cualquier persona mayor de edad que quiera tener un encuentro personal con el Señor, sin importar su nivel de práctica religiosa actual." },
              { q: "¿Cuánto dura?", a: "El retiro comienza el viernes por la tarde (aprox. 18:00) y finaliza el domingo con una Misa comunitaria a la que están invitados los familiares." },
              { q: "¿Qué debo llevar?", a: "Ropa cómoda, artículos de aseo personal y, sobre todo, un corazón abierto. El resto lo ponemos nosotros." }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-800 text-lg mb-3">{faq.q}</h4>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-orange-500 text-white text-center overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Sientes que tu corazón arde?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            No dejes pasar esta oportunidad. El Señor te está llamando a caminar con Él. Inscríbete o solicita más información hoy mismo.
          </p>
          <a 
            href="tel:956856561" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-600 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-all shadow-2xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llámanos: 956 856 561
          </a>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>
    </div>
  );
};

export default EmmausPage;
