import React from 'react';
import { Plus, Edit3, Trash2 } from 'lucide-react';

export default function TeamTab({ darkMode, filteredTeam, handleEdit, deleteItem, setEditingItem, setFormData, setShowMemberModal }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black">Team Pulse</h2>
        <button 
          onClick={() => { setEditingItem(null); setFormData({}); setShowMemberModal(true); }} 
          className="bg-[#F59E0B] text-[#091413] px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
        >
          <Plus size={20}/> Hire Member
        </button>
      </div>
      <div className={`rounded-[2.5rem] border-4 overflow-hidden ${darkMode ? 'bg-[#0D1C1A] border-[#F59E0B]/20' : 'bg-white border-[#F59E0B]/20 shadow-xl'}`}>
          <table className="w-full text-left">
            <thead className={darkMode ? 'bg-[#091413]' : 'bg-[#FFF9F0]'}>
              <tr className="text-[10px] uppercase font-black tracking-widest opacity-50">
                <th className="p-8">Member</th>
                <th className="p-8">Role</th>
                <th className="p-8 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F59E0B]/10">
              {filteredTeam.map(m => (
                <tr key={m.id} className="group hover:bg-[#F59E0B]/5 transition-colors">
                  <td className="p-8 font-black text-lg">{m.name}</td>
                  <td className="p-8 font-bold text-[#F59E0B] uppercase text-xs">{m.role}</td>
                  <td className="p-8">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button onClick={() => handleEdit('team', m)} className="p-3 bg-[#F59E0B] text-[#091413] rounded-xl hover:scale-110 transition-transform"><Edit3 size={18}/></button>
                      <button onClick={() => deleteItem('team', m.id)} className="p-3 bg-[#091413] text-[#F59E0B] rounded-xl hover:scale-110 transition-transform border border-[#F59E0B]/30"><Trash2 size={18}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
}