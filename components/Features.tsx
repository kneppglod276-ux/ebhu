
import React from 'react';
import { ICONS } from '../constants';

const Features: React.FC = () => {
  const items = [
    {
      title: "Efficacité",
      description: "Améliorez votre productivité et réduisez vos coûts. Nos équipes livrent des résultats rapides et conformes.",
      icon: ICONS.Globe,
      color: "text-[#273f91]",
      bg: "bg-blue-50"
    },
    {
      title: "Business structuré",
      description: "Organisation claire et processus définis pour assurer une externalisation fluide et optimale.",
      icon: ICONS.Users,
      color: "text-[#39aa43]",
      bg: "bg-green-50"
    },
    {
      title: "Hub de talents",
      description: "Professionnels hautement qualifiés et spécialisés pour répondre à tous vos besoins métiers.",
      icon: ICONS.BookOpen,
      color: "text-[#e1d121]",
      bg: "bg-yellow-50"
    },
    {
      title: "Innovation",
      description: "Solutions technologiques de pointe pour optimiser les processus et offrir des services performants.",
      icon: ICONS.Microscope,
      color: "text-[#e4002b]",
      bg: "bg-red-50"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#39aa43] uppercase tracking-[0.2em] mb-4">Valeurs et Engagements</h2>
          <h3 className="text-4xl font-sora font-bold text-[#273f91]">Notre engagement pour votre réussite</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="group p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
