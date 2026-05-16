import React from 'react';

export default function SettingsTab({ darkMode, triggerNotif }) {
  return (
    <div className="max-w-2xl space-y-8 animate-in slide-in-from-right-4 duration-500">
      <h2 className="text-3xl font-black">System Preferences</h2>
      <div className={`p-10 rounded-[3rem] border-4 ${darkMode ? 'bg-[#0D1C1A] border-[#F59E0B]/20' : 'bg-white border-[#F59E0B]/20 shadow-xl'} space-y-8`}>
        <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#F59E0B]/10 border-2 border-[#F59E0B]/30">
           <div className="w-20 h-20 rounded-2xl bg-[#F59E0B] flex items-center justify-center font-black text-3xl shadow-lg text-[#091413]">AD</div>
           <div>
             <p className="font-black text-2xl">Main Administrator</p>
             <p className="text-slate-500 font-bold">admin@premiumhub.com</p>
           </div>
        </div>
        <div className="space-y-4">
           <button onClick={() => triggerNotif("System Config Saved!")} className="w-full py-5 bg-[#F59E0B] text-[#091413] font-black rounded-2xl shadow-lg hover:scale-[1.02] transition-transform">Save Global Settings</button>
           <button onClick={() => triggerNotif("Security Keys Rotated!")} className="w-full py-5 border-4 border-[#F59E0B] text-[#F59E0B] font-black rounded-2xl hover:bg-[#F59E0B]/5 transition-colors">Rotate API Keys</button>
        </div>
      </div>
    </div>
  );
}