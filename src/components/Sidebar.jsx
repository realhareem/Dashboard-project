import React from 'react';
import { LayoutDashboard, Users, Package, BarChart3, Settings, LogOut, X } from 'lucide-react';

export default function Sidebar({ sidebarOpen, setSidebarOpen, activeTab, setActiveTab, darkMode, setIsLoggedIn }) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20}/> },
    { id: 'team', label: 'Team', icon: <Users size={20}/> },
    { id: 'inventory', label: 'Inventory', icon: <Package size={20}/> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20}/> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20}/> },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-transform md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${darkMode ? 'bg-[#0D1C1A] border-r border-[#F59E0B]/20' : 'bg-white border-r border-[#F59E0B]/20'}`}>
      <div className="flex flex-col h-full">
        <div className="p-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F59E0B] flex items-center justify-center text-[#091413] font-black text-2xl shadow-xl">P</div>
            <span className="font-black text-2xl tracking-tighter uppercase">Premium</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-[#F59E0B]"><X size={24}/></button>
        </div>

        <nav className="flex-1 px-6 space-y-3">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all font-black ${
                activeTab === item.id 
                  ? 'bg-[#F59E0B] text-[#091413] shadow-xl shadow-[#F59E0B]/10' 
                  : `hover:bg-[#F59E0B]/10 ${darkMode ? 'text-[#F59E0B]' : 'text-slate-500'}`
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-[#F59E0B]/10">
          <button onClick={() => setIsLoggedIn(false)} className="flex items-center gap-3 font-bold text-[#F59E0B] hover:scale-105 transition-transform duration-300">
            <LogOut size={20}/> Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}