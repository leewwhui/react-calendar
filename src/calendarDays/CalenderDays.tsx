import React, { useContext } from 'react';
import styles from './CalendarDays.module.less';
import { CalendarContext } from '../calendar/Calendar';
import dayjs from 'dayjs';

const weeks = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const CalendarDays = () => {
  const { days, month, year, date } = useContext(CalendarContext);

  const cellStyle = styles['calendar-cell'];
  const dayRow = styles['calendar-day-row'];

  const getDayCellStyle = (day: dayjs.Dayjs) => {
    const baseStyle = `${styles['calendar-day']} ${cellStyle}`;

    if (day.month() !== month) {
      return `${baseStyle} ${styles['calendar-cell-disable']}`;
    }
    if (day.month() === month && day.year() === year && day.date() === date) {
      return `${baseStyle} ${styles['calendar-cell-active']}`;
    }
    return `${baseStyle} ${styles['calendar-cell-normal']}`;
  };

  return (
    <div className={styles['calendar-content']}>
      <div className={styles['calendar-weeks']}>
        {weeks.map(w => (
          <div key={w} className={cellStyle}>
            {w}
          </div>
        ))}
      </div>

      <div className={styles['calendar-days']}>
        <div className={dayRow}>
          {days.slice(0, 7).map(day => (
            <div className={getDayCellStyle(day)}>{day.date()}</div>
          ))}
        </div>

        <div className={dayRow}>
          {days.slice(7, 14).map(day => (
            <div className={getDayCellStyle(day)}>{day.date()}</div>
          ))}
        </div>

        <div className={dayRow}>
          {days.slice(14, 21).map(day => (
            <div className={getDayCellStyle(day)}>{day.date()}</div>
          ))}
        </div>

        <div className={dayRow}>
          {days.slice(21, 28).map(day => (
            <div className={getDayCellStyle(day)}>{day.date()}</div>
          ))}
        </div>

        <div className={dayRow}>
          {days.slice(28, 35).map(day => (
            <div className={getDayCellStyle(day)}>{day.date()}</div>
          ))}
        </div>

        <div className={dayRow}>
          {days.slice(35, 42).map(day => (
            <div className={getDayCellStyle(day)}>{day.date()}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
