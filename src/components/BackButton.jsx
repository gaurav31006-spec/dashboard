// src/components/BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button 
      onClick={handleClick} 
      className="dashboard-icon-btn"
      aria-label="Go back"
    >
      <ArrowLeft size={22} />
    </button>
  );
};

export default BackButton;
