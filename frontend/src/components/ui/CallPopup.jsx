import React, { useState, useEffect } from 'react';
import { X, Phone, ShieldCheck, Clock, Link2 } from 'lucide-react';

export const CallPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('callPopupShown');
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('callPopupShown', 'true');
        
        setTimeout(() => setShowOverlay(true), 50);
        setTimeout(() => setShowContent(true), 400);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setShowOverlay(false);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      setShowContent(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ease-out ${
        showOverlay && !isClosing ? 'bg-black/60 backdrop-blur-sm opacity-100' : 'bg-transparent backdrop-blur-none opacity-0'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`relative w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden transform transition-all duration-500 ${
          isClosing ? 'scale-95 opacity-0 translate-y-4' : showContent ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD200]/10 rounded-full blur-[80px] pointer-events-none"></div>

        
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Zamknij"
        >
          <X className="w-5 h-5"/>
        </button>

        <div className="relative z-10">
          
          <div className="w-14 h-14 bg-[#FFD200]/10 rounded-2xl flex items-center justify-center border border-[#FFD200]/20 mb-6">
            <Link2 className="w-7 h-7 text-[#FFD200]"/>
          </div>

          
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
            Znalazłeś ciekawe ogłoszenie?
          </h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Zanim stracisz czas na dojazd, zadzwoń i podaj nam link do ogłoszenia (OLX, Otomoto). <strong className="text-white font-semibold">Całkowicie za darmo</strong> ocenimy, czy warto się nim interesować.
          </p>

          
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-gray-300 bg-white/5 p-3.5 rounded-xl border border-white/5">
              <Clock className="w-4 h-4 text-[#FFD200] mr-3 shrink-0"/>
              Szybka weryfikacja w 15 minut
            </div>
            <div className="flex items-center text-sm text-gray-300 bg-white/5 p-3.5 rounded-xl border border-white/5">
              <ShieldCheck className="w-4 h-4 text-[#FFD200] mr-3 shrink-0"/>
              Ochrona przed typowymi pułapkami
            </div>
          </div>

          
          <a
            href="tel:+48690976790"
            className="w-full py-4 px-6 bg-[#FFD200] text-black font-bold text-lg rounded-xl flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,210,0,0.2)] hover:shadow-[0_0_30px_rgba(255,210,0,0.4)] transition-all hover:-translate-y-1"
          >
            <Phone className="w-5 h-5"/>
            +48 690 976 790
          </a>

          {/* Odrzucenie */}
          <button
            onClick={handleClose}
            className="w-full mt-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors"
          >
            Nie, dziękuję, poradzę sobie sam
          </button>
        </div>
      </div>
    </div>
  );
};
