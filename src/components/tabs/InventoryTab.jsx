import React from 'react';
import { Plus, Edit3, Trash2 } from 'lucide-react';

export default function InventoryTab({ darkMode, filteredProducts, handleEdit, deleteItem, setEditingItem, setFormData, setShowProductModal }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
       <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black">Warehouse</h2>
        <button 
          onClick={() => { setEditingItem(null); setFormData({}); setShowProductModal(true); }} 
          className="bg-[#F59E0B] text-[#091413] px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
        >
          <Plus size={20}/> New Item
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredProducts.map(p => (
           <div key={p.id} className={`p-8 group rounded-[3rem] border-4 transition-all hover:border-[#F59E0B] ${darkMode ? 'bg-[#0D1C1A] border-[#F59E0B]/20' : 'bg-white border-[#F59E0B]/20 shadow-lg'}`}>
              <div className="flex justify-between items-start mb-6">
                <h4 className="font-black text-2xl">{p.name}</h4>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => handleEdit('product', p)} className="p-2 bg-[#F59E0B] text-[#091413] rounded-lg hover:scale-110 transition-transform"><Edit3 size={18}/></button>
                  <button onClick={() => deleteItem('product', p.id)} className="p-2 bg-[#091413] text-[#F59E0B] rounded-lg hover:scale-110 transition-transform border border-[#F59E0B]/30"><Trash2 size={18}/></button>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div><p className="text-[10px] font-black uppercase opacity-40">Price</p><p className="text-2xl font-black text-[#F59E0B]">{p.price}</p></div>
                <div className="text-right"><p className="text-[10px] font-black uppercase opacity-40">Stock</p><p className="font-black">{p.stock} Units</p></div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}