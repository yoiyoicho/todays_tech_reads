import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseDateHash(dateHash: string | undefined) {
  const today = new Date(new Date().setHours(0, 0, 0, 0));

  // dateHashが未定義または形式が不正な場合、今日の0時のDateオブジェクトを返す
  if (!dateHash || !/^\d{8}$/.test(dateHash)) {
    return today;
  }

  const year = parseInt(dateHash.substring(0, 4), 10);
  const month = parseInt(dateHash.substring(4, 6), 10) - 1; // 0から始まるため-1する
  const day = parseInt(dateHash.substring(6, 8), 10);

  const date = new Date(year, month, day);

  // Dateオブジェクトが無効な日付を表す場合、または未来の日付を表す場合、今日の0時のDateオブジェクトを返す
  if (isNaN(date.getTime()) || date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day || date > today) {
    return today;
  }

  return date;
}

export function areDatesEqual(date1: Date, date2: Date) {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  return year1 === year2 && month1 === month2 && day1 === day2;
}

export function formatDate(date: Date) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 0から始まるため+1する
  const day = date.getDate();
  const dayOfWeek = days[date.getDay()];

  return `${year}/${month}/${day} ${dayOfWeek}.`;
}
