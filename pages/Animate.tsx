
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

// Defining the AIStudio interface and extending the global Window object
// to fix the conflict where 'aistudio' was expected to be of type 'AIStudio'.
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio: AIStudio;
  }
}

const Animate: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!image) return;
    setError(null);
    setIsLoading(true);
    setVideoUrl(null);
    setStatusMessage('Checking permissions...');

    try {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        setStatusMessage('Please select your API key to continue.');
        await window.aistudio.openSelectKey();
        // Proceeding as per instructions (assuming success after trigger)
      }

      setStatusMessage('Initializing generator...');
      // Creating a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const base64Data = image.split(',')[1];
      const mimeType = image.split(';')[0].split(':')[1];

      setStatusMessage('Uploading to Veo engine...');
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'Animate this photo with cinematic movement',
        image: {
          imageBytes: base64Data,
          mimeType: mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      setStatusMessage('Brewing your video (takes 1-3 mins)...');
      
      const messages = [
        "Analyzing composition...",
        "Simulating motion...",
        "Rendering textures...",
        "Finalizing cinematic look...",
        "Just a few more seconds..."
      ];
      let msgIndex = 0;
      const interval = setInterval(() => {
        setStatusMessage(messages[msgIndex % messages.length]);
        msgIndex++;
      }, 15000);

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        try {
          // Creating a new GoogleGenAI instance right before polling operation status.
          const aiPoll = new GoogleGenAI({ apiKey: process.env.API_KEY });
          operation = await aiPoll.operations.getVideosOperation({ operation: operation });
        } catch (opError: any) {
          if (opError?.message?.includes("Requested entity was not found")) {
            clearInterval(interval);
            setError("Session expired or invalid key. Please re-select your key.");
            await window.aistudio.openSelectKey();
            setIsLoading(false);
            return;
          }
          throw opError;
        }
      }

      clearInterval(interval);
      setStatusMessage('Video ready! Fetching download link...');

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      } else {
        throw new Error("Failed to retrieve video link.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred during generation.');
    } finally {
      setIsLoading(false);
      setStatusMessage('');
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Animate Your <span className="text-blue-500">Vision</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Turn static photos into cinematic videos using the world's most advanced video AI.
          </p>
          <div className="mt-4 inline-flex items-center text-xs text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
            <i className="fa-solid fa-credit-card mr-2 text-blue-500"></i>
            Requires Paid API Key (Google Cloud Project with Billing)
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="ml-2 text-blue-400 hover:underline">Docs</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Controls */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 space-y-8">
            <div>
              <label className="block text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Step 1: Upload Photo</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="relative aspect-square rounded-2xl border-2 border-dashed border-slate-700 hover:border-blue-500 bg-slate-800/50 cursor-pointer overflow-hidden transition-all group"
              >
                {image ? (
                  <img src={image} className="w-full h-full object-cover" alt="Source" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                    <i className="fa-solid fa-cloud-arrow-up text-3xl mb-3 group-hover:scale-110 transition-transform"></i>
                    <span className="text-sm">Click to upload image</span>
                  </div>
                )}
              </div>
              <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Step 2: Describe Motion</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: Soft camera zoom into the subjects eyes, golden hour lighting..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none h-24 resize-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Step 3: Aspect Ratio</label>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setAspectRatio('16:9')}
                  className={`flex-1 py-3 rounded-xl border font-bold transition-all ${aspectRatio === '16:9' ? 'border-blue-500 bg-blue-600/10 text-white' : 'border-slate-700 bg-slate-800 text-slate-400'}`}
                >
                  Landscape (16:9)
                </button>
                <button 
                  onClick={() => setAspectRatio('9:16')}
                  className={`flex-1 py-3 rounded-xl border font-bold transition-all ${aspectRatio === '9:16' ? 'border-blue-500 bg-blue-600/10 text-white' : 'border-slate-700 bg-slate-800 text-slate-400'}`}
                >
                  Portrait (9:16)
                </button>
              </div>
            </div>

            <button 
              disabled={!image || isLoading}
              onClick={handleGenerate}
              className={`w-full py-4 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center ${!image || isLoading ? 'bg-slate-800 text-slate-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white hover-glow'}`}
            >
              {isLoading ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin mr-3"></i> Generating...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-bolt mr-3"></i> Generate Video
                </>
              )}
            </button>
            {error && <p className="text-red-500 text-xs text-center mt-2">{error}</p>}
          </div>

          {/* Right: Preview */}
          <div className="space-y-6">
            <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider">Output Preview</label>
            <div className={`relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center ${aspectRatio === '16:9' ? 'aspect-video' : 'aspect-[9/16] h-[600px] mx-auto'}`}>
              {isLoading ? (
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Magic in Progress</h3>
                  <p className="text-slate-400 text-sm italic">{statusMessage}</p>
                </div>
              ) : videoUrl ? (
                <div className="w-full h-full flex flex-col">
                  <video src={videoUrl} controls autoPlay loop className="w-full h-full object-contain" />
                  <div className="absolute bottom-4 right-4">
                    <a href={videoUrl} download="meta-animate.mp4" className="bg-slate-950/80 backdrop-blur-md text-white p-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg">
                      <i className="fa-solid fa-download"></i>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center p-12">
                   <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-700">
                     <i className="fa-solid fa-film text-slate-600 text-2xl"></i>
                   </div>
                   <p className="text-slate-500 text-sm">Upload an image and click generate to see the results here.</p>
                </div>
              )}
            </div>
            {videoUrl && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl flex items-center">
                <i className="fa-solid fa-circle-check text-emerald-500 mr-3"></i>
                <p className="text-emerald-400 text-xs">Successfully generated high-quality video using Veo 3.1!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animate;
