
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceList = [
    {
      id: 'web',
      icon: 'fa-laptop-code',
      title: 'Custom Website Design & Development',
      problem: 'Most websites are slow, outdated, and fail to turn visitors into buyers.',
      solution: 'We build high-performance, mobile-first websites that look premium and function as sales machines.',
      benefits: ['Optimized for all screen sizes', 'Lightning-fast load times (Core Web Vitals)', 'Lead-capture forms & CRM integration', 'Ongoing maintenance & hosting support'],
      deliverables: ['Responsive Website Design', 'Custom UI/UX Prototypes', 'Landing Page Optimization', 'CMS Setup (WordPress, Webflow, Shopify)'],
      forWho: 'Best for businesses needing a professional home base or creators launching a new course/program.'
    },
    {
      id: 'ads',
      icon: 'fa-bullhorn',
      title: 'Ad Creative & Campaign Assets',
      problem: 'Standard stock ads get ignored. You need scroll-stopping visuals to compete.',
      solution: 'We create high-converting static and video ads specifically designed for Meta, Google, and LinkedIn algorithms.',
      benefits: ['Direct-response copy that sells', 'High-impact motion graphics', 'A/B testing ready assets', 'Consistent brand messaging'],
      deliverables: ['Meta Static Ads (1080x1080)', 'Motion Video Ads (15-30s)', 'Google Display Banners', 'Ad Copywriting'],
      forWho: 'Best for brands looking to scale with paid traffic.'
    },
    {
      id: 'decks',
      icon: 'fa-file-powerpoint',
      title: 'Pitch Decks & Presentations',
      problem: 'Unprofessional slides can cost you an investment or a major client.',
      solution: 'We transform dry data into compelling visual stories that command attention in the boardroom.',
      benefits: ['Modern, investor-ready aesthetic', 'Data visualization & infographics', 'Clear narrative structure', 'Custom templates for future use'],
      deliverables: ['Investor Pitch Decks', 'Sales Proposals', 'Webinar Slide Decks', 'Internal Brand Guidelines'],
      forWho: 'Best for startups raising capital or high-ticket coaches.'
    },
    {
      id: 'social',
      icon: 'fa-hashtag',
      title: 'Social Content & Branding Kits',
      problem: 'Posting sporadically with messy visuals hurts your authority.',
      solution: 'We provide a complete branding ecosystem with templates that make posting high-quality content easy.',
      benefits: ['Cohesive visual identity', 'Engagement-driven post designs', 'Ready-to-use carousel templates', 'Optimized profile branding'],
      deliverables: ['Instagram Grid Templates', 'LinkedIn Carousel Designs', 'YouTube Thumbnail Packs', 'Custom Brand Logos & Favicons'],
      forWho: 'Best for personal brands and active social marketers.'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-black text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-400">High-impact digital assets tailored to your business goals. We handle the technical and creative work so you can focus on leading your brand.</p>
        </div>

        <div className="space-y-32">
          {serviceList.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start`}>
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center">
                  <i className={`fa-solid ${service.icon} text-3xl text-blue-500`}></i>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-slate-300 text-lg mb-4"><span className="text-blue-500 font-bold uppercase text-xs tracking-wider block mb-2">The Problem</span> {service.problem}</p>
                  <p className="text-slate-400 leading-relaxed"><span className="text-emerald-500 font-bold uppercase text-xs tracking-wider block mb-2">Our Solution</span> {service.solution}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center"><i className="fa-solid fa-star text-yellow-500 mr-2"></i> Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start"><span className="text-blue-500 mr-2">•</span> {b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center"><i className="fa-solid fa-box-open text-blue-500 mr-2"></i> Deliverables</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((d, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start"><span className="text-blue-500 mr-2">•</span> {d}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-slate-900 rounded-2xl border-l-4 border-blue-600">
                  <p className="text-slate-300 italic text-sm">{service.forWho}</p>
                </div>
                
                <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all">
                  Request a Quote
                </Link>
              </div>

              <div className="flex-1 w-full lg:w-auto h-96 lg:h-auto min-h-[400px] bg-slate-900 rounded-3xl border border-slate-800 relative overflow-hidden group shadow-2xl">
                 <img 
                   src={`https://picsum.photos/seed/${service.id}/800/600`} 
                   alt={service.title} 
                   className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white font-bold text-xl drop-shadow-lg uppercase tracking-tight">Case Study Preview</p>
                    <p className="text-slate-300 text-sm">Strategic implementation for a global client.</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need something custom?</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">Most of our clients mix and match our services into a "Build Your Own Package" for the best value and results.</p>
            <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
              Build My Bundle
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
