import React from 'react';
import { TrendingUp, Package, Users, Activity, Check, Zap, Clock, ChevronRight } from 'lucide-react';

export default function OverviewTab({ darkMode, totalProducts, totalTeam }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-[3rem] bg-[#F59E0B] text-[#091413] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">Total Revenue</p>
          <h2 className="text-5xl font-black">$84,200</h2>
          <div className="mt-6 flex items-center gap-2 text-sm font-bold bg-white/40 w-fit px-3 py-1 rounded-full"><TrendingUp size={16}/> +15% Today</div>
        </div>
        <div className="p-8 rounded-[3rem] bg-[#091413] text-[#F59E0B] shadow-2xl border-4 border-[#F59E0B]/20 relative overflow-hidden group">
          <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-[#F59E0B]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">Inventory Stock</p>
          <h2 className="text-5xl font-black text-white">{totalProducts} Items</h2>
          <div className="mt-6 flex items-center gap-2 text-sm font-bold bg-[#F59E0B]/20 w-fit px-3 py-1 rounded-full"><Package size={16}/> Live Tracking</div>
        </div>
        <div className={`p-8 rounded-[3rem] border-4 shadow-xl relative overflow-hidden group ${darkMode ? 'bg-[#0D1C1A] border-[#F59E0B]/20' : 'bg-white border-[#F59E0B]/20'}`}>
          <div className="absolute top-[-20px] right-[-20px] w-32 h-32 rounded-full group-hover:scale-150 transition-transform duration-700 bg-[#F59E0B]/10"></div>
          <p className="text-xs font-black uppercase tracking-widest text-[#F59E0B] mb-2">Team Activity</p>
          <h2 className="text-5xl font-black">{totalTeam} Active</h2>
          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#F59E0B]"><Users size={16}/> Verified Pulse</div>
        </div>
      </div>

      {/* Activity and Health Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className={`p-10 rounded-[3rem] border-4 ${darkMode ? 'bg-[#0D1C1A] border-[#F59E0B]/10' : 'bg-white border-[#F59E0B]/10 shadow-lg'}`}>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black flex items-center gap-3"><Activity className="text-[#F59E0B]" /> Recent Activity</h3>
              <span className="text-xs font-black opacity-40 uppercase">Last 24 Hours</span>
            </div>
            <div className="space-y-6">
              {[
                { icon: <Check size={16}/>, title: "Order #4421 completed", time: "2 mins ago", color: "bg-green-500" },
                { icon: <Zap size={16}/>, title: "System update applied", time: "45 mins ago", color: "bg-blue-500" },
                { icon: <Clock size={16}/>, title: "Database backup finished", time: "2 hours ago", color: "bg-[#F59E0B]" },
              ].map((act, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl ${act.color} flex items-center justify-center text-white shadow-lg`}>{act.icon}</div>
                    <div>
                      <p className="font-bold text-lg">{act.title}</p>
                      <p className="text-xs opacity-50 font-bold">{act.time}</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#F59E0B]" />
                </div>
              ))}
            </div>
         </div>

         <div className={`p-10 rounded-[3rem] border-4 ${darkMode ? 'bg-[#0D1C1A] border-[#F59E0B]/10' : 'bg-white border-[#F59E0B]/10 shadow-lg'}`}>
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3"><Zap className="text-[#F59E0B]" /> System Health</h3>
            <div className="space-y-8">
               <div>
                  <div className="flex justify-between mb-2">
                     <span className="font-black uppercase text-xs">Server CPU Load</span>
                     <span className="font-black text-[#F59E0B]">24%</span>
                  </div>
                  <div className="w-full h-3 bg-[#F59E0B]/10 rounded-full overflow-hidden">
                     <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: '24%' }}></div>
                  </div>
               </div>
               <div>
                  <div className="flex justify-between mb-2">
                     <span className="font-black uppercase text-xs">Storage Usage</span>
                     <span className="font-black text-[#F59E0B]">68%</span>
                  </div>
                  <div className="w-full h-3 bg-[#F59E0B]/10 rounded-full overflow-hidden">
                     <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: '68%' }}></div>
                  </div>
               </div>
               <div className="pt-4 flex gap-4">
                  <div className="flex-1 p-4 rounded-2xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 text-center">
                     <p className="text-[10px] font-black uppercase opacity-40">Uptime</p>
                     <p className="text-xl font-black">99.9%</p>
                  </div>
                  <div className="flex-1 p-4 rounded-2xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 text-center">
                     <p className="text-[10px] font-black uppercase opacity-40">Latency</p>
                     <p className="text-xl font-black">12ms</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}