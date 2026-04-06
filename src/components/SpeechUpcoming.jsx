import React from 'react';

const SpeechUpcoming = () => {
  return (
    <div className="mt-2 border-t border-gray-800 pt-6">
      <h3 className="text-yellow-400 text-sm mb-4">
        UPCOMING TODAY — CLICK TO SET REMINDER
      </h3>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#121826] border border-gray-800 rounded-xl p-5">
        <div>
          <p className="text-yellow-400 font-semibold">
            FOMC Meeting Minutes Release
          </p>
          <p className="text-gray-400 text-sm">
            2:00 PM EST · Expected move ±20–35
          </p>
        </div>

        <button className="bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded-full text-sm">
          Set Reminder 🔔
        </button>
      </div>
    </div>
  );
};

export default SpeechUpcoming;
