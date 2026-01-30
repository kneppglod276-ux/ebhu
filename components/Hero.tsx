
import React from 'react';

const Hero: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#273f91]/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#39aa43]/10 text-[#39aa43] text-xs font-bold tracking-widest uppercase mb-8 border border-[#39aa43]/20">
              <span className="w-2 h-2 rounded-full bg-[#e4002b]"></span>
              <span>Engineering for Life</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-sora font-bold text-[#273f91] leading-tight mb-8">
              Concentrez-vous sur l'essentiel, <span className="text-[#39aa43]">gérons le reste</span>.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Libérez-vous des tâches administratives et opérationnelles en externalisant avec EBHI. Nous gérons tout, du recrutement à l’emploi du personnel.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#273f91] text-white rounded-xl font-bold hover:bg-[#1e327a] shadow-xl transition-all">
                Découvrez nos services
              </button>
              <button 
                onClick={onContactClick}
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#273f91] border border-slate-200 rounded-xl font-bold hover:border-[#273f91] transition-all"
              >
                Contactez-nous
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[450px] animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#e1d121] rounded-2xl -rotate-12 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#273f91] mb-6">Démarrage rapide</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#39aa43] outline-none" />
                    <input type="text" placeholder="Votre prénom" className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#39aa43] outline-none" />
                  </div>
                  <input type="email" placeholder="Votre email *" required className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#39aa43] outline-none" />
                  <input type="tel" placeholder="Numéro de téléphone" className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#39aa43] outline-none" />
                  <textarea placeholder="Message" rows={2} className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#39aa43] outline-none"></textarea>
                  <button className="w-full py-4 bg-[#39aa43] text-white rounded-xl font-bold hover:bg-[#2e8b37] transition-all shadow-lg shadow-green-100">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
