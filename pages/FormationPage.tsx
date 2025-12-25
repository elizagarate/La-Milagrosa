
import React from 'react';
import { Link } from 'react-router-dom';

const GroupSection = ({ title, icon, groups, bgColor }: any) => {
  return (
    <div className={`rounded-[3rem] p-10 ${bgColor} border border-white/50 shadow-sm mb-12`}>
      <div className="flex items-center gap-4 mb-10">
        <div className="text-4xl">{icon}</div>
        <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group: any, idx: number) => (
          <div key={idx} className="bg-white/70 backdrop-blur-sm p-6 rounded-3xl border border-white/50 hover:shadow-md transition-all group">
            <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
              {group.name}
            </h4>
            {group.desc && <p className="text-slate-600 text-sm mb-4 leading-relaxed">{group.desc}</p>}
            {group.schedule && (
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-500 bg-indigo-50 px-3 py-1.5 rounded-full w-fit">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {group.schedule}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const FormationPage: React.FC = () => {
  const catequesisGroups = [
    { name: 'Grupo de Formación Cristiana', desc: 'Iniciación a la lectura de la Biblia.' },
    { name: 'Grupo de Adultos Avanzado', desc: 'Grupo de catequesis de adultos.', schedule: 'Martes a las 20:30' },
    { name: 'Grupo de Adultos Comienzos', desc: 'Grupo de Catequesis de adultos.' },
    { name: 'Grupo de Confirmación de Adultos', desc: 'Para adultos que no han recibido la Confirmación.' },
  ];

  const prayerGroups = [
    { name: 'Escuela de Oración', desc: 'Para aprender a orar, a cargo de Diego Pacheco.', schedule: 'Lunes a las 18:00' },
    { name: 'Grupo Adoración Nocturna', desc: 'Encuentro mensual con el Santísimo.', schedule: 'Primer viernes del mes a las 20:00' },
    { name: 'Grupo de Vida Ascendente', desc: 'Grupo de fe para mayores de 65 años.', schedule: 'Todos los lunes a las 18:30' },
    { name: 'Cursillos de Cristiandad', desc: 'Grupo para meditar la Palabra de Dios.', schedule: 'Miércoles a las 20:30' },
    { name: 'Grupo de Biblia', desc: 'Para profundizar en la Palabra de Dios.' },
  ];

  const movements = [
    { name: 'Movimiento Emaús - Hombres', desc: 'Retiros y vida de fe para varones.', schedule: 'Martes a las 19:30' },
    { name: 'Movimiento Emaús - Mujeres', desc: 'Retiros y vida de fe para mujeres.', schedule: 'Lunes a las 19:30' },
    { name: 'Movimiento Scouts Católicos', desc: 'Formación en valores para niños y jóvenes.', schedule: 'Sábados por la mañana' },
  ];

  const supportGroups = [
    { name: 'Alcohólicos Anónimos', schedule: 'Martes, jueves y sábados por la tarde' },
    { name: 'Familiares de Alcohólicos Anónimos', schedule: 'Lunes y sábados por la tarde' },
    { name: 'Jugadores Anónimos', schedule: 'Sábados por la tarde' },
    { name: 'Familiares de Jugadores Anónimos', schedule: 'Sábados por la tarde' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="py-24 pastel-gradient-3 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/60 text-indigo-700 text-xs font-bold uppercase tracking-widest animate-fade-in">
            Escuela de Discipulado
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 animate-scale-in">
            Formación <span className="text-indigo-500">Parroquial</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in italic mb-12">
            "Donde dos o tres están reunidos en mi nombre, allí estoy yo en medio de ellos."
            Nuestra parroquia ofrece una amplia variedad de grupos para crecer en la fe, la oración y el apoyo mutuo.
          </p>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      </section>

      {/* Main Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <GroupSection 
            title="Catequesis y Formación" 
            icon="📖" 
            groups={catequesisGroups} 
            bgColor="bg-emerald-50/50" 
          />
          
          <GroupSection 
            title="Espiritualidad y Oración" 
            icon="🙏" 
            groups={prayerGroups} 
            bgColor="bg-indigo-50/50" 
          />

          <GroupSection 
            title="Movimientos Parroquiales" 
            icon="🚀" 
            groups={movements} 
            bgColor="bg-amber-50/50" 
          />

          <GroupSection 
            title="Acompañamiento y Apoyo" 
            icon="🤝" 
            groups={supportGroups} 
            bgColor="bg-rose-50/50" 
          />
        </div>
      </section>

      {/* Preparation Section Link */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12">
            <div className="w-32 h-32 bg-indigo-50 rounded-full flex-shrink-0 flex items-center justify-center text-5xl">
              🕊️
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-800">Sacramentos</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                ¿Buscas información sobre Bautismos, Comuniones o Matrimonios? Consulta nuestra guía de preparación sacramental.
              </p>
              <Link 
                to="/preparacion-sacramental"
                className="inline-flex items-center gap-2 font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Guía de Preparación Sacramental <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">¿Quieres participar en algún grupo?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Nuestros grupos están abiertos a todos. Si deseas unirte o necesitas más información sobre alguno de ellos, no dudes en escribirnos o visitarnos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contacto"
              className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl"
            >
              Contactar con Secretaría
            </Link>
            <a 
              href="mailto:info@parroquiamedallamligrosa.es"
              className="px-10 py-5 bg-indigo-500 text-white border-2 border-indigo-400 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all"
            >
              Enviar Email
            </a>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default FormationPage;
