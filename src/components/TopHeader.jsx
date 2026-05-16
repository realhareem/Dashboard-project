import React from 'react';
import { Menu, Search, Bell, Sun, Moon } from 'lucide-react';

export default function TopHeader({ setSidebarOpen, darkMode, setDarkMode, searchQuery, setSearchQuery, triggerNotif }) {
  return (
    <header className="flex justify-between items-center mb-12">
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarOpen(true)} className={`md:hidden p-3 rounded-xl shadow-sm text-[#F59E0B] ${darkMode ? 'bg-[#0D1C1A]' : 'bg-white border border-[#F59E0B]/20'}`}><Menu/></button>
        <div className={`flex items-center gap-4 px-6 py-3 rounded-2xl border-2 transition-all w-64 md:w-96 ${darkMode ? 'bg-[#0D1C1A] border-[#F59E0B]/30 text-white' : 'bg-white border-[#F59E0B]/30 text-slate-800'}`}>
          <Search size={20} className="text-[#F59E0B]" />
          <input 
            type="text" 
            placeholder="Search database..." 
            className="bg-transparent outline-none w-full font-bold placeholder:opacity-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button onClick={() => triggerNotif("System is up-to-date!")} className={`p-4 rounded-2xl transition-all ${darkMode ? 'bg-[#0D1C1A] border border-[#F59E0B]/20' : 'bg-white shadow-lg border border-[#F59E0B]/20'}`}>
          <Bell size={22} className="text-[#F59E0B]" />
        </button>
        <button onClick={() => setDarkMode(!darkMode)} className={`p-4 rounded-2xl transition-all ${darkMode ? 'bg-[#F59E0B] text-[#091413]' : 'bg-white shadow-lg border border-[#F59E0B]/20'}`}>
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
    </header>
  );
}