import React, { useContext } from 'react';
import styles from './CalendarNav.module.less';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { CalendarContext } from '../calendar/Calendar';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const CalendarNav = () => {
  const { year, month } = useContext(CalendarContext);

  return (
    <div className={styles['calendar-nav']}>
      <p className={styles['calendar-nav-day']}>{`${months[month]} ${year}`}</p>
      <div className={styles['calendar-nav-switch']}>
        <IconChevronLeft />
        <IconChevronRight />
      </div>
    </div>
  );
};
