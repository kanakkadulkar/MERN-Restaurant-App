import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import Success from './Pages/Success';
import Notfound from './Pages/Notfound';
import ResizeObserver from 'resize-observer-polyfill'; // Add this if using the polyfill

function App() {
  const appContainerRef = useRef(null);

  useEffect(() => {
    const appContainer = appContainerRef.current;
    if (!appContainer) return;

    // Initialize the ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        console.log(`Size changed to ${width}x${height}`);
      }
    });

    // Observe the app container
    resizeObserver.observe(appContainer);

    // Cleanup on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Router>
      <div ref={appContainerRef} className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <Toaster />
    </Router>
  );
}

export default App;




