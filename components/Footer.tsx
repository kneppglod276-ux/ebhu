
import React from 'react';

const Footer: React.FC = () => {
  const Logo = () => (
    <div className="flex items-center space-x-3 mb-8">
      <div className="w-10 h-10 flex flex-wrap gap-[2px]">
        {/* Top Left - Blue with Chart */}
        <div className="w-[19px] h-[19px] bg-[#273f91] rounded-tl-lg flex items-end justify-center p-[3px]">
          <div className="flex items-end space-x-[1px] w-full h-full">
            <div className="w-1/3 bg-white h-[40%]"></div>
            <div className="w-1/3 bg-white h-[70%]"></div>
            <div className="w-1/3 bg-white h-[100%]"></div>
          </div>
        </div>
        {/* Top Right - Green with Arrow */}
        <div className="w-[19px] h-[19px] bg-[#39aa43] rounded-tr-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3 h-3 text-black" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
        {/* Bottom Left - Red with Chevrons */}
        <div className="w-[19px] h-[19px] bg-[#e4002b] rounded-bl-lg flex items-center justify-center p-1">
          <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="7 13 12 8 17 13"></polyline>
            <polyline points="7 19 12 14 17 19"></polyline>
          </svg>
        </div>
        {/* Bottom Right - Yellow with Dots */}
        <div className="w-[19px] h-[19px] bg-[#e1d121] rounded-br-lg grid grid-cols-3 gap-[1px] p-[3px]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-full h-full bg-black rounded-full"></div>
          ))}
        </div>
      </div>
      <span className="text-3xl font-sora font-black text-white tracking-tighter">EBHI</span>
    </div>
  );

  return (
    <footer className="bg-slate-900 text-slate-300 py-20 relative">
      <div className="absolute top-0 left-0 w-full h-1.5 flex">
        <div className="flex-1 h-full bg-[#273f91]"></div>
        <div className="flex-1 h-full bg-[#39aa43]"></div>
        <div className="flex-1 h-full bg-[#e4002b]"></div>
        <div className="flex-1 h-full bg-[#e1d121]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Entrepreneur Business Hub International accompagne les entrepreneurs et entreprises dans leur développement grâce à des services d’externalisation, des solutions digitales sur mesure et un réseau d’experts à l’international.
            </p>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Liens rapides</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#39aa43] transition-colors">À propos de nous</a></li>
              <li><a href="#" className="hover:text-[#39aa43] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#39aa43] transition-colors">Politique de cookies</a></li>
              <li><a href="#" className="hover:text-[#39aa43] transition-colors">CGU</a></li>
              <li><a href="#" className="hover:text-[#39aa43] transition-colors">Mentions légales</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Nos Services</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#39aa43] transition-colors">Efficacité</a></li>
              <li><a href="#" className="hover:text-[#39aa43] transition-colors">Business structuré</a></li>
              <li><a href="#" className="hover:text-[#39aa43] transition-colors">Hub de talents</a></li>
              <li><a href="#" className="hover:text-[#39aa43] transition-colors">Innovation</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Nous trouver</h5>
            <div className="space-y-4 text-sm text-slate-400">
              <p className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#39aa43] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Bureau 7, Centre d'Affaire Jihane, Avenue du 11 Janvier, Marrakech</span>
              </p>
              <p className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#39aa43]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+33 1 84 60 38 50</span>
              </p>
              <p className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#39aa43]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>contact@ebhi.fr</span>
              </p>
            </div>
            <div className="flex space-x-4 mt-8">
              <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-[#273f91] transition-all cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2024 EBHI - Entrepreneur Business Hub International. Engineering for Life.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
