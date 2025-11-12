import { useState, useEffect } from 'react';
import type { AppTheme } from '../types';
// import { AppTheme } from '../types';

export const useTheme = (): [AppTheme, () => void] => {
  const [theme, setTheme] = useState<AppTheme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'dark' || saved === 'light') ? saved : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return [theme, toggleTheme];
};