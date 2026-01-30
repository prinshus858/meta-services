
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl font-black text-white mb-8">At the Intersection of <span className="text-blue-500">Design & ROI.</span></h1>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              META SERVICES was founded with a single mission: to provide high-level digital execution for those who are building the future. We noticed that most entrepreneurs spend too much time managing mediocre freelancers or struggling with complex tools.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Based in the vibrant city of Lucknow, India, we combine global design standards with specialized local insight to deliver assets that don't just look pretty—they convert. We are creator-founded and driven by the philosophy of "Done-for-you implementation."
            </p>
            <div className="flex flex-wrap gap-4">
              {['AI Automation', 'Web3 & NFTs', 'Content Systems', 'High-Ticket Funnels'].map(tag => (
                <span key={tag} className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-medium text-slate-300">{tag}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-900 rounded-[4rem] border border-slate-800 overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-700">
              <img src="https://picsum.photos/seed/founder/800/800" alt="Founder" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-600 p-8 rounded-3xl shadow-xl max-w-[240px]">
              <p className="text-white font-black text-2xl mb-1">5+</p>
              <p className="text-blue-100 text-sm">Years of deep experience in digital storytelling and growth.</p>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white text-center mb-16">What it's like to work with us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-comments', title: 'Radical Transparency', desc: 'No guessing games. You know exactly what stage your project is at with regular Slack/Email updates.' },
              { icon: 'fa-bolt', title: 'Extreme Speed', desc: 'We value your time. Most projects move from brief to first draft in under 7 business days.' },
              { icon: 'fa-users', title: 'Collaborative Vision', desc: 'We don\'t just take orders; we act as a strategic partner to improve your original ideas.' },
              { icon: 'fa-chart-line', title: 'Results Over Fluff', desc: 'We don\'t care about "aesthetic" if it doesn\'t drive your business objectives forward.' },
              { icon: 'fa-shield-halved', title: 'Done-For-You', desc: 'Hand over the keys. We handle the technical headaches, hosting, and formatting.' },
              { icon: 'fa-arrows-rotate', title: 'Continuous Iteration', desc: 'Your feedback is the fuel for our design. We revise until it is exactly what you need.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:bg-slate-800/50 transition-all">
                <i className={`fa-solid ${item.icon} text-3xl text-blue-500 mb-6`}></i>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-slate-900 py-16 px-8 rounded-[3rem] border border-slate-800">
          <h3 className="text-3xl font-bold text-white mb-6">Built by creators, for creators.</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We live at the intersection of tech and art. Our team uses the latest in AI and automation tools to ensure your assets are not only modern but future-proof.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover-glow">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
