import React, {
  FC,
  createContext,
  useMemo,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  ForwardedRef,
} from 'react';
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
  onDayClick: (day: dayjs.Dayjs, e: MouseEvent) => void;
  selected?: Date[];
}

export interface CalenderRef {
  gotoDate: (date: Date) => void;
  today: () => dayjs.Dayjs;
  getDates: () => dayjs.Dayjs[];
  nextYear: () => void;
  prevYear: () => void;
  nextMonth: () => void;
  prevMonth: () => void;
}

export const Calendar = forwardRef<CalenderRef, CalendarProps>((props, ref) => {
  const { year, month, days, setDay } = useDays();
  const [selected, setSelected] = useState<Date[]>([]);
  const { onDayClick } = props;

  const selectedDates = useMemo(() => {
    return selected.map(
      item => `${item.getFullYear()}-${item.getMonth()}-${item.getDate()}`
    );
  }, [selected]);

  useEffect(() => {
    setSelected(props.selected || []);
  }, [props.selected]);

  const next = (format: 'year' | 'month') => {
    return dayjs(`${year}-${month + 1}`).add(1, format);
  };

  const prev = (format: 'year' | 'month') => {
    return dayjs(`${year}-${month + 1}`).subtract(1, format);
  };

  useImperativeHandle(
    ref,
    () => ({
      gotoDate(date: Date) {
        setSelected([date]);
        setDay(dayjs(date));
      },
      today() {
        return dayjs();
      },
      getDates() {
        return selected.map(dayjs);
      },
      nextYear() {
        setDay(next('year'));
      },
      prevYear() {
        setDay(prev('year'));
      },
      nextMonth() {
        console.log('here');

        setDay(next('month'));
      },
      prevMonth() {
        setDay(prev('month'));
      },
    }),
    []
  );

  return (
    <CalendarContext.Provider value={{ year, month, days }}>
      <div className={styles['calendar-container']}>
        <CalendarNav onMonthChange={setDay} />
        <CalendarDays selected={selectedDates} onClick={onDayClick} />
      </div>
    </CalendarContext.Provider>
  );
});
