import dayjs from 'dayjs';

export const getDaysInMonth = (year: number, month: number): dayjs.Dayjs[] => {
  const details: dayjs.Dayjs[] = [];
  const length = dayjs()
    .month(month)
    .daysInMonth();

  for (let i = 0; i < length; i++) {
    const day = dayjs(`${year}-${month + 1}-${i + 1}`);
    details.push(day);
  }

  const firstDay = details[0];
  const lastDay = details[details.length - 1];

  if (firstDay.day() > 0) {
    const append = [];
    for (let i = 0; i < firstDay.day(); i++) {
      const year = firstDay.year();
      const month = firstDay.month() + 1;
      const date = firstDay.date();
      const week = firstDay.day() - i;
      const before = dayjs(`${year}-${month}-${date}`).subtract(week, 'day');
      append.push(before);
    }
    details.unshift(...append);
  }

  if (lastDay.day() < 6) {
    const append = [];
    for (let i = 0; i < 5; i++) {
      const year = lastDay.year();
      const month = lastDay.month() + 1;
      const date = lastDay.date();
      const after = dayjs(`${year}-${month}-${date}`).add(i + 1, 'day');
      append.push(after);
    }
    details.push(...append);
  }

  return details;
};
