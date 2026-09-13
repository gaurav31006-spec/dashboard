import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState({
    views: 0,
    newFollowers: 0,
    totalFollowers: 0,
    interactions: 0,
    contentShared: 0,
    reach: 0,
    customContent: [],
  });

  const updateData = (newData) => {
    setDashboardData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <DataContext.Provider value={{ dashboardData, updateData }}>
      {children}
    </DataContext.Provider>
  );
};
