import React, { useMemo } from 'react';

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

    for(let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)){
      const formattedDate = day.toISOString().split('T')[0];
      const count = postCountByDate.get(formattedDate) || 0;
      map.set(formattedDate, count);
    }
    return map;
  },[selectedDate]);

  return(
    <div className="flex items-center space-x-1 h-4 justify-between">
      {Array.from(selectedMonthPostCountByDate).map(([date, count]) => {
        // countの値に応じて背景色の透明度を決定
        let opacity = 0.1;
        if (count > 2) {
          opacity = 1;
        } else if (count > 0) {
          opacity = 0.5;
        }
        return(
          <div
            key={date}
            style={{
              backgroundColor: `rgba(255, 255, 255, ${opacity})`,
            }}
            className="w-3 h-3 rounded hover:bg-green-500 shadoow-sm transition-color duration-300"
          />
        )
    })}
    </div>
  )
}
