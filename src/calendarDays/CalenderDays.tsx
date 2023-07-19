import React, { FC, useContext } from 'react';
import styles from './CalendarDays.module.less';
import { CalendarContext } from '../calendar/Calendar';
import dayjs from 'dayjs';

const weeks = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

interface CalendarDaysProps {
  selected: string[];
  onClick: (day: dayjs.Dayjs, e: MouseEvent) => void;
}

export const CalendarDays: FC<CalendarDaysProps> = props => {
  const { selected, onClick } = props;
  const { days, month } = useContext(CalendarContext);

  const cellStyle = styles['calendar-cell'];
  const dayRow = styles['calendar-day-row'];

  const getDayCellStyle = (day: dayjs.Dayjs) => {
    const baseStyle = `${styles['calendar-day']} ${cellStyle}`;

    if (day.month() !== month) {
      return `${baseStyle} ${styles['calendar-cell-disable']}`;
    }

    if (selected.includes(`${day.year()}-${day.month()}-${day.date()}`)) {
      return `${baseStyle} ${styles['calendar-cell-active']}`;
    }

    return `${baseStyle} ${styles['calendar-cell-normal']}`;
  };

  const Day: FC<{ day: dayjs.Dayjs }> = ({ day }) => {
    return (
      <div
        className={getDayCellStyle(day)}
        onClick={e => onClick(day, e.nativeEvent)}
      >
        {day.date()}
      </div>
    );
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
            <Day day={day} key={day.date()} />
          ))}
        </div>

        <div className={dayRow}>
          {days.slice(7, 14).map(day => (
            <Day day={day} key={day.date()} />
          ))}
        </div>

        <div className={dayRow}>
          {days.slice(14, 21).map(day => (
            <Day day={day} key={day.date()} />
          ))}
        </div>

        <div className={dayRow}>
          {days.slice(21, 28).map(day => (
            <Day day={day} key={day.date()} />
          ))}
        </div>

        <div className={dayRow}>
          {days.slice(28, 35).map(day => (
            <Day day={day} key={day.date()} />
          ))}
        </div>

        <div className={dayRow}>
          {days.slice(35, 42).map(day => (
            <Day day={day} key={day.date()} />
          ))}
        </div>
      </div>
    </div>
  );
};
