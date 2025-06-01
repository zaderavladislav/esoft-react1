import React, { useEffect, useState } from 'react';
import Greeting from './Greeting';
import Clock from './Clock';
import Header from './Header';

const NAMES = ['Вика', 'Андрей', 'Сергей', 'Мария', 'Олег', 'Екатерина', 'Дмитрий', 'Анна', 'Иван', 'Ольга'];

const getRandomName = () => {
  return NAMES[Math.floor(Math.random() * NAMES.length)];
}

const Container = () => {
  const [name, setName] = useState(() => getRandomName());

  useEffect(() => {
    const interval = setInterval(() => {
      setName(getRandomName());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <Greeting name={name} />
      <Clock />
    </div>
  );
};

export default Container; 