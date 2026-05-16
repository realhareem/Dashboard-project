import React, { useState, useEffect, useMemo } from 'react';

// Importing Custom Sub-components
import CustomCursor from './components/CustomCursor';
import LoginView from './components/LoginView';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import MainTabs from './components/MainTabs';
import ActionModals from './components/ActionModals';

const INITIAL_TEAM = [
  { id: 1, name: 'Sara Khan', role: 'Lead Designer' },
  { id: 2, name: 'Zain Ahmed', role: 'React Developer' },
];

const INITIAL_PRODUCTS = [
  { id: 1, name: 'Premium Laptop', stock: 5, price: '$1,200' },
  { id: 2, name: 'Wireless Mouse', stock: 45, price: '$45' },
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notification, setNotification] = useState({ show: false, msg: '' });
  const [searchQuery, setSearchQuery] = useState('');

  const [team, setTeam] = useState(() => {
    const saved = localStorage.getItem('team_data_v3');
    return saved ? JSON.parse(saved) : INITIAL_TEAM;
  });

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('product_data_v3');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  useEffect(() => {
    localStorage.setItem('team_data_v3', JSON.stringify(team));
    localStorage.setItem('product_data_v3', JSON.stringify(products));
  }, [team, products]);

  const triggerNotif = (msg) => {
    setNotification({ show: true, msg });
    setTimeout(() => setNotification({ show: false, msg: '' }), 3000);
  };

  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (type, item) => {
    setEditingItem(item);
    setFormData(item);
    if (type === 'team') setShowMemberModal(true);
    else setShowProductModal(true);
  };

  const handleSaveMember = (e) => {
    e.preventDefault();
    if (editingItem) {
      setTeam(team.map(m => m.id === editingItem.id ? { ...formData, id: m.id } : m));
      triggerNotif("Member Updated!");
    } else {
      setTeam([{ ...formData, id: Date.now() }, ...team]);
      triggerNotif("Member Added!");
    }
    setShowMemberModal(false);
    setEditingItem(null);
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (editingItem) {
      setProducts(products.map(p => p.id === editingItem.id ? { ...formData, id: p.id } : p));
      triggerNotif("Product Updated!");
    } else {
      setProducts([{ ...formData, id: Date.now() }, ...products]);
      triggerNotif("Product Added!");
    }
    setShowProductModal(false);
    setEditingItem(null);
  };

  const deleteItem = (type, id) => {
    if (type === 'team') setTeam(team.filter(m => m.id !== id));
    else setProducts(products.filter(p => p.id !== id));
    triggerNotif("Item Deleted Successfully");
  };

  const handleLogin = () => {
    if (loginEmail.includes('@') && loginPassword.length >= 6) {
      setIsLoggedIn(true);
      triggerNotif("Welcome Back, Admin!");
    } else {
      triggerNotif("Invalid Credentials");
    }
  };

  const filteredTeam = useMemo(() => {
    return team.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [team, searchQuery]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [products, searchQuery]);

  // Auth Guard
  if (!isLoggedIn) {
    return (
      <LoginView 
        darkMode={darkMode}
        setLoginEmail={setLoginEmail}
        setLoginPassword={setLoginPassword}
        handleLogin={handleLogin}
      />
    );
  }

  return (
    <div className={`min-h-screen flex cursor-none ${darkMode ? 'bg-[#091413] text-white' : 'bg-[#FFF9F0] text-[#2D3436]'}`}>
      {/* 1. Custom Cursor */}
      <CustomCursor />
      
      {/* 2. Sidebar Component */}
      <Sidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setIsLoggedIn={setIsLoggedIn}
      />

      {/* Main Content Area Wrapper */}
      <main className="flex-1 p-4 md:p-10 overflow-y-auto">
        {/* 3. Global Top Header */}
        <TopHeader 
          setSidebarOpen={setSidebarOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          triggerNotif={triggerNotif}
        />

        {/* 4. Tab Core Dynamic Content */}
        <MainTabs 
          activeTab={activeTab}
          darkMode={darkMode}
          products={products}
          team={team}
          filteredTeam={filteredTeam}
          filteredProducts={filteredProducts}
          handleEdit={handleEdit}
          deleteItem={deleteItem}
          setEditingItem={setEditingItem}
          setFormData={setFormData}
          setShowMemberModal={setShowMemberModal}
          setShowProductModal={setShowProductModal}
          triggerNotif={triggerNotif}
        />
      </main>

      {/* 5 & 6. Context Action Modals */}
      <ActionModals 
        showMemberModal={showMemberModal}
        setShowMemberModal={setShowMemberModal}
        showProductModal={showProductModal}
        setShowProductModal={setShowProductModal}
        editingItem={editingItem}
        formData={formData}
        setFormData={setFormData}
        handleSaveMember={handleSaveMember}
        handleSaveProduct={handleSaveProduct}
        darkMode={darkMode}
      />

      {/* Global Notifications UI Banner */}
      {notification.show && (
        <div className="fixed bottom-10 right-10 bg-[#F59E0B] text-[#091413] px-8 py-4 rounded-2xl font-black shadow-2xl z-[99999] animate-bounce">
          {notification.msg}
        </div>
      )}
    </div>
  );
}