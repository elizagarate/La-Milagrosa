
import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const EmmausPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="El Retiro de Emaús" 
        description="Vive una experiencia transformadora en el Retiro de Emaús. Un encuentro personal con el Amor de Dios en El Puerto de Santa María."
      />

      {/* Hero Image - Sticky to top */}
      <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden bg-white">
        <img 
          src="https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/jesus-emaus-cutout.png" 
          alt="Cristo te llama" 
          className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://github.com/elizagarate/images/blob/main/La-Milagrosa/jesus.webp?raw=true";
          }}
        />
        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Title Section - Below the Image in a single line */}
      <section className="relative z-20 py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in space-y-8">
            {/* FIRST TITLE: Retains Cinzel for impact */}
            <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-slate-900 font-bold tracking-tight">
              El Retiro de <span className="text-orange-500/90">Emaús</span>
            </h1>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
            
            <div className="max-w-2xl mx-auto bg-slate-50/50 backdrop-blur-sm p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <p className="font-quicksand text-xl md:text-2xl text-slate-700 italic leading-relaxed">
                "¿No ardía nuestro corazón en nosotros, mientras nos hablaba en el camino?"
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-slate-200"></span>
                <span className="font-bold text-orange-600 tracking-[0.3em] text-xs uppercase">Lucas 24, 32</span>
                <span className="h-px w-12 bg-slate-200"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* "El Retiro" Cinematic Banner */}
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl mb-24 group border-8 border-slate-50">
              <img 
                src="https://github.com/elizagarate/images/blob/main/La-Milagrosa/emaus-camino-I.jpg?raw=true" 
                alt="Caminando a Emaús" 
                className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center text-center p-8">
                <div className="mb-4">
                  <span className="bg-orange-500 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
                    Próxima Edición 2026
                  </span>
                </div>
                {/* Subsequent title: Changed to Quicksand (default font-bold) */}
                <h2 className="text-6xl md:text-8xl text-white font-bold mb-6 tracking-tight">
                  El Camino
                </h2>
                <div className="w-20 h-1 bg-white/60 mb-8 rounded-full"></div>
                <p className="text-white/90 text-xl md:text-2xl max-w-3xl font-medium italic leading-relaxed">
                  "Un fin de semana para encontrarse con Aquel que nunca nos deja solos."
                </p>
              </div>
            </div>

            {/* Characteristics Grid */}
            <div className="grid md:grid-cols-3 gap-16 px-4">
              <div className="space-y-6 group text-center md:text-left">
                <div className="w-20 h-20 bg-orange-50 rounded-[2rem] flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-sm mx-auto md:mx-0">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                {/* Changed to Quicksand */}
                <h3 className="text-3xl font-bold text-slate-800">48 Horas</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-quicksand">Un fin de semana diseñado para que desconectes del ruido y escuches a tu corazón.</p>
              </div>
              
              <div className="space-y-6 group text-center md:text-left">
                <div className="w-20 h-20 bg-rose-50 rounded-[2rem] flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500 shadow-sm mx-auto md:mx-0">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                {/* Changed to Quicksand */}
                <h3 className="text-3xl font-bold text-slate-800">De Laicos para Laicos</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-quicksand">Hombres y mujeres que comparten sus vidas para ayudarte a encontrar la tuya.</p>
              </div>

              <div className="space-y-6 group text-center md:text-left">
                <div className="w-20 h-20 bg-amber-50 rounded-[2rem] flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 shadow-sm mx-auto md:mx-0">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
                </div>
                {/* Changed to Quicksand */}
                <h3 className="text-3xl font-bold text-slate-800">Encuentro Real</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-quicksand">Una oportunidad para renovar tu fe o descubrirla por primera vez.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            {/* Changed to Quicksand */}
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Preguntas Frecuentes</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <details className="group bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-md transition-all cursor-pointer border border-slate-100">
              <summary className="flex justify-between items-center font-bold text-xl text-slate-800 list-none">
                ¿A quién va dirigido?
                <span className="text-orange-500 transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <p className="mt-6 text-slate-600 leading-relaxed text-lg font-quicksand">
                A cualquier persona mayor de edad que busque algo más. No importa si eres católico practicante, si llevas tiempo alejado de la Iglesia o si simplemente tienes curiosidad por vivir una experiencia diferente.
              </p>
            </details>

            <details className="group bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-md transition-all cursor-pointer border border-slate-100">
              <summary className="flex justify-between items-center font-bold text-xl text-slate-800 list-none">
                ¿Qué pasa durante el fin de semana?
                <span className="text-orange-500 transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <p className="mt-6 text-slate-600 leading-relaxed text-lg font-quicksand">
                Es una sorpresa. Parte de la magia de Emaús es ir sin saber qué va a ocurrir, permitiéndote ser sorprendido paso a paso. Solo podemos decirte que saldrás renovado.
              </p>
            </details>
          </div>

          {/* CTA Card */}
          <div className="mt-24 p-12 bg-slate-900 rounded-[4rem] text-white text-center relative overflow-hidden shadow-3xl">
            <div className="relative z-10 space-y-8">
              {/* Changed to Quicksand */}
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Tu camino empieza aquí</h3>
              <p className="text-slate-400 text-xl max-w-xl mx-auto leading-relaxed font-quicksand">
                No es casualidad que estés leyendo esto. Jesús quiere caminar contigo.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                <Link 
                  to="/contacto"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-[2rem] font-bold text-xl transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-1"
                >
                  Inscribirme al Retiro
                </Link>
                <a 
                  href="tel:956856561"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-12 py-5 rounded-[2rem] font-bold text-xl transition-all"
                >
                  Consultar Dudas
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmmausPage;
