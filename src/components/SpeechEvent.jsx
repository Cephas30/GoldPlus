import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SpeechEvent = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-200 font-sans px-4 md:px-10 py-6">

      {/* MINI INFO BAR */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 text-xs">
        {[
          { name: "Live Now", path: "live-now" },
          { name: "Upcoming Speeches", path: "upcoming" },
          { name: "Live Channels", path: "channels" },
          { name: "Gold Impact Guide", path: "guide" },
        ].map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `p-3 rounded-lg border text-center transition ${isActive
                ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                : "bg-[#121826] border-gray-800 text-gray-400 hover:text-yellow-400 hover:border-yellow-500/30"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* HERO CARD */}
      <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-[#1a0f05] to-[#0b0f19] p-6 mb-8">

        {/* TITLE + LIVE BADGE */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            📺 <span className="text-yellow-400">Live Speeches & Events</span> That Move Gold
          </h2>

          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
            ● Live
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-2 max-w-3xl">
          Watch Fed Chair Powell, FOMC decisions, ECB meetings, and major global
          speeches that historically move gold — all streamed live in one place.
        </p>

        {/* STATS */}
        <div className="flex gap-4 mt-6 flex-wrap">
          {[
            { num: "3", label: "LIVE NOW" },
            { num: "8", label: "TODAY" },
            { num: "24/7", label: "STREAMS" },
            { num: "6", label: "CHANNELS" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#121826] border border-gray-800 px-5 py-3 rounded-lg text-center min-w-[90px]"
            >
              <div className="text-lg font-bold text-white">{stat.num}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RENDER SUB-ROUTES HERE */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SpeechEvent;