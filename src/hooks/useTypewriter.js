import { useState, useEffect } from 'react';

export function useTypewriter(text, delay = 50, startDelay = 0, shouldStart = true) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let timeout;
    
    if (currentIndex === 0 && startDelay > 0) {
      timeout = setTimeout(() => {
        setCurrentText(text[0] || '');
        setCurrentIndex(1);
      }, startDelay);
      return () => clearTimeout(timeout);
    }

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, startDelay, shouldStart]);

  return currentText;
}
