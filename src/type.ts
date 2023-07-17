type Tuple7<T> = [T, ...T[]] & { length: 7 };

export type dayInfo = {
  week: number;
  year: number;
  month: number;
  date: number;
};

export type daysInWeek = Tuple7<dayInfo>;

export type daysInMonth = Tuple7<daysInWeek>;
