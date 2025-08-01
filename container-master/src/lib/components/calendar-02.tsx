import React from 'react';

import { Calendar } from '@lib/components/ui/calendar.tsx';

export default function Calendar02() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));

  return (
    <Calendar
      mode='single'
      defaultMonth={date}
      numberOfMonths={2}
      selected={date}
      onSelect={setDate}
      className='rounded-lg border shadow-sm'
    />
  );
}
