import React, { useEffect, useRef, useState } from 'react';

const Greeting = ({ name }) => {
  const prevName = useRef(name);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (prevName.current !== name) {
      setChanged(true);
      prevName.current = name;
    } else {
      setChanged(false);
    }
  }, [name]);

  return (
    <div>
      {changed ? (
        <p>Привет, у тебя поменялось имя, теперь ты {name}!</p>
      ) : (
        <p>Привет, {name}!</p>
      )}
    </div>
  );
};

export default Greeting; 