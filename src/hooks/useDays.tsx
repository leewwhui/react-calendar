import dayjs from 'dayjs';
import { useState } from 'react';
import { getDaysInMonth } from '../utils';

export const useDays = (
  day?: dayjs.ConfigType,
  format?: dayjs.OptionType,
  strict?: boolean
) => {
  const dayJS = dayjs(day, format, strict);

  const [data, setData] = useState<{
    year: number;
    month: number;
    days: dayjs.Dayjs[];
  }>({
    year: dayJS.year(),
    month: dayJS.month(),
    days: getDaysInMonth(dayJS.year(), dayJS.month()),
  });

  const setDay = (day: dayjs.Dayjs) => {
    const year = day.year();
    const month = day.month();
    const days = getDaysInMonth(year, month);

    setData({
      year,
      month,
      days,
    });
  };

  return {
    year: data.year,
    month: data.month,
    days: data.days,
    setDay,
  };
};
