import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import Insights from './pages/Insights';
import FollowersInsights from './pages/FollowersInsights';
import DataEntryFormPage from './pages/DataEntryFormPage';
import TopNavigation from './components/TopNavigation';
import { DataProvider } from './context/DataContext';

const AppContent = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000', display: 'flex', flexDirection: 'column' }}>
      <TopNavigation />
      <div style={{ flex: 1, maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <Routes>
          <Route path="/" element={<ProfessionalDashboard />} />
          <Route path="/dashboard" element={<ProfessionalDashboard />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:tab" element={<Insights />} />
          <Route path="/followers" element={<FollowersInsights />} />
          <Route path="/data-entry" element={<DataEntryFormPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <DataProvider>
      <Router>
        <AppContent />
      </Router>
    </DataProvider>
  );
}

export default App;
