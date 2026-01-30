
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[128px] animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          {/* Floating Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
          
          {/* Animated SVG shapes */}
          <svg className="absolute top-20 right-[10%] w-64 h-64 text-blue-500/20 animate-bounce" style={{animationDuration: '5s'}} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <svg className="absolute bottom-40 left-[5%] w-48 h-48 text-indigo-500/10 animate-spin-slow" style={{animationDuration: '20s'}} fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
              <span className="text-blue-400 text-sm font-bold tracking-tight">VEO 3.1 POWERED ANIMATION LIVE 🎬</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9] md:leading-[0.85]">
              High-Converting <br className="hidden md:block"/> Websites & <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Content</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-600/30 -z-0 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              We help entrepreneurs, coaches, and brands turn static ideas into digital assets that actually <span className="text-white">generate revenue.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-xl font-black transition-all transform hover:scale-105 hover-glow shadow-2xl flex items-center justify-center overflow-hidden">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
              <Link to="/animate" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-full text-xl font-bold transition-all border border-slate-700 flex items-center justify-center">
                <i className="fa-solid fa-wand-magic-sparkles mr-3 text-blue-500"></i> Try AI Animation
              </Link>
            </div>

            {/* Mock Dashboard Graphic */}
            <div className="mt-20 relative mx-auto max-w-5xl group">
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] group-hover:bg-blue-600/30 transition-all duration-1000"></div>
              <div className="relative bg-slate-900 rounded-3xl border border-slate-800 p-2 shadow-2xl overflow-hidden">
                <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col md:flex-row">
                  {/* Sidebar Mockup */}
                  <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-800 p-6 hidden md:block">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg mb-8"></div>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map(i => <div key={i} className={`h-3 rounded-full ${i === 1 ? 'bg-slate-600 w-full' : 'bg-slate-800 w-3/4'}`}></div>)}
                    </div>
                  </div>
                  {/* Main Mockup */}
                  <div className="flex-1 p-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                           <div className="aspect-video bg-slate-900 rounded-xl animate-pulse flex items-center justify-center">
                              <i className="fa-solid fa-image text-slate-800 text-4xl"></i>
                           </div>
                           <div className="h-4 bg-slate-800 rounded-full w-3/4"></div>
                           <div className="h-4 bg-slate-800 rounded-full w-1/2"></div>
                        </div>
                        <div className="space-y-4">
                           <div className="aspect-video bg-blue-600/10 rounded-xl border border-blue-500/20 flex items-center justify-center relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                              <i className="fa-solid fa-play text-blue-500 text-3xl"></i>
                           </div>
                           <div className="h-4 bg-slate-800 rounded-full w-full"></div>
                           <div className="h-4 bg-slate-800 rounded-full w-2/3"></div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="py-12 border-y border-slate-900/50 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          <span className="text-xl font-black text-white tracking-tighter">FORBES</span>
          <span className="text-xl font-black text-white tracking-tighter">PRODUCT HUNT</span>
          <span className="text-xl font-black text-white tracking-tighter">STRIPE</span>
          <span className="text-xl font-black text-white tracking-tighter">YC ALUM</span>
          <span className="text-xl font-black text-white tracking-tighter">HUBSPOT</span>
        </div>
      </div>

      {/* Who We Help */}
      <section className="py-24 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] -mr-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Built for the Modern Entrepreneur</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We understand the struggle of maintaining premium digital standards while scaling.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Coaches & Consultants', icon: 'fa-user-tie', color: 'text-blue-500' },
              { title: 'Course Creators', icon: 'fa-graduation-cap', color: 'text-emerald-500' },
              { title: 'Small Businesses', icon: 'fa-store', color: 'text-amber-500' },
              { title: 'Startups & Brands', icon: 'fa-rocket', color: 'text-indigo-500' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800/60 hover:border-blue-500/30 transition-all group">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-800 group-hover:scale-110 transition-transform shadow-lg">
                  <i className={`fa-solid ${item.icon} text-3xl ${item.color}`}></i>
                </div>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-white mb-6 tracking-tight">One Agency. <br/> Every Asset You Need.</h2>
              <p className="text-slate-400 text-xl leading-relaxed">We combine elite design with performance engineering to drive measurable growth.</p>
            </div>
            <Link to="/services" className="bg-slate-900 border border-slate-800 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center group">
              View All Services <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform text-blue-500"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Custom Web Design',
                icon: 'fa-laptop-code',
                desc: 'Modern, high-performance websites built to turn traffic into paying customers.',
                benefits: ['Mobile-first Design', 'SEO Optimization', 'Fast Load Times']
              },
              {
                title: 'Ad Creative Suite',
                icon: 'fa-bullhorn',
                desc: 'Scroll-stopping video and static ads designed for maximum click-through rates.',
                benefits: ['Hook-driven Scripts', 'Motion Graphics', 'Direct Response Copy']
              },
              {
                title: 'AI Video Animation',
                icon: 'fa-wand-magic-sparkles',
                desc: 'Leverage Veo 3.1 to create cinematic brand videos from simple photos or prompts.',
                benefits: ['Cinematic Effects', 'High-Res Output', 'Pro Editing Included']
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 p-10 rounded-[3rem] hover:bg-slate-800/40 transition-all flex flex-col h-full group">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white text-blue-500 transition-colors">
                  <i className={`fa-solid ${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-black text-white mb-6">{service.title}</h3>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{service.desc}</p>
                <ul className="space-y-4 mb-10">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-300 font-medium">
                      <div className="w-5 h-5 bg-blue-500/10 rounded-full flex items-center justify-center mr-3">
                         <i className="fa-solid fa-check text-[10px] text-blue-500"></i>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="inline-block font-bold text-blue-500 group-hover:translate-x-1 transition-transform">
                  Explore Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Seamless 5-Step Process</h2>
            <p className="text-slate-400 text-lg">Predictable results, zero headaches.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[10%] w-[80%] h-0.5 bg-slate-800/50"></div>
            {[
              { step: '01', title: 'Discovery', desc: 'Define goals & scope.' },
              { step: '02', title: 'Strategy', desc: 'Custom roadmaps.' },
              { step: '03', title: 'Creation', desc: 'Building your assets.' },
              { step: '04', title: 'Refine', desc: 'Iterating for perfection.' },
              { step: '05', title: 'Launch', desc: 'Go live & scale.' },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center group">
                <div className="w-16 h-16 bg-slate-950 border-2 border-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-500 bg-slate-950">
                  <span className="text-xl font-black text-white">{item.step}</span>
                </div>
                <h4 className="text-lg font-black text-white mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            {/* Background SVG Decoration */}
            <svg className="absolute top-0 right-0 w-[400px] h-[400px] text-white/10 -mr-20 -mt-20" fill="currentColor" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="40" />
            </svg>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Ready to build <br/> your digital empire?</h2>
              <p className="text-blue-100 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
                Stop managing freelancers. Start working with a implementation partner that scales with you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="bg-white text-blue-600 px-12 py-5 rounded-full font-black text-xl hover:bg-blue-50 transition-all shadow-xl transform hover:scale-105">
                  Book A Strategy Call
                </Link>
                <Link to="/packages" className="bg-blue-800/30 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-full font-black text-xl hover:bg-blue-800/50 transition-all">
                  View Pricing
                </Link>
              </div>
              <p className="mt-10 text-blue-200 text-sm font-bold uppercase tracking-widest">Only 2 project slots available for March</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white text-center mb-12">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How long does a project take?', a: 'Websites take 2-4 weeks. Ad packs & video animation take 7-10 business days.' },
              { q: 'Do I own all the assets?', a: 'Yes, 100%. Once final payment is made, all source files and intellectual property belong to you.' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
                <h4 className="text-white font-bold mb-3">{faq.q}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
