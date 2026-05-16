import React from 'react';
import { TrendingUp, Users } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const COLORS = { primary: '#F59E0B', bgDark: '#091413' };
const CHART_DATA = [
  { name: 'Mon', revenue: 4000, users: 2400 },
  { name: 'Tue', revenue: 3000, users: 1398 },
  { name: 'Wed', revenue: 5000, users: 4800 },
  { name: 'Thu', revenue: 2780, users: 3908 },
  { name: 'Fri', revenue: 4890, users: 4800 },
  { name: 'Sat', revenue: 2390, users: 3800 },
  { name: 'Sun', revenue: 3490, users: 4300 },
];

export default function AnalyticsTab({ darkMode }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className={`p-8 rounded-[3.5rem] border-4 ${darkMode ? 'bg-[#0D1C1A] border-[#F59E0B]/20' : 'bg-white border-[#F59E0B]/20'}`}>
        <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-[#F59E0B]"><TrendingUp size={20}/> Revenue Metrics</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={CHART_DATA}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', fontWeight: 'bold', background: darkMode ? '#091413' : '#fff', color: darkMode ? '#fff' : '#000' }} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} stroke={darkMode ? '#F59E0B' : '#444'} />
              <Area type="monotone" dataKey="revenue" stroke={COLORS.primary} strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={`p-8 rounded-[3.5rem] border-4 ${darkMode ? 'bg-[#0D1C1A] border-[#F59E0B]/20' : 'bg-white border-[#F59E0B]/20'}`}>
        <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-[#F59E0B]"><Users size={20}/> Engagement Pulse</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CHART_DATA}>
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS.primary} />
                  <stop offset="100%" stopColor={COLORS.bgDark} />
                </linearGradient>
              </defs>
              <Tooltip 
                contentStyle={{ borderRadius: '20px', border: 'none', fontWeight: 'bold', background: darkMode ? '#091413' : '#fff', color: darkMode ? '#fff' : '#000' }} 
                itemStyle={{ color: COLORS.primary }}
                cursor={{ fill: 'rgba(245, 158, 11, 0.1)' }} 
              />
              <XAxis dataKey="name" axisLine={false} tickLine={false} stroke={darkMode ? '#F59E0B' : '#444'} />
              <Bar dataKey="users" fill="url(#barGrad)" radius={[10, 10, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}