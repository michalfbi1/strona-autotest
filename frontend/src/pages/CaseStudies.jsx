import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  DollarSign, 
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Car,
  Filter,
  Shield
} from 'lucide-react';
import { mockData } from '../mockData';

export const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Extended case studies data
  const extendedCaseStudies = [
    ...mockData.caseStudies,
    {
      id: 4,
      model: "Audi A4 2.0 TFSI 2018",
      problem: "Podejrzanie niska cena na rynku",
      action: "Weryfikacja historii + inspekcja lakiernicza",
      result: "Wykryto kolizję - uniknięto zakupu wadliwego auta",
      location: "Poznań",
      budget: "80-100k PLN",
      clientType: "Prywatny",
      brand: "Audi",
      savings: 0,
      status: "avoided"
    },
    {
      id: 5,
      model: "Mercedes C-Class 2.2 CDI 2017",
      problem: "Skomplikowana historia importu",
      action: "Weryfikacja dokumentów + inspekcja techniczna",
      result: "Oszczędność 14 200 PLN + legalizacja importu",
      location: "Wrocław",
      budget: "90-120k PLN", 
      clientType: "Prywatny",
      brand: "Mercedes",
      savings: 14200,
      status: "success"
    },
    {
      id: 6,
      model: "Volkswagen Passat 1.6 TDI 2019",
      problem: "Zakup dla floty - 5 identycznych aut",
      action: "Negocjacje grupowe + inspekcje seryjne",
      result: "Oszczędność łączna 38 000 PLN dla całej floty",
      location: "Łódź",
      budget: "200-250k PLN",
      clientType: "Firma",
      brand: "Volkswagen", 
      savings: 38000,
      status: "success"
    }
  ];

  const filters = [
    { id: 'all', label: 'Wszystkie', count: extendedCaseStudies.length },
    { id: 'Prywatny', label: 'Klienci prywatni', count: extendedCaseStudies.filter(cs => cs.clientType === 'Prywatny').length },
    { id: 'Firma', label: 'Firmy', count: extendedCaseStudies.filter(cs => cs.clientType === 'Firma').length },
    { id: 'success', label: 'Udane zakupy', count: extendedCaseStudies.filter(cs => cs.status === 'success').length },
    { id: 'avoided', label: 'Uniknięte problemy', count: extendedCaseStudies.filter(cs => cs.status === 'avoided').length }
  ];

  const filteredCaseStudies = selectedFilter === 'all' 
    ? extendedCaseStudies
    : extendedCaseStudies.filter(cs => cs.clientType === selectedFilter || cs.status === selectedFilter);

  const totalSavings = extendedCaseStudies.reduce((sum, cs) => sum + (cs.savings || 0), 0);
  const averageSavings = Math.round(totalSavings / extendedCaseStudies.filter(cs => cs.savings > 0).length);

  return (
    <div className="min-h-screen text-text bg-[#050505] relative overflow-hidden">
      
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#FFD200]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        
        <section className="py-20 lg:py-28 border-b border-white/5">
          <div className="container max-w-[1200px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest">
              <span>Nasze Realizacje</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white">
              Fakty. Liczby. <span className="text-[#FFD200]">Oszczędności.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Zobacz, jak w praktyce chronimy portfele naszych klientów. Od uniknięcia zakupu "miny" po twarde negocjacje cenowe.
            </p>
          </div>
        </section>

        
        <section className="py-16 border-b border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
          <div className="container max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 text-center flex flex-col justify-center">
                <Car className="w-10 h-10 text-[#FFD200] mb-4 mx-auto"/>
                <div className="text-4xl font-black text-white mb-2">{extendedCaseStudies.length}+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Zrealizowanych weryfikacji</div>
              </div>
              
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 text-center flex flex-col justify-center">
                <TrendingUp className="w-10 h-10 text-green-400 mb-4 mx-auto"/>
                <div className="text-4xl font-black text-white mb-2">{(totalSavings / 1000).toFixed(0)}k PLN</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Łącznych oszczędności</div>
              </div>

              <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 text-center flex flex-col justify-center">
                <DollarSign className="w-10 h-10 text-[#FFD200] mb-4 mx-auto"/>
                <div className="text-4xl font-black text-white mb-2">{(averageSavings / 1000).toFixed(0)}k PLN</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Średniej oszczędności</div>
              </div>

              <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 text-center flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,210,0,0.1)_0%,transparent_70%)] pointer-events-none"></div>
                <CheckCircle className="w-10 h-10 text-[#FFD200] mb-4 mx-auto relative z-10"/>
                <div className="text-4xl font-black text-white mb-2 relative z-10">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider relative z-10">Zadowolonych klientów</div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-12">
          <div className="container max-w-[1200px] mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center px-4 text-gray-500">
                <Filter className="w-5 h-5 mr-2"/>
                <span className="text-sm font-medium">Filtruj:</span>
              </div>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-[#FFD200] text-black shadow-[0_0_20px_rgba(255,210,0,0.2)]'
                      : 'bg-[#0A0A0A] border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  {filter.label} <span className="opacity-60 ml-1">({filter.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        
        <section className="pb-24">
          <div className="container max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCaseStudies.map((caseStudy) => (
                <div 
                  key={caseStudy.id} 
                  className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 group hover:border-[#FFD200]/40 transition-all duration-500 relative flex flex-col"
                >
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 flex items-center gap-1">
                        <MapPin className="w-3 h-3"/>
                        {caseStudy.location}
                      </span>
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">
                        {caseStudy.budget}
                      </span>
                    </div>
                    <div>
                      {caseStudy.status === 'success' ? (
                        <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-xs font-bold flex items-center gap-1">
                          <CheckCircle className="w-3 h-3"/> Zakup Udany
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-[#FFD200]/10 border border-[#FFD200]/20 text-[#FFD200] rounded-lg text-xs font-bold flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3"/> Odradzano Zakup
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#FFD200] transition-colors">{caseStudy.model}</h3>

                  {/* Problem & Action */}
                  <div className="space-y-5 mb-8 flex-1">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Punkt wyjścia</span>
                      <p className="text-sm text-gray-300">{caseStudy.problem}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Działanie Autotest</span>
                      <p className="text-sm text-gray-300">{caseStudy.action}</p>
                    </div>
                  </div>

                  
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Rezultat</span>
                        <p className={`text-sm font-semibold ${
                          caseStudy.status === 'success' ? 'text-green-400' : 'text-[#FFD200]'
                        }`}>
                          {caseStudy.result}
                        </p>
                      </div>
                      
                      {caseStudy.savings > 0 && (
                        <div className="flex flex-col items-start sm:items-end bg-green-500/10 px-4 py-2 rounded-xl border border-green-500/20 shrink-0">
                          <span className="text-[10px] font-bold text-green-500/70 uppercase tracking-widest mb-0.5">Zaoszczędzono</span>
                          <div className="flex items-center text-green-400 font-bold">
                            <TrendingUp className="w-4 h-4 mr-1.5"/>
                            {(caseStudy.savings / 1000).toFixed(1)}k PLN
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        <section className="py-24 border-t border-white/5">
          <div className="container max-w-[800px] mx-auto text-center">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
              <Shield className="w-16 h-16 text-[#FFD200] mx-auto mb-6"/>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Twój przypadek może być kolejnym sukcesem
              </h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto">
                Nie ryzykuj własnych oszczędności. Zaufaj ekspertom, którzy sprawdzili już setki aut.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link className="w-full sm:w-auto px-8 py-4 bg-[#FFD200] text-black font-bold text-lg rounded-xl hover:shadow-[0_0_30px_rgba(255,210,0,0.3)] transition-all" to="/kontakt">
                  Umów konsultację
                </Link>
                <Link className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold text-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all" to="/cennik">
                  Zobacz cenniki
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};