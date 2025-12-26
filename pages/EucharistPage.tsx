
import React from 'react';
import SEO from '../components/SEO';

const EucharistPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO 
        title="La Eucaristía - Sacramento del Altar" 
        description="Descubre el significado de la Eucaristía, los momentos de la celebración y los horarios de misa en la Parroquia La Milagrosa."
      />

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden bg-gradient-to-b from-amber-50/50 to-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-rose-500 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#a855f7] mb-6 tracking-widest font-cinzel">
            La Eucaristía
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-500 font-medium italic leading-relaxed">
              "Yo soy el pan vivo que ha bajado del cielo; el que coma de este pan vivirá para siempre"
            </p>
            <p className="text-amber-600 font-bold mt-4 uppercase tracking-widest">— Juan 6,51</p>
          </div>
        </div>
      </section>

      {/* Source and Summit Card */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl">🧡</div>
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold text-slate-800">Fuente y Cumbre de la Vida Cristiana</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  La Eucaristía es el sacramento en el que, bajo las especies de pan y vino, <span className="text-amber-600 font-bold">Jesucristo se hace verdaderamente presente</span> para alimentar nuestras almas.
                </p>
                <p>
                  Es el memorial de la Pascua de Cristo, el sacrificio de la Cruz que se perpetúa por los siglos. Es el banquete en el que comulgamos con el Cuerpo y la Sangre del Señor.
                </p>
                <p>
                  La celebración eucarística es el centro de la vida de la Iglesia, porque en ella recibimos a Cristo mismo y nos unimos como comunidad en torno a Él.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moments of Celebration */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Momentos de la Celebración</h2>
            <p className="text-slate-500">Cada parte de la Misa nos acerca más a Cristo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Liturgia Palabra */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Liturgia de la Palabra</h3>
                <p className="text-slate-600 leading-relaxed">Escuchamos a Dios que nos habla a través de las lecturas bíblicas.</p>
              </div>
            </div>

            {/* Liturgia Eucarística */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21l-2-2m2 2l2-2m-2 2V3" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Liturgia Eucarística</h3>
                <p className="text-slate-600 leading-relaxed">El pan y el vino se convierten en el Cuerpo y la Sangre de Cristo.</p>
              </div>
            </div>

            {/* Comunión */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Comunión</h3>
                <p className="text-slate-600 leading-relaxed">Recibimos a Jesús y nos unimos a Él de la forma más íntima.</p>
              </div>
            </div>

            {/* Envío */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Envío</h3>
                <p className="text-slate-600 leading-relaxed">Somos enviados a llevar a Cristo al mundo con nuestra vida.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mass Schedules */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Horarios de Misas</h2>
            <p className="text-slate-500">Ven a celebrar la Eucaristía con nosotros</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Domingos */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full group hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-6 flex items-center gap-4 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <h3 className="text-xl font-bold">Domingos y Festivos</h3>
              </div>
              <ul className="p-8 space-y-4 text-lg font-medium text-slate-700 flex-grow">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 11:00</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 12:00</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 20:00</li>
              </ul>
            </div>

            {/* Entre Semana */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full group hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-6 flex items-center gap-4 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <h3 className="text-xl font-bold">Entre Semana (L-V)</h3>
              </div>
              <ul className="p-8 space-y-4 text-lg font-medium text-slate-700 flex-grow">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 20:00</li>
              </ul>
            </div>

            {/* Sabados */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full group hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-indigo-400 to-purple-500 p-6 flex items-center gap-4 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="text-xl font-bold">Sábados</h3>
              </div>
              <ul className="p-8 space-y-4 text-lg font-medium text-slate-700 flex-grow">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> 20:00 (Vigilia)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto rounded-[3rem] bg-gradient-to-br from-orange-400 via-rose-500 to-[#a855f7] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-8">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
                "La Eucaristía es el corazón y la cumbre de la vida de la Iglesia, pues en ella Cristo asocia su Iglesia a su sacrificio de alabanza y acción de gracias."
              </h2>
              <p className="text-white/80 font-bold uppercase tracking-widest text-sm">— Catecismo de la Iglesia Católica, 1407</p>
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Ending CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Te Esperamos en la Celebración</h2>
        </div>
      </section>
    </div>
  );
};

export default EucharistPage;