import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/goldd.png";

const Navbar = () => {
  const [isEventOpen, setIsEventOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsEventOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { title: "Home", path: "/" },
    { 
      title: "Event", 
      subItems: [
        { title: "New", path: "/event/new" },
        { title: "Speech", path: "/event/speech" }
      ] 
    },
    { title: "Analysis", path: "/analysis" },
    { title: "AI Assistant", path: "/ai-assistant" },
    { title: "Market Hours", path: "/market-hours" },
    { title: "Market Sentiment", path: "/market-sentiment" },
    { title: "Correlation", path: "/correlation" },
    { title: "Risk Calculator", path: "/risk-calculator" },
    { title: "Time Zone", path: "/time-zone" },
    { title: "About", path: "/about" },
    { title: "Alert", path: "/alert" }
  ];

  return (
    <nav className="border-b border-gray-800 bg-[#0b0f19]/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Top row: Logo + Login */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="logo" className="w-24 h-24 object-contain" />
            <span className="text-4xl font-semibold">
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                Gold
              </span>
              <span className="text-white">Pulse</span>
            </span>
          </div>
          <button className="flex items-center gap-2 bg-transparent border border-yellow-500/30 hover:border-yellow-400 text-yellow-400 px-4 py-2 rounded-full text-sm transition whitespace-nowrap">
            📧 Login with Email
          </button>
        </div>

        {/* Bottom row: Oval navigation container */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="bg-gray-800/50 rounded-full px-2 py-1 flex flex-wrap items-center justify-center gap-1">
            {navItems.map((item) => {
              if (item.subItems) {
                const isActiveParent = location.pathname.startsWith("/event");
                return (
                  <div key={item.title} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsEventOpen(!isEventOpen)}
                      className={`
                        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1
                        ${isActiveParent 
                          ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg" 
                          : "text-gray-300 hover:text-yellow-400 hover:bg-gray-700/50"}
                      `}
                    >
                      {item.title}
                      <span className="text-[10px] ml-1">{isEventOpen ? "▲" : "▼"}</span>
                    </button>

                    {/* Dropdown Menu */}
                    {isEventOpen && (
                      <div className="absolute top-full left-0 mt-2 w-36 bg-[#121826] border border-gray-700 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] py-2 z-50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        {item.subItems.map((sub) => (
                          <NavLink
                            key={sub.title}
                            to={sub.path}
                            onClick={() => setIsEventOpen(false)}
                            className={({ isActive }) => `
                              px-4 py-2.5 text-sm font-medium transition-colors
                              ${isActive 
                                ? "text-yellow-400 bg-gray-800 border-l-2 border-yellow-400" 
                                : "text-gray-300 hover:bg-gray-800 hover:text-yellow-400 border-l-2 border-transparent"}
                            `}
                          >
                            {sub.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Normal NavLink
              return (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className={({ isActive }) => `
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg" 
                      : "text-gray-300 hover:text-yellow-400 hover:bg-gray-700/50"}
                  `}
                >
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;