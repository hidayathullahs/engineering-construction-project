import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default', 'view', 'explore', 'drag'
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run if not touch device
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Global listener for interactive data attributes
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        setCursorState(type);
        if (type === 'view') setCursorText('VIEW');
        else if (type === 'explore') setCursorText('EXPLORE');
        else if (type === 'drag') setCursorText('SCRUB');
        else setCursorText('');
      } else {
        const link = e.target.closest('a, button, input, select, textarea');
        if (link) {
          setCursorState('hover');
          setCursorText('');
        } else {
          setCursorState('default');
          setCursorText('');
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  let cursorClasses = 'custom-cursor';
  if (cursorState === 'view') cursorClasses += ' view';
  else if (cursorState === 'explore' || cursorState === 'drag') cursorClasses += ' explore';
  else cursorClasses += ' default';

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: cursorState === 'hover' ? 'translate(-50%, -50%) scale(1.6)' : 'translate(-50%, -50%)'
      }}
    >
      {cursorText && <span>{cursorText}</span>}
    </div>
  );
}
