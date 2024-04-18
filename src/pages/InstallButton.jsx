import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';

const InstallButton = ({ onInstallClick }) => {
  let location = useLocation();

  if (location.pathname !== "/") {
    return null; 
  }

  return (
    <Button
      style={{ color: 'white', backgroundColor: "#17bf9e", transform: 'scale(1.1)', transition: 'transform 0.2s' }}
      type="primary"
      onClick={onInstallClick}
    >
      Install App
    </Button>
  );
};

export default InstallButton;