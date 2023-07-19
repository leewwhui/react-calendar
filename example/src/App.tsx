import dayjs from 'dayjs';
import { Calendar } from '../../src/index';
import { useRef, useState } from 'react';
import { CalenderRef } from '../../src/calendar/Calendar';

function App() {
  const [days, setDays] = useState<Date[]>([]);
  const ref = useRef<CalenderRef>(null);
  const handleDayClick = (day: dayjs.Dayjs) => {
    setDays([day.toDate()]);
  };

  const handleNextMonth = () => {
    ref.current?.gotoDate(new Date('1997-12-13'))
  };

  return (
    <div>
      <Calendar selected={days} onDayClick={handleDayClick} ref={ref} />
      <button onClick={handleNextMonth}>next month</button>
    </div>
  );
}

export default App;
