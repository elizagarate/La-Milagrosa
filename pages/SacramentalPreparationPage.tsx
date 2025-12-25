
import React from 'react';
import { Link } from 'react-router-dom';

const PreparationSection = ({ title, duration, contact, steps, icon, gradient, bgColor }: any) => {
  return (
    <div className={`rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100 ${bgColor} group hover:shadow-xl transition-all duration-500`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div className="flex items-center gap-6">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${gradient}`}>
            {icon}
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-800">{title}</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
              <span className="text-sm font-semibold text-slate-500 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Duración: {duration}
              </span>
              <span className="text-sm font-semibold text-slate-500 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Contacto: {contact}
              </span>
            </div>
          </div>
        </div>
        <button className={`px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${gradient}`}>
          Solicitar Información
        </button>
      </div>

      <div className="space-y-6">
        <h4 className="text-lg font-bold text-slate-700 ml-2 mb-6">Pasos a seguir:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step: string, i: number) => (
            <div key={i} className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-slate-50 relative overflow-hidden h-full flex flex-col">
              <span className={`text-5xl font-black absolute -right-2 -bottom-2 opacity-5 italic ${gradient.replace('bg-gradient-to-br', 'text-')}`}>
                {i + 1}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4 shrink-0 ${gradient}`}>
                {i + 1}
              </div>
              <p className="text-slate-700 font-medium leading-snug">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SacramentalPreparationPage: React.FC = () => {
  const preparationData = [
    {
      title: 'Bautismo',
      duration: '1-2 meses',
      contact: 'Secretaría parroquial',
      gradient: 'bg-gradient-to-br from-blue-400 to-indigo-600',
      bgColor: 'bg-blue-50/30',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l.649-.649a2 2 0 011.414-.586h2.946a2 2 0 011.414.586l.649.649a2 2 0 102.828-2.828l-2.387-2.387zM12 4c-4.418 0-8 3.582-8 8a8 8 0 008 8c.245 0 .487-.01.727-.03M12 4v4m0 0l-2-2m2 2l2-2" /></svg>,
      steps: [
        'Acudir a la secretaría parroquial con partida de nacimiento',
        'Asistir a las charlas de preparación (padres y padrinos)',
        'Entrevista con el sacerdote',
        'Fijar fecha de la celebración'
      ]
    },
    {
      title: 'Primera Comunión',
      duration: '2 años',
      contact: 'Coordinación de catequesis',
      gradient: 'bg-gradient-to-br from-amber-400 to-orange-500',
      bgColor: 'bg-amber-50/30',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>,
      steps: [
        'Inscripción en catequesis parroquial',
        'Completar 2 años de formación catequética',
        'Participación activa en la comunidad',
        'Retiro de preparación inmediata'
      ]
    },
    {
      title: 'Confirmación',
      duration: '2 años',
      contact: 'Coordinación de catequesis',
      gradient: 'bg-gradient-to-br from-rose-400 to-rose-600',
      bgColor: 'bg-rose-50/30',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      steps: [
        'Inscripción en catequesis de Confirmación',
        'Completar el proceso formativo',
        'Elegir padrino/madrina confirmado',
        'Retiro espiritual de preparación'
      ]
    },
    {
      title: 'Matrimonio',
      duration: '3-6 meses',
      contact: 'Párroco',
      gradient: 'bg-gradient-to-br from-emerald-500 to-teal-700',
      bgColor: 'bg-emerald-50/30',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      steps: [
        'Entrevista inicial con el sacerdote',
        'Presentar documentación requerida',
        'Completar curso de preparación',
        'Amonestaciones y fijación de fecha'
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="py-20 pastel-gradient-1 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/50 text-indigo-700 text-xs font-bold uppercase tracking-widest animate-fade-in">
            Acompañamiento Espiritual
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 animate-scale-in">
            Preparación Sacramental
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Conoce los pasos necesarios para prepararte y recibir los sacramentos de la Iglesia con la debida disposición.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-60 translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          {preparationData.map((item, idx) => (
            <PreparationSection key={idx} {...item} />
          ))}
        </div>
      </section>

      {/* FAQ / Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 text-center space-y-8">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto text-3xl">
              💡
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-800">¿Tienes más preguntas?</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Acércate a la secretaría parroquial o llámanos. Estaremos encantados de ayudarte en tu camino de fe.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link 
                to="/contacto"
                className="px-10 py-4 bg-indigo-500 text-white rounded-2xl font-bold text-lg hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-100"
              >
                Ir a Contacto
              </Link>
              <a 
                href="tel:956856561"
                className="px-10 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Llamar: 956 85 65 61
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SacramentalPreparationPage;
