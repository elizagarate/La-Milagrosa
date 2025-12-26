
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Using React.FC to handle standard React props like 'key' correctly when mapping over components
const ServiceCard: React.FC<{
  title: string;
  schedule: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}> = ({ title, schedule, icon, bgColor, iconColor }) => {
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
      title: 'Horarios de Misa en El Puerto',
      schedule: 'Laborables: 20:00 h.\nDomingos: 11:00, 12:00 y 20:00 h.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      bgColor: 'bg-indigo-50/50',
      iconColor: 'bg-indigo-500'
    },
    {
      title: 'Confesiones y Perdón',
      schedule: '30 min antes de cada misa\no bajo petición personal.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      bgColor: 'bg-rose-50/50',
      iconColor: 'bg-rose-500'
    },
    {
      title: 'Adoración Eucarística',
      schedule: 'Jueves Eucarísticos\n20:30 h. Exposición del Santísimo',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>,
      bgColor: 'bg-amber-50/50',
      iconColor: 'bg-amber-500'
    },
    {
      title: 'Archivo parroquial',
      schedule: 'Lunes y jueves 10:00-13:00 y 17:30-20:00.\nmartes, miércoles y viernes 10:00-13:00.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      bgColor: 'bg-emerald-50/50',
      iconColor: 'bg-emerald-500'
    },
    {
      title: 'Cáritas Parroquial Cádiz',
      schedule: 'Acogida: Martes\n10:00 a 12:00 h.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      bgColor: 'bg-purple-50/50',
      iconColor: 'bg-purple-500'
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SEO title="Horarios de Misa y Servicios" description="Consulta los horarios de misa en El Puerto de Santa María, atención de despacho parroquial y servicios de Cáritas en la Parroquia La Milagrosa." />
      
      {/* Hero Header */}
      <section className="py-24 pastel-gradient-2 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/60 text-indigo-700 text-xs font-bold uppercase tracking-widest animate-fade-in">
            Información Parroquial Útil
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 animate-scale-in">
            Horarios y <span className="text-emerald-600">Servicios</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in mb-8">
            Encuentra aquí toda la información necesaria para participar en la vida litúrgica y comunitaria de nuestra parroquia en El Puerto de Santa María.
          </p>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParishServicesPage;
