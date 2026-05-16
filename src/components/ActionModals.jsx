import React from 'react';

export default function ActionModals({ showMemberModal, setShowMemberModal, showProductModal, setShowProductModal, editingItem, formData, setFormData, handleSaveMember, handleSaveProduct, darkMode }) {
  return (
    <>
      {/* Member Modal */}
      {showMemberModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#091413]/80 backdrop-blur-md">
          <div className={`w-full max-w-md p-10 rounded-[3.5rem] border-4 border-[#F59E0B] animate-in zoom-in duration-300 ${darkMode ? 'bg-[#0D1C1A]' : 'bg-white'}`}>
            <h3 className="text-3xl font-black mb-8">{editingItem ? 'Edit Member' : 'Hire Member'}</h3>
            <form onSubmit={handleSaveMember} className="space-y-4">
              <input 
                placeholder="Full Name" 
                className={`w-full p-5 rounded-2xl border-2 outline-none transition-all ${darkMode ? 'bg-[#091413] border-[#F59E0B]/20 text-white focus:border-[#F59E0B]' : 'bg-[#FFF9F0] border-[#F59E0B]/30 text-slate-800 focus:border-[#F59E0B]'}`} 
                value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} required 
              />
              <input 
                placeholder="Job Role" 
                className={`w-full p-5 rounded-2xl border-2 outline-none transition-all ${darkMode ? 'bg-[#091413] border-[#F59E0B]/20 text-white focus:border-[#F59E0B]' : 'bg-[#FFF9F0] border-[#F59E0B]/30 text-slate-800 focus:border-[#F59E0B]'}`} 
                value={formData.role || ''} onChange={e => setFormData({...formData, role: e.target.value})} required 
              />
              <div className="flex gap-4 pt-6">
                <button type="button" onClick={() => setShowMemberModal(false)} className="flex-1 font-black opacity-40">Close</button>
                <button type="submit" className="flex-2 py-5 bg-[#F59E0B] text-[#091413] rounded-2xl font-black shadow-lg px-8">Save Record</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#091413]/80 backdrop-blur-md">
          <div className={`w-full max-w-md p-10 rounded-[3.5rem] border-4 border-[#F59E0B] animate-in zoom-in duration-300 ${darkMode ? 'bg-[#0D1C1A]' : 'bg-white'}`}>
            <h3 className="text-3xl font-black mb-8">{editingItem ? 'Update Stock' : 'New Product'}</h3>
            <form onSubmit={handleSaveProduct} className="space-y-4">
              <input 
                placeholder="Item Name" 
                className={`w-full p-5 rounded-2xl border-2 outline-none transition-all ${darkMode ? 'bg-[#091413] border-[#F59E0B]/20 text-white focus:border-[#F59E0B]' : 'bg-[#FFF9F0] border-[#F59E0B]/30 text-slate-800 focus:border-[#F59E0B]'}`} 
                value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} required 
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  placeholder="Price" 
                  className={`w-full p-5 rounded-2xl border-2 outline-none transition-all ${darkMode ? 'bg-[#091413] border-[#F59E0B]/20 text-white focus:border-[#F59E0B]' : 'bg-[#FFF9F0] border-[#F59E0B]/30 text-slate-800 focus:border-[#F59E0B]'}`} 
                  value={formData.price || ''} onChange={e => setFormData({...formData, price: e.target.value})} required 
                />
                <input 
                  placeholder="Stock" type="number"
                  className={`w-full p-5 rounded-2xl border-2 outline-none transition-all ${darkMode ? 'bg-[#091413] border-[#F59E0B]/20 text-white focus:border-[#F59E0B]' : 'bg-[#FFF9F0] border-[#F59E0B]/30 text-slate-800 focus:border-[#F59E0B]'}`} 
                  value={formData.stock || ''} onChange={e => setFormData({...formData, stock: e.target.value})} required 
                />
              </div>
              <div className="flex gap-4 pt-6">
                <button type="button" onClick={() => setShowProductModal(false)} className="flex-1 font-black opacity-40">Cancel</button>
                <button type="submit" className="flex-2 py-5 bg-[#F59E0B] text-[#091413] rounded-2xl font-black shadow-lg px-8">Save Record</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}