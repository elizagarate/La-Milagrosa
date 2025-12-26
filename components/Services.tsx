
import React from 'react';

const Services: React.FC = () => {
  const schedule = [
    { day: 'Lunes a Sábado', evening: '20:00' },
    { day: 'Domingos y Festivos', morning: '11:00, 12:00', evening: '20:00' },
  ];

  return (
    <section id="servicios" className="py-24 pastel-gradient-2">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-white/50 flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-slate-800">Servicios Parroquiales</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Estamos a tu disposición para cualquier necesidad espiritual o trámite administrativo. Nuestro despacho parroquial es un espacio de escucha y ayuda.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700">Archivo parroquial</h4>
                  <p className="text-slate-500 text-sm">Lunes y jueves 10:00-13:00 y 17:30-20:00.</p>
                  <p className="text-slate-500 text-sm">Martes, miércoles y viernes 10:00-13:00.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700">Atención Telefónica</h4>
                  <p className="text-slate-500">956 85 65 61</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-slate-50 rounded-3xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Horario de Misas</h3>
            <div className="space-y-4">
              {schedule.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <p className="font-bold text-indigo-600 mb-2">{item.day}</p>
                  <div className={`grid ${item.morning ? 'grid-cols-2' : 'grid-cols-1'} gap-2 text-slate-600 text-sm`}>
                    {item.morning && <div>Mañanas: <span className="font-medium text-slate-800">{item.morning}</span></div>}
                    {item.evening && <div>Tardes: <span className="font-medium text-slate-800">{item.evening}</span></div>}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 italic">
              Los horarios pueden variar en periodos estivales.{" "}
              <a 
                href="https://misas.org/p/parroquia-de-la-medalla-milagrosa-el-puerto-de-santa-maria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-indigo-500 transition-colors font-medium"
              >
                Compruébalo en misas.org.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
