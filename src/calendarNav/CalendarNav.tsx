import React, { FC, useContext } from 'react';
import styles from './CalendarNav.module.less';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { CalendarContext } from '../calendar/Calendar';
import dayjs from 'dayjs';
import { months } from '../common';

interface CalendarNavProps {
  onMonthChange: (day: dayjs.Dayjs) => void;
}

export const CalendarNav: FC<CalendarNavProps> = props => {
  const { onMonthChange } = props;
  const { year, month } = useContext(CalendarContext);

  const next = () => {
    const nextMonth = dayjs(`${year}-${month + 1}`).add(1, 'month');
    onMonthChange(nextMonth);
  };

  const prev = () => {
    const prevMonth = dayjs(`${year}-${month + 1}`).subtract(1, 'month');
    onMonthChange(prevMonth);
  };

  return (
    <div className={styles['calendar-nav']}>
      <p className={styles['calendar-nav-day']}>{`${months[month]} ${year}`}</p>
      <div className={styles['calendar-nav-switch']}>
        <IconChevronLeft onClick={prev} />
        <IconChevronRight onClick={next} />
      </div>
    </div>
  );
};
