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
  const [date, setDate] = useState<number>(dayJS.date());
  const [days, setDays] = useState<dayjs.Dayjs[]>(getDaysInMonth(year, month));

  const setDay = (
    day?: dayjs.ConfigType,
    format?: dayjs.OptionType,
    strict?: boolean
  ) => {
    const dayJS = dayjs(day, format, strict);
    setYear(dayJS.year());
    setMonth(dayJS.month());
    setDate(dayJS.day());
  };

  useEffect(() => {
    setDays(getDaysInMonth(year, month));
  }, [year, month]);

  return {
    year,
    month,
    date,
    days,
    setDay,
  };
};
