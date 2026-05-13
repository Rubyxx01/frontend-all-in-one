"use client";

import { useMemo, useState } from "react";

/* ---------- DATA ---------- */
const hourlyData = [
  { time: "Now", temp: 31, icon: "☀️" },
  { time: "1 PM", temp: 33, icon: "☀️" },
  { time: "2 PM", temp: 34, icon: "☀️" },
  { time: "3 PM", temp: 35, icon: "☀️" },
  { time: "4 PM", temp: 36, icon: "☀️" },
  { time: "5 PM", temp: 35, icon: "🌤️" },
  { time: "6 PM", temp: 33, icon: "🌤️" },
  { time: "7 PM", temp: 31, icon: "☁️" },
  { time: "8 PM", temp: 29, icon: "☁️" },
  { time: "9 PM", temp: 27, icon: "🌙" },
  { time: "10 PM", temp: 25, icon: "🌙" },
  { time: "11 PM", temp: 24, icon: "🌙" },
];

const weeklyData = [
  { day: "Today", icon: "☀️", label: "Sunny", high: 36, low: 22 },
  { day: "Sun", icon: "⛈️", label: "Storm", high: 37, low: 21 },
  { day: "Mon", icon: "🌤️", label: "Partly Cloudy", high: 32, low: 20 },
  { day: "Tue", icon: "🌧️", label: "Rainy", high: 28, low: 18 },
  { day: "Wed", icon: "🌧️", label: "Heavy Rain", high: 25, low: 17 },
  { day: "Thu", icon: "🌤️", label: "Partly Cloudy", high: 30, low: 19 },
  { day: "Fri", icon: "☀️", label: "Sunny", high: 34, low: 21 },
];

const conditionsData = [
  { label: "Real Feel", value: "30°", icon: "🌡️" },
  { label: "Wind", value: "0.2 km/h", icon: "💨" },
  { label: "Humidity", value: "22%", icon: "💧" },
  { label: "Visibility", value: "16 km", icon: "👁️" },
  { label: "Pressure", value: "1018 hPa", icon: "📈" },
  { label: "UV Index", value: "9 Very High", icon: "☀️" },
  { label: "Dew Point", value: "8°", icon: "🌡️" },
];

/* ---------- HELPERS ---------- */
function toF(c) {
  return Math.round((c * 9) / 5 + 32);
}

function formatTemp(temp, isCelsius) {
  return `${isCelsius ? temp : toF(temp)}°`;
}

/* ---------- COMPONENT ---------- */
export default function WeatherDashboard() {
  const [isCelsius, setIsCelsius] = useState(true);

  const today = useMemo(() => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  }, []);

  const allTemps = weeklyData.flatMap((d) => [d.high, d.low]);
  const minTemp = Math.min(...allTemps);
  const maxTemp = Math.max(...allTemps);
  const range = maxTemp - minTemp || 1;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-amber-400">📍</span>
              <h1 className="text-3xl font-bold tracking-tight">Madrid</h1>
              <span className="text-slate-400">Spain</span>
            </div>

            <button
              onClick={() => setIsCelsius(!isCelsius)}
              className="px-4 py-2 bg-slate-900 border border-white/5 rounded-xl text-sm font-mono hover:bg-slate-800 transition"
            >
              {isCelsius ? "°C" : "°F"}
            </button>
          </div>

          {/* MAIN WEATHER CARD */}
          <div className="rounded-3xl bg-slate-900/70 border border-white/5 p-8 lg:p-10 backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-2">{today}</p>

                <div className="text-8xl lg:text-9xl font-extralight tracking-tighter leading-none">
                  {formatTemp(31, isCelsius)}
                </div>

                <p className="text-xl text-slate-300 mt-2">Sunny</p>

                <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-slate-400">
                  <span>⬆ {formatTemp(36, isCelsius)}</span>
                  <span>⬇ {formatTemp(22, isCelsius)}</span>
                  <span className="text-slate-600">|</span>
                  <span>
                    Chance of rain: <span className="text-slate-200">0%</span>
                  </span>
                </div>
              </div>

              <div className="text-7xl">☀️</div>
            </div>
          </div>

          {/* HOURLY FORECAST */}
          <section>
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-1">
              Today s Forecast
            </h2>

            <div className="rounded-3xl bg-slate-900/70 border border-white/5 p-5 backdrop-blur-xl">
              <div className="flex gap-4 overflow-x-auto pb-2">
                {hourlyData.map((hour, index) => (
                  <div
                    key={index}
                    className="min-w-[72px] flex flex-col items-center gap-2 py-2 px-1 rounded-xl hover:bg-white/5 transition"
                  >
                    <span
                      className={`text-xs ${
                        index === 0
                          ? "text-amber-400 font-semibold"
                          : "text-slate-400"
                      }`}
                    >
                      {hour.time}
                    </span>

                    <span className="text-2xl">{hour.icon}</span>

                    <span className="text-sm font-medium">
                      {formatTemp(hour.temp, isCelsius)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AIR CONDITIONS */}
          <section>
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-1">
              Air Conditions
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {conditionsData.map((condition, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900/70 border border-white/5 p-4 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span>{condition.icon}</span>
                    <span className="text-xs text-slate-400">
                      {condition.label}
                    </span>
                  </div>
                  <div className="text-lg font-semibold">
                    {condition.value}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <section>
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-1">
              7-Day Forecast
            </h2>

            <div className="rounded-3xl bg-slate-900/70 border border-white/5 overflow-hidden backdrop-blur-xl">
              {weeklyData.map((day, index) => {
                const left = ((day.low - minTemp) / range) * 100;
                const width = ((day.high - day.low) / range) * 100;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-5 py-4 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition"
                  >
                    <span
                      className={`w-12 text-sm ${
                        index === 0
                          ? "text-amber-400 font-semibold"
                          : "text-slate-300"
                      }`}
                    >
                      {day.day}
                    </span>

                    <span className="w-8 text-center">{day.icon}</span>

                    <span className="w-24 text-xs text-slate-400 truncate">
                      {day.label}
                    </span>

                    <span className="w-8 text-right text-sm text-slate-400 font-mono">
                      {formatTemp(day.low, isCelsius)}
                    </span>

                    <div className="flex-1 mx-2">
                      <div className="h-1 bg-white/5 rounded-full relative">
                        <div
                          className="absolute top-0 h-1 rounded-full bg-gradient-to-r from-sky-400 via-amber-400 to-red-400"
                          style={{
                            left: `${left}%`,
                            width: `${Math.max(width, 8)}%`,
                          }}
                        />
                      </div>
                    </div>

                    <span className="w-8 text-right text-sm text-slate-100 font-mono">
                      {formatTemp(day.high, isCelsius)}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}