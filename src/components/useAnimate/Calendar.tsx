import { useEffect, useRef, useState } from "react";
import { useAnimate, stagger } from "framer-motion";

export function Calendar() {
  const today = new Date();

  const year = today.getFullYear();
  const monthName = today.toLocaleDateString(undefined, { month: "long" });
  const dayOfMonth = today.getDate();

  const firstWeekdayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  ).getDay();

  const lastDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  const days = [...Array(lastDayOfMonth)];

  const [scopeBlueCircle, animateBlueCircle] = useAnimate();
  const [scopeRedCircle1, animateRedCircle1] = useAnimate();
  const [scopeRedCircle2, animateRedCircle2] = useAnimate();
  const [scopeMonth, animateMonth] = useAnimate();

  const [calendarPosition, setCalendarPosition] = useState({ x: 0, y: 0 });

  const todayRef = useRef(null);
  const [todayPosition, setTodayPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!scopeMonth.current) return; // Wait for the element to be available

    // Animate the days
    animateMonth(
      "div",
      { opacity: 1, scale: [0, 1.2, 1] },
      { delay: stagger(0.07) }
    );

    // Position the circles behind today
    const calendar = scopeMonth.current.getBoundingClientRect();
    setCalendarPosition({
      x: Math.floor(calendar.x),
      y: Math.floor(calendar.y),
    });
    const today = todayRef.current.getBoundingClientRect();
    setTodayPosition({
      x: Math.floor(today.x),
      y: Math.floor(today.y),
    });

    // Shrink blue circle
    animateBlueCircle(
      scopeBlueCircle.current,
      { r: 10 },
      { duration: 0.5, delay: (dayOfMonth + 6) * 0.07 }
    );

    // Animate red circle 1
    animateRedCircle1(
      scopeRedCircle1.current,
      { r: 600 },
      { duration: 1, delay: (dayOfMonth + 6) * 0.07 + 0.2 }
    );

    // Animate red circle 2
    animateRedCircle2(
      scopeRedCircle2.current,
      { r: 600 },
      { duration: 1, delay: (dayOfMonth + 6) * 0.07 + 0.4 }
    );
  }, [scopeMonth.current, dayOfMonth]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-[#116cff] to-[#e705c0] p-0 m-0">
      <h1 className="text-3xl font-semibold text-white mb-4">
        {monthName} {year}
      </h1>

      <div
        className="relative grid grid-cols-7 gap-2 p-2 rounded-3xl bg-white"
        ref={scopeMonth} // Attach ref to the calendar container
      >
        <section
          className="absolute w-[1000px] h-[1000px] bg-white"
          style={{
            top: todayPosition.y - calendarPosition.y - 475,
            left: todayPosition.x - calendarPosition.x - 475,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000">
            {/* Blue circle */}
            <circle
              cx="500"
              cy="500"
              r="600"
              style={{ stroke: "none", fill: "#0247FE" }}
              ref={scopeBlueCircle}
            />

            {/* Red circle 1 */}
            <circle
              cx="500"
              cy="500"
              r="12.5"
              style={{
                stroke: "Red",
                strokeWidth: 25,
                fill: "none",
              }}
              ref={scopeRedCircle1}
            />

            {/* Red circle 2 */}
            <circle
              cx="500"
              cy="500"
              r="0"
              style={{
                stroke: "Red",
                strokeWidth: 25,
                fill: "none",
              }}
              ref={scopeRedCircle2}
            />
          </svg>
        </section>

        {getWeekdayNames().map((weekday, i) => {
          return (
            <div
              className="flex items-center justify-center h-12 w-12 text-white bg-[#0247FE] rounded-full"
              key={"weekday" + i}
            >
              {weekday}
            </div>
          );
        })}

        {days.map((_, i) => {
          return (
            <div
              className={`flex items-center justify-center h-12 w-12 text-center rounded-full ${
                dayOfMonth === i + 1 ? "bg-red-500 text-white" : "bg-[#fb9902]"
              }`}
              key={i}
              ref={dayOfMonth === i + 1 ? todayRef : null}
              style={{
                gridColumn:
                  i === 0
                    ? firstWeekdayOfMonth === 0
                      ? 7
                      : firstWeekdayOfMonth
                    : undefined,
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getWeekdayNames() {
  const d = new Date();
  const weekDays = [];

  d.setDate(1);

  // Get the first Monday
  while (d.getDay() !== 1) {
    d.setDate(d.getDate() + 1);
  }

  for (let index = 0; index < 7; index++) {
    weekDays.push(
      new Date(d.getTime()).toLocaleDateString(undefined, {
        weekday: "short",
      })
    );
    d.setDate(d.getDate() + 1);
  }

  return weekDays;
}
