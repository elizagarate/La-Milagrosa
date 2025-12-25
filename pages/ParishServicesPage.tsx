
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, schedule, icon, bgColor, iconColor }: { title: string, schedule: string, icon: React.ReactNode, bgColor: string, iconColor: string }) => {
  return (
    <div className={`p-8 rounded-[2.5rem] ${bgColor} border border-white/50 shadow-sm hover:shadow-md transition-all group`}>
      <div className={`w-14 h-14 rounded-2xl ${iconColor} flex items-center justify-center text-white mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 font-medium leading-relaxed whitespace-pre-line">
        {schedule}
      </p>
    </div>
  );
};

const ParishServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Visita al Sagrario',
      schedule: 'Mañanas: 09:30 a 13:30\nTardes: 17:30 a 20:45',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      bgColor: 'bg-blue-50/50',
      iconColor: 'bg-blue-500'
    },
    {
      title: 'Rezo del Rosario',
      schedule: 'Todos los días\n19:30 h.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      bgColor: 'bg-rose-50/50',
      iconColor: 'bg-rose-500'
    },
    {
      title: 'Oración de Vísperas',
      schedule: 'De lunes a viernes\n20:30 h.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      bgColor: 'bg-indigo-50/50',
      iconColor: 'bg-indigo-500'
    },
    {
      title: 'Ante el Santísimo',
      schedule: 'Todos los jueves\n20:30 h.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>,
      bgColor: 'bg-amber-50/50',
      iconColor: 'bg-amber-500'
    },
    {
      title: 'Despacho y Archivo',
      schedule: 'De lunes a viernes\n17:30 a 20:00 h.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      bgColor: 'bg-emerald-50/50',
      iconColor: 'bg-emerald-500'
    },
    {
      title: 'Cáritas Parroquial',
      schedule: 'Martes\nA partir de las 10:00 h.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      bgColor: 'bg-purple-50/50',
      iconColor: 'bg-purple-500'
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="py-24 pastel-gradient-2 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/60 text-indigo-700 text-xs font-bold uppercase tracking-widest animate-fade-in">
            Atención Pastoral
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 animate-scale-in">
            Servicios <span className="text-emerald-600">Parroquiales</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in mb-8">
            Nuestra parroquia es un lugar de puertas abiertas. Aquí encontrarás los horarios y servicios que ofrecemos para acompañarte en tu vida de fe y tus gestiones.
          </p>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <svg className="w-12 h-12 text-indigo-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.2386 16.7784 9 14.017 9V6C18.4353 6 22.017 9.58172 22.017 14V21H14.017ZM2.0166 21L2.0166 18C2.0166 16.8954 2.91203 16 4.0166 16H7.0166V14C7.0166 11.2386 4.77801 9 2.0166 9V6C6.43488 6 10.0166 9.58172 10.0166 14V21H2.0166Z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 leading-tight italic">
              “Venid a mí todos los que estéis cansados y agobiados y yo os aliviaré”
            </h2>
            <p className="text-indigo-500 font-bold mt-4 tracking-widest uppercase text-sm">Matteo 11, 28</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 shadow-sm border border-slate-100 text-center space-y-8">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-3xl">
              📍
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-800">Más información</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Para cualquier otra consulta, pásate por la parroquia de lunes a viernes a partir de las 17:30. Estaremos encantados de recibirte.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link 
                to="/contacto"
                className="px-10 py-4 bg-indigo-500 text-white rounded-2xl font-bold text-lg hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-100"
              >
                Contactar
              </Link>
              <a 
                href="tel:956856561"
                className="px-10 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
              >
                956 85 65 61
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParishServicesPage;
