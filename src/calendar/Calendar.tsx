import React, { createContext } from 'react';
import styles from './Calendar.module.less';
import { CalendarNav } from '../calendarNav/CalendarNav';
import { CalendarDays } from '../calendarDays/CalenderDays';
import { useDays } from '../hooks/useDays';
import dayjs from 'dayjs';

export const CalendarContext = createContext<{
  year: number;
  month: number;
  date: number;
  days: dayjs.Dayjs[];
}>({
  year: 0,
  month: 0,
  date: 0,
  days: [],
});

export const Calendar = () => {
  const { year, month, date, days } = useDays();

  return (
    <CalendarContext.Provider value={{ year, month, date, days }}>
      <div className={styles['calendar-container']}>
        <CalendarNav />
        <CalendarDays />
      </div>
    </CalendarContext.Provider>
  );
};
