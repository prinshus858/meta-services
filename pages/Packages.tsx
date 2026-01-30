
import React from 'react';
import { Link } from 'react-router-dom';

const Packages: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      subtitle: 'For new businesses',
      price: '5,999',
      bestFor: ['Individual Creators', 'Local Businesses', 'New Entrepreneurs'],
      includes: [
        'Single Page Website / Bio-Link',
        'Basic Brand Color Palette',
        '3 Social Media Templates',
        'Standard Email Support',
        '7-Day Delivery'
      ],
      cta: 'Start Now',
      featured: false
    },
    {
      name: 'Growth',
      subtitle: 'For scaling brands',
      price: '14,999',
      bestFor: ['E-commerce Brands', 'Established Coaches', 'Service Providers'],
      includes: [
        'Multi-page Professional Website',
        'Meta Ad Creative Pack (3 Videos/Statics)',
        'Full Brand Identity Kit',
        'Custom Pitch Deck (10 Slides)',
        'Priority Slack Support'
      ],
      cta: 'Go Growth',
      featured: true
    },
    {
      name: 'Custom Elite',
      subtitle: 'For complex needs',
      price: 'Custom',
      bestFor: ['Startups raising capital', 'High-traffic businesses', 'Corporate Entities'],
      includes: [
        'Advanced Funnel Development',
        'Full Content Automation System',
        'Unlimited Monthly Assets',
        'Personal Project Manager',
        'Strategy & Strategy Calls'
      ],
      cta: 'Request Quote',
      featured: false
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-white mb-6">Transparent Packages</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">No hidden fees. No complicated contracts. Just high-quality deliverables that move the needle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${tier.featured ? 'bg-slate-900 border-blue-500 shadow-blue-500/20 shadow-2xl scale-105 z-10' : 'bg-slate-900 border-slate-800 hover:border-slate-600'}`}>
              {tier.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black uppercase px-4 py-1.5 rounded-full tracking-widest">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{tier.subtitle}</p>
                <div className="flex items-baseline">
                  <span className="text-slate-400 text-lg mr-2">Starting from</span>
                  <span className="text-4xl font-black text-white">₹{tier.price}</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Best for:</p>
                <ul className="space-y-2">
                  {tier.bestFor.map((item, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-center">
                      <i className="fa-solid fa-circle text-[6px] text-blue-500 mr-3"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 flex-grow">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">What's included:</p>
                <ul className="space-y-4">
                  {tier.includes.map((item, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start">
                      <i className="fa-solid fa-check text-blue-500 mr-3 mt-0.5"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${tier.featured ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 bg-slate-900 rounded-3xl border border-slate-800">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Upgrade Options</h3>
                <ul className="grid grid-cols-1 gap-4">
                  <li className="flex items-center text-slate-400 bg-slate-800/50 p-3 rounded-lg"><i className="fa-solid fa-plus text-blue-500 mr-3"></i> Add 5 Short-form Videos: +₹3,999</li>
                  <li className="flex items-center text-slate-400 bg-slate-800/50 p-3 rounded-lg"><i className="fa-solid fa-plus text-blue-500 mr-3"></i> Ongoing Content (Monthly): +₹8,999</li>
                  <li className="flex items-center text-slate-400 bg-slate-800/50 p-3 rounded-lg"><i className="fa-solid fa-plus text-blue-500 mr-3"></i> Fast-track 48hr Delivery: +₹2,499</li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <p className="text-slate-400 mb-6 italic">"The process was so simple. I just told them my vision and they delivered assets that were 10x better than I expected. Worth every rupee."</p>
                <Link to="/contact" className="text-blue-500 font-bold hover:underline">Get a custom quote based on your needs →</Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
