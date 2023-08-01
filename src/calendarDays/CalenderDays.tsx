import React, { FC, useContext } from 'react';
import styles from './CalendarDays.module.less';
import { CalendarContext } from '../calendar/Calendar';
import dayjs from 'dayjs';
import { weeks } from '../common';

interface CalendarDaysProps {
  selected: string[];
  onClick: (day: dayjs.Dayjs, e: MouseEvent) => void;
}

const cellStyle = styles['calendar-cell'];
const baseStyle = `${styles['calendar-day']} ${cellStyle}`;

export const CalendarDays: FC<CalendarDaysProps> = props => {
  const { selected, onClick } = props;
  const { days, month } = useContext(CalendarContext);

  const getDayCellStyle = (day: dayjs.Dayjs) => {
    if (day.month() !== month) {
      return styles['calendar-cell-disable'];
    }

    if (selected.includes(`${day.year()}-${day.month()}-${day.date()}`)) {
      return styles['calendar-cell-active'];
    }

    return styles['calendar-cell-normal'];
  };

  const Day = (props: { day: dayjs.Dayjs }) => {
    const { day } = props;
    return (
      <div
        className={`${baseStyle} ${getDayCellStyle(day)}`}
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
        {days.map(day => (
          <Day day={day} key={day.format()}></Day>
        ))}
      </div>
    </div>
  );
};
