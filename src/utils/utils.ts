export const extractTokenFromSetCookie = (
  setCookieHeader: string
): string | null => {
  const cookieParts = setCookieHeader.split(';');
  for (const part of cookieParts) {
    const [name, value] = part.trim().split('=');
    if (name === 'token') {
      return value;
    }
  }
  return null;
};
export const getCookieValue = (name: string): string | null => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};

export const getOrdinalSuffix = (day: number) => {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const formatGroupDate = (date: Date) => {
  const currentDate = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  if (isSameDay(date, currentDate)) {
    return 'Today';
  } else if (isYesterday(date, currentDate)) {
    return 'Yesterday';
  } else {
    const ordinalSuffix = getOrdinalSuffix(day);
    return `${day}${ordinalSuffix} ${month} ${year}`;
  }
};

export const isSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const isYesterday = (date1: Date, date2: Date) => {
  const yesterday = new Date(date2);
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    date1.getDate() === yesterday.getDate() &&
    date1.getMonth() === yesterday.getMonth() &&
    date1.getFullYear() === yesterday.getFullYear()
  );
};
