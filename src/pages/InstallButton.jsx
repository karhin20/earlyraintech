import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import './install-button.css';

const InstallButton = ({ onInstallClick }) => {
  const [showInstall, setShowInstall] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsStandalone(isStandalone);

    // Show install prompt after 30 seconds if not installed
    const timer = setTimeout(() => {
      if (!isStandalone) {
        setShowInstall(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!showInstall || isStandalone) {
    return null;
  }

  return (
    <div className="install-prompt">
      <div className="install-content">
        <p>Install Early Rain Tech app for a better experience!</p>
        <div className="install-buttons">
          <Button color="primary" onClick={onInstallClick}>
            Install Now
          </Button>
          <Button color="secondary" onClick={() => setShowInstall(false)}>
            Maybe Later
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstallButton;