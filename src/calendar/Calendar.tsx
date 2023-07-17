import React, { createContext } from 'react';
import styles from './Calendar.module.less';
import { CalendarNav } from '../calendarNav/CalendarNav';
import { CalendarDays } from '../calendarDays/CalenderDays';
import { useDays } from '../hooks/useDays';
import dayjs from 'dayjs';

export const CalendarContext = createContext<{
  year: number;
  month: number;
  days: dayjs.Dayjs[];
}>({
  year: 0,
  month: 0,
  days: [],
});

export const Calendar = () => {
  const { year, month, days, setDay } = useDays();

  const handleOnMouseChange = (day: dayjs.Dayjs) => {
    setDay(day);
  };

  return (
    <CalendarContext.Provider value={{ year, month, days }}>
      <div className={styles['calendar-container']}>
        <CalendarNav onMonthChange={handleOnMouseChange} />
        <CalendarDays />
      </div>
    </CalendarContext.Provider>
  );
};
