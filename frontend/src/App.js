import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import Success from './Pages/Success';
import Notfound from './Pages/Notfound';

function App() {
  const appContainerRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      // Throttle the callback
      if (!window.resizeTimeout) {
        window.resizeTimeout = setTimeout(() => {
          console.log("Element resized!");
          window.resizeTimeout = null;
        }, 200); // Adjust throttle time as necessary
      }
    });

    if (appContainerRef.current) {
      resizeObserver.observe(appContainerRef.current);
    }

    return () => {
      if (appContainerRef.current) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Router>
        <div ref={appContainerRef}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
        <Toaster />
      </Router>
    </>
  );
}

export default App;



