
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

      {/* Cinematic Hero Section - Inspired by Image 1 */}
      <section className="relative h-screen flex items-end overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://elretirodeemaus.com/wp-content/uploads/2024/06/emaus-camino-I-1800x770.jpg" 
            alt="Presencia espiritual" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 pb-20 relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-cinzel text-5xl md:text-8xl text-white font-bold leading-tight mb-4 drop-shadow-2xl">
              El Retiro de <br /> <span className="text-orange-400">Emaús</span>
            </h1>
            <div className="w-24 h-1 bg-orange-500 rounded-full mb-6"></div>
          </div>
          
          <div className="max-w-sm text-right md:text-right text-white/90 animate-fade-in delay-200">
            <p className="font-quicksand text-lg italic leading-relaxed mb-4">
              "¿No ardía nuestro corazón en nosotros, mientras nos hablaba en el camino?"
            </p>
            <span className="font-bold text-orange-400 tracking-widest text-sm">LC 24, 32</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Experience Section - Inspired by Image 2 */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl mb-20 group">
              <img 
                src="https://elretirodeemaus.com/wp-content/uploads/2025/11/jesus.webp" 
                alt="Caminando a Emaús" 
                className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-8">
                <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] mb-6 uppercase">
                  Próximos Retiros
                </span>
                <h2 className="font-cinzel text-5xl md:text-7xl text-white font-bold mb-6">
                  El Retiro
                </h2>
                <div className="w-16 h-1 bg-white/40 mb-8"></div>
                <p className="text-white/90 text-xl max-w-2xl font-medium italic">
                  "El corazón del Retiro de Emaús son los testimonios personales."
                </p>
                <div className="absolute top-8 right-8 text-white/60 font-bold tracking-widest text-sm">
                  EDICIÓN 2026
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">48 Horas</h3>
                <p className="text-slate-500">Un fin de semana diseñado para que desconectes del ruido y escuches a tu corazón.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">De Laicos para Laicos</h3>
                <p className="text-slate-500">Hombres y mujeres que comparten sus vidas para ayudarte a encontrar la tuya.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Encuentro Real</h3>
                <p className="text-slate-500">Una oportunidad para renovar tu fe o descubrirla por primera vez.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Preguntas Frecuentes</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            <details className="group bg-slate-50 rounded-[2rem] p-8 border border-slate-100 transition-all cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-slate-800 list-none">
                ¿Qué debo llevar al retiro?
                <span className="text-orange-500 transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                Solo necesitas ropa cómoda, artículos de aseo personal y, sobre todo, un corazón abierto. El resto de los detalles te los enviaremos por correo una vez confirmada tu plaza.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-[2rem] p-8 border border-slate-100 transition-all cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-xl text-slate-800 list-none">
                ¿Cuál es el precio del retiro?
                <span className="text-orange-500 transition-transform group-open:rotate-180">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                El precio incluye alojamiento y todas las comidas del fin de semana. Si el coste económico es un impedimento para ti, por favor háznoslo saber en el formulario; que nadie se quede sin vivir Emaús por dinero.
              </p>
            </details>
          </div>

          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">¿Sientes la llamada?</h3>
              <p className="text-slate-400 mb-10 max-w-lg mx-auto">
                Las plazas son limitadas y se asignan por orden de inscripción. No dejes para mañana lo que Dios tiene preparado para ti hoy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contacto"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-orange-500/20"
                >
                  Inscribirme Ahora
                </Link>
                <a 
                  href="tel:956856561"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg transition-all"
                >
                  Más Información
                </a>
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmmausPage;
