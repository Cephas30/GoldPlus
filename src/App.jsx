import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewEvent from './components/NewEvent';
import SpeechEvent from './components/SpeechEvent';
import SpeechLiveNow from './components/SpeechLiveNow';
import SpeechUpcoming from './components/SpeechUpcoming';
import SpeechChannels from './components/SpeechChannels';
import SpeechGuide from './components/SpeechGuide';
import Analysis from './components/Analysis';
import AIAssistant from './components/AIAssistant';
import MarketHours from './components/MarketHours';
import MarketSentiment from './components/MarketSentiment';
import Correlation from './components/Correlation';
import RiskCalculator from './components/RiskCalculator';
import TimeZone from './components/TimeZone';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b0f19] text-gray-200 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/new" element={<NewEvent />} />
          <Route path="/event/speech" element={<SpeechEvent />}>
            <Route index element={<Navigate to="live-now" replace />} />
            <Route path="live-now" element={<SpeechLiveNow />} />
            <Route path="upcoming" element={<SpeechUpcoming />} />
            <Route path="channels" element={<SpeechChannels />} />
            <Route path="guide" element={<SpeechGuide />} />
          </Route>
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/market-hours" element={<MarketHours />} />
          <Route path="/market-sentiment" element={<MarketSentiment />} />
          <Route path="/correlation" element={<Correlation />} />
          <Route path="/risk-calculator" element={<RiskCalculator />} />
          <Route path="/time-zone" element={<TimeZone />} />
          <Route path="/about" element={<About />} />
          <Route path="/alert" element={<Alert />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;