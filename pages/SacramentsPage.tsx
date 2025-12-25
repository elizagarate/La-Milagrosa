
import React, { useState } from 'react';

interface SacramentInfo {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  headerGradient: string;
  requirements: string[];
  iconBgColor?: string;
  circleColor: string;
}

const SacramentCard = ({ title, subtitle, description, icon, bgColor, iconGradient, textColor, subtextColor, circleColor, onClick }: any) => {
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden rounded-[2.5rem] p-10 shadow-sm border border-slate-100/50 flex flex-col h-full transition-transform hover:-translate-y-2 group cursor-pointer ${bgColor}`}
    >
      {/* Decorative inner circle */}
      <div className={`absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-2xl opacity-40 transition-transform group-hover:scale-110 duration-700 ${circleColor}`}></div>
      
      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center shadow-lg text-white ${iconGradient}`}>
        {icon}
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <h3 className="text-3xl font-bold text-slate-800 mb-1">{title}</h3>
        <p className={`text-sm font-bold tracking-wide uppercase mb-6 ${subtextColor}`}>
          {subtitle}
        </p>
        <p className="text-slate-600 leading-relaxed text-lg mb-8 flex-grow">
          {description}
        </p>

        <div className={`flex items-center gap-2 font-bold text-sm transition-colors ${textColor}`}>
          Ver más información 
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const SacramentModal = ({ isOpen, onClose, info }: { isOpen: boolean; onClose: () => void; info: SacramentInfo | null }) => {
  if (!isOpen || !info) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in" 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl animate-scale-in">
        {/* Header with Gradient */}
        <div className={`${info.headerGradient} p-8 sm:p-10 relative`}>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-6">
            <div className={`w-20 h-20 ${info.iconBgColor || 'bg-white/20'} rounded-3xl flex items-center justify-center text-white backdrop-blur-md shadow-inner`}>
               {info.icon}
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-1">{info.title}</h2>
              <p className="text-white/80 font-medium">{info.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-10 space-y-8">
          <p className="text-slate-600 leading-relaxed text-lg">
            {info.description}
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-slate-800">
               <svg className="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
               </svg>
               <h3 className="text-2xl font-bold">Requisitos</h3>
            </div>

            <ul className="space-y-4">
              {info.requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full ${info.circleColor} text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm`}>
                    {i + 1}
                  </div>
                  <span className="text-slate-700 font-medium text-lg">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className={`flex-1 py-4 ${info.headerGradient} text-white rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98]`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Solicitar Preparación
            </button>
            <a 
              href="tel:956856561"
              className="flex-1 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Consultar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SacramentsPage: React.FC = () => {
  const [activeModalInfo, setActiveModalInfo] = useState<SacramentInfo | null>(null);

  const sacraments = [
    {
      title: 'Bautismo',
      subtitle: 'Puerta de la Vida Cristiana',
      description: 'El Bautismo es el primer sacramento de la iniciación cristiana. A través del agua y el Espíritu Santo, nacemos a una nueva vida en Cristo y nos incorporamos a la Iglesia, su cuerpo místico.',
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l.649-.649a2 2 0 011.414-.586h2.946a2 2 0 011.414.586l.649.649a2 2 0 102.828-2.828l-2.387-2.387zM12 4c-4.418 0-8 3.582-8 8a8 8 0 008 8c.245 0 .487-.01.727-.03M12 4v4m0 0l-2-2m2 2l2-2" /></svg>,
      bgColor: 'bg-[#f1f7ff]',
      iconGradient: 'bg-gradient-to-br from-blue-400 to-blue-600',
      textColor: 'text-blue-600',
      subtextColor: 'text-blue-400',
      circleColor: 'bg-blue-200',
      onClick: () => setActiveModalInfo({
        title: 'Bautismo',
        subtitle: 'Puerta de la Vida Cristiana',
        description: 'El Bautismo es el primer sacramento de la iniciación cristiana. A través del agua y el Espíritu Santo, nacemos a una nueva vida en Cristo y nos incorporamos a la Iglesia, su cuerpo místico.',
        icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l.649-.649a2 2 0 011.414-.586h2.946a2 2 0 011.414.586l.649.649a2 2 0 102.828-2.828l-2.387-2.387zM12 4c-4.418 0-8 3.582-8 8a8 8 0 008 8c.245 0 .487-.01.727-.03M12 4v4m0 0l-2-2m2 2l2-2" /></svg>,
        headerGradient: 'bg-gradient-to-r from-blue-400 to-indigo-600',
        requirements: [
            'Partida de nacimiento del bautizando',
            'Datos de los padrinos (católicos confirmados)',
            'Asistencia a charlas de preparación',
            'Entrevista con el párroco'
        ],
        circleColor: 'bg-blue-500'
      })
    },
    {
      title: 'Primera Comunión',
      subtitle: 'Encuentro con Cristo Eucaristía',
      description: 'La Eucaristía es el sacramento en el que recibimos el Cuerpo y la Sangre de Jesucristo. Es el centro de la vida cristiana y la fuente de toda gracia.',
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>,
      bgColor: 'bg-[#fffcf1]',
      iconGradient: 'bg-gradient-to-br from-amber-400 to-amber-600',
      textColor: 'text-amber-600',
      subtextColor: 'text-amber-400',
      circleColor: 'bg-amber-200',
      onClick: () => setActiveModalInfo({
        title: 'Primera Comunión',
        subtitle: 'Encuentro con Cristo Eucaristía',
        description: 'La Eucaristía es el sacramento en el que recibimos el Cuerpo y la Sangre de Jesucristo. Es el centro de la vida cristiana y la fuente de toda gracia.',
        icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>,
        headerGradient: 'bg-gradient-to-r from-amber-400 to-orange-500',
        requirements: [
            'Estar bautizado',
            'Completar el ciclo de catequesis (2 años)',
            'Participación activa en la vida parroquial',
            'Certificado de bautismo'
        ],
        circleColor: 'bg-amber-500'
      })
    },
    {
      title: 'Confirmación',
      subtitle: 'Plenitud del Espíritu Santo',
      description: 'La Confirmación completa la gracia del Bautismo. Por este sacramento, el cristiano recibe la fuerza del Espíritu Santo para ser testigo de Cristo en el mundo.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      bgColor: 'bg-[#fff1f4]',
      iconGradient: 'bg-gradient-to-br from-rose-400 to-rose-600',
      textColor: 'text-rose-600',
      subtextColor: 'text-rose-400',
      circleColor: 'bg-rose-200',
      onClick: () => setActiveModalInfo({
        title: 'Confirmación',
        subtitle: 'Plenitud del Espíritu Santo',
        description: 'La Confirmación completa la gracia del Bautismo. Por este sacramento, el cristiano recibe la fuerza del Espíritu Santo para ser testigo de Cristo en el mundo.',
        icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
        headerGradient: 'bg-gradient-to-r from-rose-400 to-pink-600',
        requirements: [
            'Estar bautizado y haber recibido la Primera Comunión',
            'Completar el proceso de catequesis de Confirmación',
            'Elegir un padrino/madrina católico confirmado',
            'Participar en retiro espiritual'
        ],
        circleColor: 'bg-rose-500'
      })
    },
    {
      title: 'Matrimonio',
      subtitle: 'Sacramento del Amor Conyugal',
      description: 'El Matrimonio cristiano es la alianza por la que un hombre y una mujer constituyen una comunidad de vida y...',
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3a2 2 0 00-2 2v3m2-3h2m4 0h2m-6 4h1a3 3 0 013 3v1" /></svg>,
      bgColor: 'bg-[#f4f1ff]',
      iconGradient: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
      textColor: 'text-indigo-600',
      subtextColor: 'text-indigo-400',
      circleColor: 'bg-indigo-200',
      onClick: () => setActiveModalInfo({
        title: 'Matrimonio',
        subtitle: 'Sacramento del Amor Conyugal',
        description: 'El Matrimonio cristiano es la alianza por la que un hombre y una mujer constituyen una comunidad de vida y amor, elevada por Cristo a la dignidad de sacramento.',
        icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
        headerGradient: 'bg-gradient-to-r from-[#6366f1] to-[#a855f7]',
        requirements: [
            'Partidas de bautismo actualizadas',
            'Curso de preparación matrimonial',
            'Declaración de libertad',
            'Entrevistas con el sacerdote',
            'Amonestaciones parroquiales'
        ],
        circleColor: 'bg-[#6366f1]'
      })
    },
    {
      title: 'Reconciliación',
      subtitle: 'Sacramento del Perdón',
      description: 'La Reconciliación o Confesión es el sacramento por el cual Dios perdona los pecados cometidos después del...',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      bgColor: 'bg-[#f1fff6]',
      iconGradient: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
      textColor: 'text-emerald-600',
      subtextColor: 'text-emerald-400',
      circleColor: 'bg-emerald-200',
      onClick: () => setActiveModalInfo({
        title: 'Reconciliación',
        subtitle: 'Sacramento del Perdón',
        description: 'La Reconciliación o Confesión es el sacramento por el cual Dios perdona los pecados cometidos después del Bautismo. Es un encuentro de misericordia y renovación.',
        icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
        headerGradient: 'bg-gradient-to-r from-[#10b981] to-[#059669]',
        requirements: [
            'Examen de conciencia sincero',
            'Arrepentimiento de los pecados',
            'Propósito de enmienda',
            'Confesión de los pecados',
            'Cumplir la penitencia impuesta'
        ],
        circleColor: 'bg-[#10b981]'
      })
    },
    {
      title: 'Unción de Enfermos',
      subtitle: 'Consuelo en la Enfermedad',
      description: 'Este sacramento confiere una gracia especial al cristiano que experimenta dificultades inherentes a la enfermeda...',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      bgColor: 'bg-[#f4f4f4]',
      iconGradient: 'bg-gradient-to-br from-slate-400 to-slate-600',
      textColor: 'text-slate-600',
      subtextColor: 'text-slate-400',
      circleColor: 'bg-slate-200',
      onClick: () => setActiveModalInfo({
        title: 'Unción de Enfermos',
        subtitle: 'Consuelo en la Enfermedad',
        description: 'Este sacramento confiere una gracia especial al cristiano que experimenta dificultades inherentes a la enfermedad grave o a la vejez. Fortalece el alma y el cuerpo.',
        icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        headerGradient: 'bg-gradient-to-r from-[#64748b] to-[#475569]',
        requirements: [
            'Solicitar el sacramento al párroco',
            'Puede recibirse en casa, hospital o iglesia',
            'Se puede recibir varias veces si la enfermedad se agrava',
            'Se recomienda recibirlo junto con la Eucaristía'
        ],
        circleColor: 'bg-[#64748b]'
      })
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-5xl font-bold text-slate-800">Los Sacramentos</h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Signos sensibles y eficaces de la gracia, instituidos por Cristo y confiados a la Iglesia, a través de los cuales se nos otorga la vida divina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sacraments.map((sac, idx) => (
            <SacramentCard key={idx} {...sac} />
          ))}
        </div>

        {/* Note about 7th sacrament */}
        <div className="mt-20 p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-lg flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">Orden Sacerdotal</h3>
                <p className="text-slate-500 text-lg">
                    A través de este sacramento, la misión confiada por Cristo a sus Apóstoles sigue siendo ejercida en la Iglesia hasta el fin de los tiempos.
                </p>
                <div className="text-amber-700 font-bold text-sm cursor-pointer hover:underline inline-flex items-center gap-2">
                    Información Vocacional <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
        </div>
      </div>

      {/* Reusable Sacrament Modal */}
      <SacramentModal 
        isOpen={!!activeModalInfo} 
        onClose={() => setActiveModalInfo(null)} 
        info={activeModalInfo}
      />
    </div>
  );
};

export default SacramentsPage;
