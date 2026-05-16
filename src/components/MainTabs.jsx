import React from 'react';

// Importing the 5 newly created individual tab view sub-components
import OverviewTab from './tabs/OverviewTab';
import TeamTab from './tabs/TeamTab';
import InventoryTab from './tabs/InventoryTab';
import AnalyticsTab from './tabs/AnalyticsTab';
import SettingsTab from './tabs/SettingsTab';

export default function MainTabs({ 
  activeTab, 
  darkMode, 
  products, 
  team, 
  filteredTeam, 
  filteredProducts, 
  handleEdit, 
  deleteItem, 
  setEditingItem, 
  setFormData, 
  setShowMemberModal, 
  setShowProductModal, 
  triggerNotif 
}) {
  
  // Clean Switch Router Layout Logic
  switch (activeTab) {
    case 'overview':
      return <OverviewTab darkMode={darkMode} totalProducts={products.length} totalTeam={team.length} />;
      
    case 'team':
      return (
        <TeamTab 
          darkMode={darkMode} 
          filteredTeam={filteredTeam} 
          handleEdit={handleEdit} 
          deleteItem={deleteItem} 
          setEditingItem={setEditingItem} 
          setFormData={setFormData} 
          setShowMemberModal={setShowMemberModal} 
        />
      );
      
    case 'inventory':
      return (
        <InventoryTab 
          darkMode={darkMode} 
          filteredProducts={filteredProducts} 
          handleEdit={handleEdit} 
          deleteItem={deleteItem} 
          setEditingItem={setEditingItem} 
          setFormData={setFormData} 
          setShowProductModal={setShowProductModal} 
        />
      );
      
    case 'analytics':
      return <AnalyticsTab darkMode={darkMode} />;
      
    case 'settings':
      return <SettingsTab darkMode={darkMode} triggerNotif={triggerNotif} />;
      
    default:
      return null;
  }
}