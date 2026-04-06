import React from "react";
import goldImg from "../assets/goldd.png";

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-3">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-0 mb-2">
        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-transparent bg-clip-text">
            Track What Moves Gold
          </h1>

          {/* Bias */}
          <div className="flex items-center gap-3 mt-2">
            <span className="text-gray-400 text-sm">Current Gold Bias:</span>
            <span className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Bullish
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <img
            src={goldImg}
            alt="gold"
            className="w-[520px] md:w-[680px] object-contain"
          />
        </div>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <div className="bg-[#121826] p-5 rounded-2xl border border-gray-800 hover:border-yellow-500/40 transition duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
          <p className="text-xs text-gray-400 uppercase mb-1">Current Gold Price</p>
          <p className="text-2xl font-bold text-white">$2,200.30</p>
        </div>

        <div className="bg-[#121826] p-5 rounded-2xl border border-gray-800 hover:border-yellow-500/40 transition duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
          <p className="text-xs text-gray-400 uppercase mb-1">Real Yields</p>
          <p className="text-green-400 font-semibold text-base flex items-center gap-2">
            Falling <span>↗</span>
          </p>
        </div>

        <div className="bg-[#121826] p-5 rounded-2xl border border-gray-800 hover:border-yellow-500/40 transition duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
          <p className="text-xs text-gray-400 uppercase mb-1">USD Strength</p>
          <p className="text-gray-300 text-base">Weaker ↓ 100.2</p>
        </div>

        <div className="bg-[#121826] p-5 rounded-2xl border border-gray-800 hover:border-yellow-500/40 transition duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
          <p className="text-xs text-gray-400 uppercase mb-1">Next Event (CPI Inflation)</p>
          <p className="text-2xl font-mono text-yellow-400">38:28</p>
        </div>
      </div>

      {/* TABLE */}
      <div>
        <h2 className="text-base font-semibold mb-3">Recent Gold Impact Events</h2>

        <div className="bg-[#121826] border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#1c2433] text-gray-400">
              <tr>
                <th className="px-5 py-2 text-left text-xs">Date & Time</th>
                <th className="px-5 py-2 text-left text-xs">Event</th>
                <th className="px-5 py-2 text-left text-xs">Forecast</th>
                <th className="px-5 py-2 text-left text-xs">Actual</th>
                <th className="px-5 py-2 text-left text-xs">Surprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="hover:bg-[#1a2233] transition">
                <td className="px-5 py-3">Apr 12, 2024 8:30 AM</td>
                <td className="px-5 py-3">CPI</td>
                <td className="px-5 py-3">3.2%</td>
                <td className="px-5 py-3">2.9%</td>
                <td className="px-5 py-3">
                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs">Strong Bullish</span>
                </td>
              </tr>
              <tr className="hover:bg-[#1a2233] transition">
                <td className="px-5 py-3">Apr 05, 2024 8:30 AM</td>
                <td className="px-5 py-3">NFP</td>
                <td className="px-5 py-3">180k</td>
                <td className="px-5 py-3">157%</td>
                <td className="px-5 py-3">
                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs">Bullish</span>
                </td>
              </tr>
              <tr className="hover:bg-[#1a2233] transition">
                <td className="px-5 py-3">Apr 20, 2024 2:00 PM</td>
                <td className="px-5 py-3">FOMC Rate Decision</td>
                <td className="px-5 py-3">5.25%</td>
                <td className="px-5 py-3">0%</td>
                <td className="px-5 py-3">
                  <span className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full text-xs">Neutral</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Home;
