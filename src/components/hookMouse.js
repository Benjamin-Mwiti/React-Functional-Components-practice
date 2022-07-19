import React, { useState, useEffect } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logPosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
    console.log(`Mouse event X - ${x}, Y - ${y}`);
  };

  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logPosition);

    return () => {
      console.log('Unmounting HookMouse component');
      window.removeEventListener('mousemove', logPosition);
    };
  }, []);

  return (
    <div>
      {console.log(`Render mouse event X - ${x}, Y - ${y}`)}
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
