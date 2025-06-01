import React, { useEffect, useState } from 'react';

const formatTime = (date) => {
  return date.toLocaleTimeString('ru-RU');
};

const formatDate = (date) => {
  return date.toLocaleDateString('ru-RU');
};

const Clock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = now.getMinutes();
  const isDivisibleBy5 = minutes % 5 === 0;

  return (
    <div>
      <div>Текущее время: {formatTime(now)}</div>
      <div>Дата: {formatDate(now)}</div>
      {isDivisibleBy5 && <div>Время делится на 5</div>}
    </div>
  );
};

export default Clock; 