
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real submission logic would go here
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-24 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-lg text-center p-12 bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl">
          <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="fa-solid fa-check text-4xl text-emerald-500"></i>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Brief Received!</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">Thanks for reaching out to META SERVICES. Our team is reviewing your project details and will get back to you via email within 24–48 hours.</p>
          <button onClick={() => setSubmitted(false)} className="text-blue-500 font-bold hover:underline">Send another brief</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-black text-white mb-6">Let's build something <span className="text-blue-500">remarkable.</span></h1>
            <p className="text-xl text-slate-400 mb-12">Fill out the brief below. The more detail you provide, the faster we can get started on your strategy.</p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-envelope text-blue-500"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email directly</h4>
                  <p className="text-slate-400">prinshusaini999@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-calendar text-emerald-500"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Response Time</h4>
                  <p className="text-slate-400">Average: 24 Hours (Mon-Fri)</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-slate-900 rounded-3xl border border-slate-800 relative">
               <p className="text-slate-300 italic mb-4">"They delivered my website and ad creatives in exactly 12 days. The quality was insane. Highly recommend for anyone who wants to move fast."</p>
               <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                  <div>
                    <p className="text-white font-bold text-sm">Sarah J.</p>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">Wellness Coach</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-slate-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Full Name</label>
                  <input required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Email Address</label>
                  <input required type="email" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Business Name</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="My Brand Inc." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Website (Optional)</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="https://..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 mb-4 uppercase tracking-wide">What do you need help with?</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Website', 'Ad Creatives', 'Pitch Decks', 'Social Content', 'Videos', 'Other'].map(item => (
                    <label key={item} className="flex items-center space-x-3 bg-slate-800 p-3 rounded-xl border border-slate-700 cursor-pointer hover:bg-slate-700/50 transition-colors">
                      <input type="checkbox" className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-blue-500 focus:ring-blue-500" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Budget Range</label>
                <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors appearance-none">
                  <option>₹5k - ₹15k</option>
                  <option>₹15k - ₹50k</option>
                  <option>₹50k - ₹1L+</option>
                  <option>Not decided yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Project Details</label>
                <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="Tell us about your goals, ideal timeline, and any inspiration you have."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg transition-all hover-glow shadow-xl">
                Send Project Brief <i className="fa-solid fa-paper-plane ml-2"></i>
              </button>
              
              <p className="text-center text-slate-500 text-xs">By submitting, you agree to our privacy policy. We typically reply within 24-48 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
