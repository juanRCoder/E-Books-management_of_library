import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Calendary.scss";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [days, setDays] = useState([]);
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Deciembre",
  ];
  const daysOfWeek = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

  useEffect(() => {
    renderCalendar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMonth, currentYear]);

  const renderCalendar = () => {
    const date = new Date(currentYear, currentMonth, 1);
    const firstDay = date.getDay();
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();
    const nextDays = 7 - ((lastDay + firstDay) % 7);

    const newDays = [];

    for (let x = firstDay; x > 0; x--) {
      newDays.push(
        <div key={`prev${prevLastDay - x + 1}`} className="day prev">
          {prevLastDay - x + 1}
        </div>
      );
    }

    for (let i = 1; i <= lastDay; i++) {
      newDays.push(
        <div
          key={i}
          className={`day${
            i === new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
              ? " today"
              : ""
          }`}
        >
          {i}
        </div>
      );
    }

    for (let j = 1; j <= nextDays; j++) {
      newDays.push(
        <div key={`next${j}`} className="day next">
          {j}
        </div>
      );
    }

    setDays(newDays);
    hideTodayBtn();
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth + 1) % 12);
    setCurrentYear((prevMonth) =>
      prevMonth + 1 > 11 ? currentYear + 1 : currentYear
    );
  };

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth - 1 < 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevMonth) =>
      prevMonth - 1 < 0 ? currentYear - 1 : currentYear
    );
  };

  const today = () => {
    setCurrentMonth(new Date().getMonth());
    setCurrentYear(new Date().getFullYear());
    renderCalendar();
  };

  const hideTodayBtn = () => {
    return (
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    );
  };

  return (
    <div className="container">
      <div className="calendar">
        <div className="header">
          <div className="month">{`${months[currentMonth]} ${currentYear}`}</div>
          <div className="btns">
            <div
              className="btn today"
              onClick={today}
              style={{ display: hideTodayBtn() ? "none" : "flex" }}
            >
              <FontAwesomeIcon icon={faCalendarDay} />
            </div>
            <div className="btn prev" onClick={prevMonth}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="btn next" onClick={nextMonth}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
        <div className="weekdays">
          {daysOfWeek.map((day) => (
            <div key={day} className="day">
              {day}
            </div>
          ))}
        </div>
        <div className="days">{days}</div>
      </div>
    </div>
  );
};

export default Calendar;
