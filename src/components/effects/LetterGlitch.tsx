import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface LetterGlitchProps {
  children: string;
  className?: string;
  glitchChars?: string;
  duration?: number;
  trigger?: boolean;
}

export const LetterGlitch = ({
  children,
  className = '',
  glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?',
  duration = 50,
  trigger = true
}: LetterGlitchProps) => {
  const [displayText, setDisplayText] = useState(children);

  const glitch = useCallback(() => {
    if (!trigger) return;
    const originalText = children;
    let iteration = 0;
    const maxIterations = originalText.length * 3;

    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (index < iteration / 3) {
              return originalText[index];
            }
            if (char === ' ') return ' ';
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );

      iteration++;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(originalText);
      }
    }, duration);

    return () => clearInterval(interval);
  }, [children, duration, glitchChars, trigger]);

  useEffect(() => {
    glitch();
  }, [trigger]);

  return (
    <motion.span
      className={`font-mono ${className}`}
      style={{
        fontFamily: 'inherit',
        display: 'inline-block',
      }}
    >
      {displayText}
    </motion.span>
  );
};
