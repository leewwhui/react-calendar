import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { getDaysInMonth } from '../utils';

export const useDays = (
  day?: dayjs.ConfigType,
  format?: dayjs.OptionType,
  strict?: boolean
) => {
  const dayJS = dayjs(day, format, strict);
  const [year, setYear] = useState<number>(dayJS.year());
  const [month, setMonth] = useState<number>(dayJS.month());
  const [days, setDays] = useState<dayjs.Dayjs[]>(getDaysInMonth(year, month));

  const setDay = (day: dayjs.Dayjs) => {
    setYear(day.year());
    setMonth(day.month());
  };

  useEffect(() => {
    setDays(getDaysInMonth(year, month));
  }, [year, month]);

  return {
    year,
    month,
    days,
    setDay,
  };
};
