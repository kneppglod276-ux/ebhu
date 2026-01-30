
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('accueil');

  const renderContent = () => {
    switch (currentTab) {
      case 'accueil':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
            <Hero onContactClick={() => setCurrentTab('contact')} />
            
            {/* Section – EXTERNALISATION DE FONCTIONS SUPPORT */}
            <section className="py-24 bg-white border-b border-slate-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                  <div className="flex-1">
                    <h2 className="text-sm font-bold text-[#39aa43] uppercase tracking-[0.2em] mb-4">Externalisation Support</h2>
                    <h3 className="text-4xl font-sora font-bold text-[#273f91] mb-8 leading-tight">
                      Une approche personnalisée pour vos objectifs.
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Notre approche personnalisée garantit que chaque membre de notre équipe s’intègre parfaitement à votre structure et contribue activement à vos objectifs.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Libérez-vous des tâches administratives et opérationnelles en externalisant avec EBHI. Nous gérons tout, du recrutement à l’emploi du personnel, vous permettant de vous concentrer sur la direction opérationnelle.
                    </p>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="h-48 bg-slate-100 rounded-2xl overflow-hidden shadow-inner">
                       <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                    </div>
                    <div className="h-48 bg-slate-100 rounded-2xl overflow-hidden mt-8 shadow-inner">
                       <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section – MÉTHODOLOGIE (L'APPROCHE D'EXCELLENCE) */}
            <section className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                  <h2 className="text-sm font-bold text-[#e4002b] uppercase tracking-[0.2em] mb-4">L'Approche d'Excellence</h2>
                  <h3 className="text-4xl font-sora font-bold text-[#273f91]">Notre méthodologie en 4 piliers</h3>
                  <p className="text-slate-500 mt-4">Chaque lettre de EBHI représente un aspect clé de notre philosophie d’entreprise.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {[
                    { id: "01", title: "Analyse & Optimisation", desc: "Évaluation approfondie des processus existants et identification des axes d'amélioration." },
                    { id: "02", title: "Structuration du Projet", desc: "Organisation méthodique des ressources et planification détaillée du déploiement." },
                    { id: "03", title: "Mobilisation des Ressources", desc: "Déploiement stratégique des compétences et outils nécessaires à la réussite du projet." },
                    { id: "04", title: "Intégration & Amélioration", desc: "Mise en œuvre suivie d’un processus d’optimisation permanente pour des résultats durables." }
                  ].map((step, idx) => (
                    <div key={idx} className="relative group">
                      <span className="text-8xl font-black text-[#273f91]/5 absolute -top-10 -left-4 group-hover:text-[#39aa43]/10 transition-colors">{step.id}</span>
                      <div className="relative z-10 pt-8">
                        <h4 className="text-xl font-bold text-[#273f91] mb-4">{step.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Features />

            {/* SECTION – COMMENT ÇA FONCTIONNE ? */}
            <section className="py-24 bg-[#273f91] text-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-[#39aa43] uppercase tracking-[0.2em] mb-4">Processus Opérationnel</h2>
                  <h3 className="text-4xl font-sora font-bold">Comment ça fonctionne ?</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: "Analyse des besoins", desc: "Compréhension de vos objectifs et élaboration d’une stratégie adaptée." },
                    { title: "Recrutement", desc: "Sélection rigoureuse des talents répondant à vos critères." },
                    { title: "Mise en place", desc: "Fourniture de tout le matériel et les locaux nécessaires." },
                    { title: "Gestion administrative", desc: "Prise en charge complète des démarches administratives." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                      <div className="w-10 h-10 bg-[#39aa43] rounded-full flex items-center justify-center font-bold mb-6">{idx + 1}</div>
                      <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                      <p className="text-blue-100/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION – ILS NOUS FONT CONFIANCE */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold text-[#e1d121] uppercase tracking-[0.2em] mb-4">Témoignages</h2>
                  <h3 className="text-4xl font-sora font-bold text-[#273f91]">Ils nous font confiance</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { name: "Sabrina B.", title: "CEO, RSE Conseil", text: "« Grâce à EBHI, nous bénéficions aujourd’hui d’un support web fiable et réactif. Leur équipe a parfaitement compris nos besoins. »" },
                    { name: "Ronan L.", title: "CEO, La Bonne Allure", text: "« Le processus de recrutement et de mise en place des ressources a été très fluide grâce à EBHI. Extrêmement satisfaits. »" },
                    { name: "Isabelle D.", title: "BASF", text: "« EBHI nous a grandement facilité la gestion de notre support client. Leur équipe est disponible, réactive et professionnelle. »" }
                  ].map((t, idx) => (
                    <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                      <div className="flex text-[#e1d121] mb-6">
                        {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                      </div>
                      <p className="text-slate-600 italic mb-8 leading-relaxed">{t.text}</p>
                      <div>
                        <p className="font-bold text-[#273f91]">{t.name}</p>
                        <p className="text-xs text-[#39aa43] font-bold uppercase">{t.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION – QUI SOMMES-NOUS ? & SECTEURS */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="flex-1">
                    <h2 className="text-sm font-bold text-[#39aa43] uppercase tracking-[0.2em] mb-6">Qui sommes-nous ?</h2>
                    <h3 className="text-4xl font-sora font-bold mb-8">Votre partenaire stratégique</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                      Chez Entrepreneur Business Hub International (EBHI), nous sommes plus qu’un simple prestataire. Nous transformons vos défis opérationnels en opportunités de croissance.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                       {[
                         { val: "+250", label: "Projets" },
                         { val: "+12", label: "Expertises" },
                         { val: "+20", label: "Partenariats" },
                         { val: "+100", label: "Talents" }
                       ].map((stat, i) => (
                         <div key={i}>
                           <p className="text-3xl font-bold text-[#39aa43]">{stat.val}</p>
                           <p className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</p>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="flex-1 bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10">
                    <h4 className="text-xl font-bold mb-6">Secteurs d'intervention</h4>
                    <div className="flex flex-wrap gap-4">
                      {["Technologie", "Design", "Commerce", "Ingénierie", "Chimie", "Service Client", "Logistique"].map((s, i) => (
                        <span key={i} className="px-6 py-2 bg-[#273f91]/40 border border-[#273f91] rounded-full text-sm font-medium hover:bg-[#39aa43] transition-colors cursor-default">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="mt-8 text-sm text-slate-400">
                      EBHI a les compétences pour répondre à vos besoins spécifiques, garantissant une installation complète et personnalisée.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* APPEL À L'ACTION */}
            <section className="py-24 bg-[#39aa43] text-white">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h3 className="text-4xl md:text-5xl font-sora font-bold mb-8">Prêt à prendre un bond dans votre business ?</h3>
                <p className="text-green-50 text-lg mb-12">Accélérez votre croissance avec des solutions sur mesure. Nous vous aidons à franchir un cap décisif vers la réussite.</p>
                <button 
                  onClick={() => setCurrentTab('contact')}
                  className="px-10 py-5 bg-[#273f91] rounded-2xl font-bold text-xl hover:bg-slate-900 transition-all shadow-2xl"
                >
                  Lancez-vous maintenant
                </button>
              </div>
            </section>
          </div>
        );
      case 'services':
        return (
          <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-7xl mx-auto px-6">
              {/* Introduction Services */}
              <div className="text-center mb-24">
                <h2 className="text-sm font-bold text-[#39aa43] uppercase tracking-[0.2em] mb-4">Notre Expertise</h2>
                <h3 className="text-5xl font-sora font-bold text-[#273f91] mb-8 leading-tight">Solutions d'Externalisation sur-mesure</h3>
                <p className="text-slate-500 max-w-3xl mx-auto text-lg">
                  EBHI vous offre un levier de croissance immédiat en prenant en charge vos fonctions non-stratégiques avec une rigueur d'excellence. 
                  Optimisez vos coûts sans compromettre la qualité.
                </p>
              </div>

              {/* Les 4 Pôles de Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                {/* Pôle 1: Support Administratif */}
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-[#273f91]/10 text-[#273f91] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#273f91] group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <h4 className="text-3xl font-bold text-[#273f91] mb-6">Fonctions Support & Admin</h4>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Déléguez la gestion chronophage de votre quotidien administratif à nos experts polyvalents.
                  </p>
                  <div className="space-y-4 mb-10">
                    {[
                      { t: "Saisie et Archivage de données", d: "Numérisation et classement structuré." },
                      { t: "Secrétariat de Direction", d: "Gestion d'agendas et de déplacements." },
                      { t: "Support ADV", d: "Administration des ventes et facturation." },
                      { t: "Standard Déporté", d: "Accueil téléphonique professionnel 5j/7." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <span className="mt-1 flex-shrink-0 w-2 h-2 bg-[#39aa43] rounded-full"></span>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{item.t}</p>
                          <p className="text-xs text-slate-500">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pôle 2: RH & Recrutement */}
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-[#39aa43]/10 text-[#39aa43] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#39aa43] group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <h4 className="text-3xl font-bold text-[#273f91] mb-6">RH, Paie & Recrutement</h4>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Devenez plus agile en nous confiant le sourcing et la gestion administrative de vos talents.
                  </p>
                  <div className="space-y-4 mb-10">
                    {[
                      { t: "Sourcing de Talents", d: "Chasse de profils spécialisés IT/Tertiaire." },
                      { t: "Gestion de la Paie", d: "Édition et vérification des bulletins." },
                      { t: "Onboarding complet", d: "Intégration culturelle et technique." },
                      { t: "Veille Sociale", d: "Conformité légale et disciplinaire." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <span className="mt-1 flex-shrink-0 w-2 h-2 bg-[#e4002b] rounded-full"></span>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{item.t}</p>
                          <p className="text-xs text-slate-500">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pôle 3: Support Client / BPO */}
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-[#e1d121]/10 text-[#e1d121] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#e1d121] group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                  </div>
                  <h4 className="text-3xl font-bold text-[#273f91] mb-6">Relation Client & BPO</h4>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Une expérience client premium assurée par des conseillers formés à votre culture d'entreprise.
                  </p>
                  <div className="space-y-4 mb-10">
                    {[
                      { t: "Service Client Multicanal", d: "Email, chat, réseaux sociaux." },
                      { t: "Prise de rendez-vous", d: "Prospection et qualification lead." },
                      { t: "Support Technique N1", d: "Résolution des incidents courants." },
                      { t: "Modération de contenu", d: "Gestion de l'image de marque online." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <span className="mt-1 flex-shrink-0 w-2 h-2 bg-[#273f91] rounded-full"></span>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{item.t}</p>
                          <p className="text-xs text-slate-500">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pôle 4: Solutions Digitales */}
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-[#e4002b]/10 text-[#e4002b] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#e4002b] group-hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <h4 className="text-3xl font-bold text-[#273f91] mb-6">Solutions Digitales & IT</h4>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Maintenez votre avantage technologique grâce à nos pôles de développement et support IT.
                  </p>
                  <div className="space-y-4 mb-10">
                    {[
                      { t: "Support Web & CMS", d: "Mise à jour et maintenance site." },
                      { t: "Intégration No-Code", d: "Automatisation de workflows métiers." },
                      { t: "Gestion de Database", d: "Nettoyage et enrichissement CRM." },
                      { t: "Audit Digital", d: "Optimisation de votre stack logicielle." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <span className="mt-1 flex-shrink-0 w-2 h-2 bg-[#e1d121] rounded-full"></span>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{item.t}</p>
                          <p className="text-xs text-slate-500">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Secteurs Detail Section */}
              <div className="bg-slate-50 rounded-[4rem] p-16 mb-24">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="lg:w-1/2">
                    <h4 className="text-sm font-bold text-[#39aa43] uppercase tracking-widest mb-6">Nos Secteurs d'Intervention</h4>
                    <h3 className="text-4xl font-sora font-bold text-[#273f91] mb-8 leading-tight">Une expertise métier adaptée à votre industrie</h3>
                    <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                      Que vous soyez une start-up en pleine croissance ou un groupe industriel établi, nous configurons nos équipes pour parler votre langage technique et respecter vos standards sectoriels.
                    </p>
                    <button className="px-8 py-4 bg-[#273f91] text-white rounded-2xl font-bold hover:shadow-xl transition-all">Consulter une étude sectorielle</button>
                  </div>
                  <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                    {[
                      { s: "Technologie", d: "SaaS, Hardware, Fintech" },
                      { s: "Chimie & Santé", d: "Laboratoires, Pharma" },
                      { s: "Design & Media", d: "Agences, Production" },
                      { s: "Commerce", d: "Retail, E-commerce, Import" }
                    ].map((sec, i) => (
                      <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:translate-y-[-5px] transition-all">
                        <p className="text-[#39aa43] font-bold text-lg mb-1">{sec.s}</p>
                        <p className="text-slate-400 text-xs uppercase tracking-widest">{sec.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Engagement d'Excellence */}
              <div className="text-center py-20 border-t border-slate-100">
                <p className="text-2xl font-sora font-bold text-[#273f91] mb-8">EBHI garantit en moyenne une réduction de 35% des coûts de structure dès la première année.</p>
                <div className="flex justify-center gap-12 text-[#39aa43] font-bold">
                  <div className="text-center"><p className="text-4xl">100%</p><p className="text-xs text-slate-400 uppercase">Conformité RGPD</p></div>
                  <div className="text-center"><p className="text-4xl">24/7</p><p className="text-xs text-slate-400 uppercase">Disponibilité Optionnelle</p></div>
                  <div className="text-center"><p className="text-4xl">-25%</p><p className="text-xs text-slate-400 uppercase">Turnover Client</p></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'ressources':
        return (
          <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-7xl mx-auto px-6">
              {/* Hero Ressources */}
              <div className="bg-[#273f91] rounded-[4rem] p-16 mb-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#39aa43] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 max-w-2xl">
                  <h2 className="text-sm font-bold text-[#39aa43] uppercase tracking-[0.2em] mb-4">Centre de Savoirs</h2>
                  <h3 className="text-5xl font-sora font-bold mb-8 leading-tight">Accélérez votre vision stratégique</h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-10 opacity-80">
                    Découvrez nos analyses exclusives, nos guides pratiques et nos retours d'expérience pour maîtriser les enjeux de l'externalisation moderne.
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#273f91] bg-slate-200 overflow-hidden"><img src={`https://i.pravatar.cc/100?u=${i}`} alt="" /></div>)}
                    </div>
                    <p className="text-sm text-blue-200">+500 experts lisent nos contenus mensuellement</p>
                  </div>
                </div>
              </div>

              {/* Filtres Simple */}
              <div className="flex flex-wrap gap-4 mb-16 justify-center">
                {["Tous les contenus", "Livre Blanc", "Étude de Cas", "Article Expert", "Actualités"].map((f, i) => (
                  <button key={i} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-[#39aa43] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                    {f}
                  </button>
                ))}
              </div>
              
              {/* Grille de Ressources */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
                {[
                  { 
                    title: "L'Externalisation Off-Shore en 2024", 
                    cat: "Livre Blanc", 
                    tag: "Stratégie", 
                    img: "https://images.unsplash.com/photo-1454165833767-027ffea10c37?auto=format&fit=crop&q=80&w=600",
                    desc: "Un guide complet de 40 pages sur les nouvelles zones d'influence et l'impact de l'IA sur l'externalisation."
                  },
                  { 
                    title: "Étude : BASF optimise son support", 
                    cat: "Étude de Cas", 
                    tag: "Industrie", 
                    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600",
                    desc: "Découvrez comment un géant de la chimie a réduit ses délais de traitement support de 40% avec EBHI."
                  },
                  { 
                    title: "Recrutement IT : Le défi de l'intégration", 
                    cat: "Article Expert", 
                    tag: "RH", 
                    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
                    desc: "Les 5 clés pour réussir l'onboarding de développeurs déportés sans friction culturelle."
                  },
                  { 
                    title: "Guide : Fiscalité de l'externalisation", 
                    cat: "Livre Blanc", 
                    tag: "Finance", 
                    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
                    desc: "Tout ce que vous devez savoir sur la gestion fiscale des prestations de services internationales."
                  },
                  { 
                    title: "L'automatisation No-Code en entreprise", 
                    cat: "Article Expert", 
                    tag: "Digital", 
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
                    desc: "Pourquoi combiner externalisation humaine et outils No-Code est le futur de l'efficacité."
                  },
                  { 
                    title: "Success Story : RSE Conseil", 
                    cat: "Étude de Cas", 
                    tag: "E-commerce", 
                    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
                    desc: "Comment une petite agence a pu scaler son activité x3 en délégant son administration."
                  }
                ].map((post, i) => (
                  <div key={i} className="group cursor-pointer flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all">
                    <div className="relative h-60 overflow-hidden">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-black text-[#273f91] uppercase tracking-widest">{post.cat}</span>
                        <span className="px-3 py-1 bg-[#39aa43]/95 backdrop-blur-sm rounded-full text-[10px] font-black text-white uppercase tracking-widest">{post.tag}</span>
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h4 className="text-xl font-bold text-[#273f91] mb-4 group-hover:text-[#39aa43] transition-colors">{post.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{post.desc}</p>
                      <div className="mt-auto flex items-center text-[#39aa43] font-bold text-sm">
                        <span>Télécharger la ressource</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Call to Action */}
              <div className="bg-slate-50 rounded-[4rem] p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-slate-100">
                <div className="lg:w-1/2">
                  <h4 className="text-3xl font-sora font-bold text-[#273f91] mb-4">Restez à la pointe de l'externalisation</h4>
                  <p className="text-slate-500 leading-relaxed">Inscrivez-vous pour recevoir une veille mensuelle sur l'efficacité business, le management déporté et les tendances technologiques.</p>
                </div>
                <div className="lg:w-1/2 flex gap-4 w-full">
                  <input type="email" placeholder="Votre email professionnel" className="flex-1 px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#39aa43] outline-none" />
                  <button className="px-8 py-4 bg-[#39aa43] text-white rounded-2xl font-bold hover:bg-[#2e8b37] shadow-lg transition-all">S'inscrire</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="pt-32 pb-24 animate-in fade-in zoom-in-95 duration-500">
            <div className="max-w-5xl mx-auto px-6">
              <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
                <div className="md:w-1/3 bg-[#273f91] p-12 text-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Contactez-nous</h3>
                    <p className="text-blue-100 mb-12">Prenez rendez-vous avec un conseiller expert pour un audit personnalisé.</p>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <span className="text-sm">contact@ebhi.fr</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <span className="text-sm text-center">Bureau 7, Centre d'Affaire Jihane,<br/>Marrakech</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <span className="text-sm">+33 1 84 60 38 50</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-12 bg-white">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#39aa43] outline-none" placeholder="Votre nom" />
                      <input type="text" className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#39aa43] outline-none" placeholder="Votre prénom" />
                    </div>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#39aa43] outline-none" placeholder="Votre email *" required />
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#39aa43] outline-none" placeholder="Numéro de téléphone" />
                    <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#39aa43] outline-none" placeholder="Message"></textarea>
                    <button className="w-full py-4 bg-[#39aa43] text-white rounded-xl font-bold hover:bg-[#2e8b37] transition-all">
                      Envoyer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeTab={currentTab} onTabChange={setCurrentTab} />
      <main className="min-h-[70vh]">
        {renderContent()}
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
