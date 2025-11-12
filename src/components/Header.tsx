import React from 'react';
// import { ProgrammingLanguage, Theme } from '../types';
import { LANGUAGE_CONFIG } from '../utils/languages';
import type { ProgrammingLanguage, Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  language: ProgrammingLanguage;
  onLanguageChange: (lang: ProgrammingLanguage) => void;
  onRunCode: () => void;
  isRunning: boolean;
  isMobile?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  theme,
  toggleTheme,
  language,
  onLanguageChange,
  onRunCode,
  isRunning,
  isMobile = false
}) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <h1>{isMobile ? 'CR' : 'CodeRunner'}</h1>
        </div>
        
        <select 
          className="language-select"
          value={language}
          onChange={(e) => onLanguageChange(e.target.value as ProgrammingLanguage)}
        >
          {Object.values(LANGUAGE_CONFIG).map((config) => (
            <option key={config.value} value={config.value}>
              {config.icon} {isMobile ? config.label.substring(0, 3) : config.label}
            </option>
          ))}
        </select>
      </div>

      <div className="header-right">
        <button 
          className={`run-button ${isRunning ? 'running' : ''}`}
          onClick={onRunCode}
          disabled={isRunning}
        >
          {isRunning ? (
            <>
              <span className="spinner"></span>
              {isMobile ? '...' : 'Running...'}
            </>
          ) : (
            <>
              <span>▶</span>
              {isMobile ? 'Run' : 'Run Code'}
            </>
          )}
        </button>

        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;