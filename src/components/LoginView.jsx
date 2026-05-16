import React from 'react';
import { Shield } from 'lucide-react';
import CustomCursor from './CustomCursor';

export default function LoginView({ darkMode, setLoginEmail, setLoginPassword, handleLogin }) {
  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${darkMode ? 'bg-[#091413]' : 'bg-[#FFF9F0]'}`}>
      <CustomCursor />
      <div className={`w-full max-w-md p-10 rounded-[3rem] shadow-2xl border-4 transition-all ${darkMode ? 'bg-[#0D1C1A] border-[#F59E0B]/30' : 'bg-white border-[#F59E0B]/20'}`}>
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-3xl bg-[#F59E0B] flex items-center justify-center text-white shadow-xl rotate-3">
            <Shield size={40} />
          </div>
        </div>
        <h2 className="text-4xl font-black text-center mb-8 text-[#F59E0B]">ADMIN HUB</h2>
        <div className="space-y-4">
          <input 
            type="email" placeholder="Email" 
            className={`w-full p-5 rounded-2xl border-2 outline-none transition-all ${darkMode ? 'bg-[#091413] border-[#F59E0B]/30 text-white focus:border-[#F59E0B]' : 'bg-[#FFF9F0] border-[#F59E0B]/30 text-slate-800 focus:border-[#F59E0B]'}`} 
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input 
            type="password" placeholder="Password" 
            className={`w-full p-5 rounded-2xl border-2 outline-none transition-all ${darkMode ? 'bg-[#091413] border-[#F59E0B]/30 text-white focus:border-[#F59E0B]' : 'bg-[#FFF9F0] border-[#F59E0B]/30 text-slate-800 focus:border-[#F59E0B]'}`} 
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button 
            onClick={handleLogin}
            className="w-full py-5 bg-[#F59E0B] text-[#091413] rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-lg shadow-[#F59E0B]/20"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}