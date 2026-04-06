import React from 'react';

const SpeechLiveNow = () => {
  return (
    <>
      {/* LIVE SECTION TITLE */}
      <div className="mb-4 text-sm text-yellow-400">
        ● LIVE RIGHT NOW — CLICK ANY TO WATCH
      </div>

      {/* EVENTS */}
      <div className="space-y-4">
        {[
          {
            time: "2:00 PM EST",
            title: "Fed Chair Powell — Congressional Testimony",
            desc: "Jerome Powell · Federal Reserve · Senate Banking",
            move: "+15–40",
          },
          {
            time: "3:30 PM EST",
            title: "Presidential Press Conference — White House",
            desc: "Donald Trump · White House",
            move: "+20–55",
          },
          {
            time: "8:45 AM CET",
            title: "ECB Press Conference — Rate Decision",
            desc: "Christine Lagarde · ECB",
            move: "+12–30",
          },
        ].map((event, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row justify-between items-center bg-[#121826] border border-gray-800 rounded-xl p-4 hover:border-yellow-500/40 transition"
          >
            {/* LEFT TIME */}
            <div className="w-full md:w-[120px] text-sm text-gray-400 mb-3 md:mb-0">
              <div>{event.time}</div>
              <div className="text-red-400 text-xs">● NOW</div>
            </div>

            {/* CENTER INFO */}
            <div className="flex-1">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-gray-400 text-xs mt-1">{event.desc}</p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-6 mt-3 md:mt-0">
              <div className="text-right">
                <div className="text-yellow-400 text-sm">
                  ±{event.move} GOLD MOVE
                </div>
                <div className="text-green-400 text-xs">LIVE</div>
              </div>

              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full text-sm">
                ● Watch Live
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SpeechLiveNow;
