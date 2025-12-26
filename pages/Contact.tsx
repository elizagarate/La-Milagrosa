
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    mail: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ nombre: '', mail: '', asunto: '', mensaje: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="py-16 pastel-gradient-1 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">Contacto</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta, información o simplemente para saludarnos.
          </p>
        </div>
      </section>

      {/* Info and Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-slate-800">Datos de Contacto</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700">Dirección</h4>
                      <p className="text-slate-500">Federico García Lorca, 24</p>
                      <p className="text-slate-500">11500 El Puerto de Sta María, Cádiz</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-50 p-4 rounded-2xl text-rose-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700">Teléfono</h4>
                      <p className="text-slate-500">956 85 65 61</p>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700">Email</h4>
                      <p className="text-slate-500">info@parroquiamedallamligrosa.es</p>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-50 p-4 rounded-2xl text-amber-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700">Archivo parroquial</h4>
                      <p className="text-slate-500">Lunes y jueves 10:00-13:00 y 17:30-20:00</p>
                      <p className="text-slate-500">Martes, miércoles y viernes 10:00-13:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">Envíanos un mensaje</h3>
              {isSubmitted ? (
                <div className="bg-emerald-100 text-emerald-700 p-8 rounded-3xl text-center animate-fade-in">
                  <div className="text-4xl mb-4">✨</div>
                  <p className="font-bold text-lg">¡Mensaje enviado con éxito!</p>
                  <p className="text-sm mt-2 opacity-80">Nos pondremos en contacto contigo lo antes posible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-2">Nombre</label>
                      <input 
                        required
                        type="text" 
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border-none ring-2 ring-slate-100 focus:ring-indigo-400 outline-none transition-all bg-white"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-2">Mail</label>
                      <input 
                        required
                        type="email" 
                        name="mail"
                        value={formData.mail}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border-none ring-2 ring-slate-100 focus:ring-indigo-400 outline-none transition-all bg-white"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-2">Asunto</label>
                    <input 
                      required
                      type="text" 
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-none ring-2 ring-slate-100 focus:ring-indigo-400 outline-none transition-all bg-white"
                      placeholder="Motivo de tu consulta"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-2">Mensaje</label>
                    <textarea 
                      required
                      rows={4}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-none ring-2 ring-slate-100 focus:ring-indigo-400 outline-none transition-all resize-none bg-white"
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className={`w-full py-5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100 transition-all active:scale-95 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : 'Enviar Mensaje'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 pastel-gradient-2 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Cómo Llegar</h2>
          <p className="text-slate-600 mb-12">Encuéntranos fácilmente en el corazón del Puerto de Santa María.</p>
          
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50 bg-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.2880411756432!2d-6.243164323771478!3d36.59537117921828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dd0200e88049d%3A0xbad3285aeb766853!2sParroquia%20de%20La%20Virgen%20de%20la%20Medalla%20Milagrosa!5e0!3m2!1ses!2ses!4v1766564825654!5m2!1ses!2ses" 
              width="100%" 
              height="550" 
              style={{border: 0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
