import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpCircleIcon, ArrowDownCircleIcon } from "../icons";

const CardChart = ({ data, chartColor, areaColor }) => (
  <div className="w-full h-[96px]">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data.map((v) => ({ value: v }))}>
        <defs>
          <linearGradient id={`fill-${areaColor}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={areaColor} stopOpacity={0.8} />
            <stop offset="60%" stopColor={areaColor} stopOpacity={0.4} />
            <stop offset="100%" stopColor={areaColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="linear"
          dataKey="value"
          stroke={chartColor}
          strokeWidth={4}
          fill={`url(#fill-${areaColor})`}
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const MonthlyOverview = () => {
  const [cards, setCards] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios.get("/api/monthlyOverview.json")
      .then((res) => setCards(res.data))
      .catch((err) => console.error("Error fetching cards", err));

    axios.get("/api/calendarEvents.json")
      .then((res) => setCalendarEvents(res.data))
      .catch((err) => console.error("Error fetching calendar events", err));
  }, []);

  const monthName = currentMonth.format("MMMM YYYY");
  const daysInMonth = currentMonth.daysInMonth();
  const currentMonthStr = currentMonth.format("YYYY-MM");

  const getHighlightClass = (day) => {
    const dateStr = `${currentMonthStr}-${String(day).padStart(2, "0")}`;
    const event = calendarEvents.find((e) => e.date === dateStr);

    if (!event) return "";

    return event.type === "meeting"
      ? "bg-gray-800 text-white"
      : event.type === "deadline"
      ? "bg-pink-100 text-pink-600 font-medium"
      : event.type === "renewal"
      ? "bg-yellow-100 text-yellow-600 font-medium"
      : "";
  };

  const prevMonth = () => setCurrentMonth((prev) => prev.subtract(1, "month"));
  const nextMonth = () => setCurrentMonth((prev) => prev.add(1, "month"));

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Monthly Overview Panel */}
      <div className="p-6 w-full md:max-w-[692px] bg-white border border-[#E5E7EB] rounded-[12px] flex flex-col">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Monthly Overview</h2>

        {/* Desktop view: grid */}
        <div className="hidden sm:grid grid-cols-2 gap-6">
          {cards.map((card) => (
            <div key={card.label} className="flex items-center gap-4">
              <CardChart
                data={card.data}
                chartColor={card.chartColor}
                areaColor={card.areaColor}
              />
              <div className="flex flex-col justify-center">
                <h4 className="text-[18px] font-normal text-[#032D49] font-['DM_Sans'] mb-1">
                  {card.label}
                </h4>
                <span className="text-[32px] font-bold text-[#596774] font-['DM_Sans']">
                  {card.value.toString().padStart(2, "0")}
                </span>
                <div className={`flex items-center gap-1 text-[14px] font-bold font-['DM_Sans'] ${card.color === "green" ? "text-green-600" : card.color === "red" ? "text-red-600" : "text-blue-600"}`}>
                  {card.color === "green" ? (
                    <ArrowUpCircleIcon className="w-[16px] h-[16px]" />
                  ) : (
                    <ArrowDownCircleIcon className="w-[16px] h-[16px] rotate-180" />
                  )}
                  {card.percent.replace(/[+-]/g, "")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view: carousel */}
<div className="sm:hidden flex flex-col items-center">
  {cards.length > 0 && (
    <div className="w-full border p-4 rounded-lg flex gap-4 items-center">
      <div className="w-[120px]">
        <CardChart
          data={cards[activeIndex].data}
          chartColor={cards[activeIndex].chartColor}
          areaColor={cards[activeIndex].areaColor}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-[16px] text-[#032D49] font-semibold font-['DM_Sans'] mb-1">
          {cards[activeIndex].label}
        </h4>
        <span className="text-[28px] text-[#596774] font-bold font-['DM_Sans']">
          {cards[activeIndex].value}
        </span>
        <div className={`flex items-center gap-1 text-[14px] font-bold font-['DM_Sans'] ${cards[activeIndex].color === "green" ? "text-green-600" : "text-red-600"}`}>
          {cards[activeIndex].color === "green" ? (
            <ArrowUpCircleIcon className="w-[16px] h-[16px]" />
          ) : (
            <ArrowDownCircleIcon className="w-[16px] h-[16px] rotate-180" />
          )}
          {cards[activeIndex].percent.replace(/[+-]/g, "")}
        </div>
      </div>
    </div>
  )}

  {/* Dots */}
  <div className="flex mt-4 gap-2">
    {cards.map((_, i) => (
      <button
        key={i}
        className={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? "bg-[#032A44]" : "bg-gray-300"}`}
        onClick={() => setActiveIndex(i)}
      />
    ))}
  </div>
</div>

      </div>

      {/* Calendar */}
      <div className="p-6 w-full md:max-w-[456px] bg-white border border-[#E5E7EB] rounded-[12px] flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <button onClick={prevMonth} className="text-gray-400 text-lg">‹</button>
          <h4 className="text-md font-semibold text-gray-700">{monthName}</h4>
          <button onClick={nextMonth} className="text-gray-400 text-lg">›</button>
        </div>

        <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-1">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 text-center text-sm text-gray-700 gap-y-2">
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            return (
              <div
                key={day}
                className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full ${getHighlightClass(day)}`}
              >
                {String(day).padStart(2, "0")}
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex justify-center items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-gray-700 rounded-full" />
            Meetings
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-pink-500 rounded-full" />
            Deadlines
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Renewals
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyOverview;
