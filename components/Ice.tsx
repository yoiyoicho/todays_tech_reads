import React, { useMemo } from 'react';
import ChevronLeftIcon from './ChevronLeftIcon';
import ChevronRightIcon from './ChevronRightIcon';

type PropsType = {
  selectedDate: Date;
  setSelectedDate: (selectedDate: Date) => void;
  postCountByDate: Map<string, number>;
}

export default function Ice({ selectedDate, setSelectedDate, postCountByDate }: PropsType) {
  const selectedMonthPostCountByDate: Map<string, number> = useMemo(()=> {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const map = new Map<string, number>();

    for(let date = firstDay; date <= lastDay; date.setDate(date.getDate() + 1)){
      const formattedDate = date.toLocaleString('ja-JP', { year: "numeric", month: '2-digit', day: '2-digit' });
      const count = postCountByDate.get(formattedDate) || 0;
      map.set(formattedDate, count);
    }
    return map;
  },[selectedDate]);

  const clickDate = (date: string) => {
    const dateObj = new Date(date);
    setSelectedDate(dateObj);
  };

  const scrollDate = (day: number) => {
    const newDate = new Date();
    newDate.setDate(selectedDate.getDate() + day);
    setSelectedDate(newDate);
  }

  return(
    <div className="flex items-center h-4 justify-between">
      <div onClick={() => scrollDate(-1)}>
        <ChevronLeftIcon className="h-4 w-4 cursor-pointer hover:scale-125" />
      </div>
      {Array.from(selectedMonthPostCountByDate).map(([date, count]) => {
        // countの値に応じて背景色の透明度を決定
        const opacity = count > 2 ? 1 : count > 0 ? 0.5 : 0.1;
        return(
          <div
            onClick={() => clickDate(date)}
            key={date}
            style={{
              backgroundColor: `rgba(255, 255, 255, ${opacity})`,
            }}
            className="w-3 h-3 rounded shadoow-sm transition-transform transform hover:scale-110 cursor-pointer"
          />
        )
      })}
      <div onClick={() => scrollDate(1)}>
        <ChevronRightIcon className="h-4 w-4 cursor-pointer hover:scale-125" />
      </div>
    </div>
  )
}
