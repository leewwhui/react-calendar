import React, { FC, createContext, useMemo } from 'react';
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

interface CalendarProps {
  selected?: Date[];
}

export const Calendar: FC<CalendarProps> = props => {
  const { year, month, days, setDay } = useDays();

  const selected = useMemo(() => {
    const selected = props.selected || [];

    return selected.map(
      item => `${item.getFullYear()}-${item.getMonth()}-${item.getDate()}`
    );
  }, [props.selected]);

  const handleOnMouseChange = (day: dayjs.Dayjs) => {
    setDay(day);
  };

  return (
    <CalendarContext.Provider value={{ year, month, days }}>
      <div className={styles['calendar-container']}>
        <CalendarNav onMonthChange={handleOnMouseChange} />
        <CalendarDays selected={selected} />
      </div>
    </CalendarContext.Provider>
  );
};
