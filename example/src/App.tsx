import dayjs from 'dayjs';
import { Calendar } from '../../src/index';
import { useRef, useState } from 'react';
import { CalenderRef } from '../../src/calendar/Calendar';

function App() {
  const [days, setDays] = useState<Date[]>([new Date()]);
  const ref = useRef<CalenderRef>(null);
  const handleDayClick = (day: dayjs.Dayjs) => {
    setDays([day.toDate()]);
  };

  return (
    <div>
      <Calendar selected={days} onDayClick={handleDayClick} ref={ref} />
    </div>
  );
}

export default App;
