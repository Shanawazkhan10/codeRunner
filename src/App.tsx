import React, { useState } from 'react';
import Header from './components/Header';
import EditorPanel from './components/EditorPanel';
import OutputPanel from './components/OutputPanel';
// import MobileTabs from './components/MobileTabs';
import { useCompiler } from './hooks/useCompiler';
import { useTheme } from './hooks/useTheme';
// import { useMobile } from './hooks/useMobile';
// import { ProgrammingLanguage, Theme } from './types';
import './styles/globals.css';
import type { ProgrammingLanguage } from './types';
import MobileTabs from './components/MobileTabs';
import { useMobile } from './hooks/useMobile';

const DEFAULT_CODE = `// Welcome to CodeRunner 🚀
// Write your code here and click Run!

function greet(name) {
  return "Hello, " + name + "! 👋";
}

console.log(greet("Developer"));
console.log("Start coding and see magic happen! ✨");

// Try the sample codes from the dropdown!`;

const App: React.FC = () => {
  const [code, setCode] = useState<string>(DEFAULT_CODE);
  const [language, setLanguage] = useState<ProgrammingLanguage>('javascript');
  const [theme, toggleTheme] = useTheme();
  const isMobile = useMobile();
  const { output, isRunning, executionTime, runCode, clearOutput } = useCompiler();

  const handleRunCode = () => {
    runCode(code, language);
  };

  // Mobile view with tabs
  if (isMobile) {
    return (
      <div className="app" data-theme={theme}>
        <Header 
          theme={theme}
          toggleTheme={toggleTheme}
          language={language}
          onLanguageChange={setLanguage}
          onRunCode={handleRunCode}
          isRunning={isRunning}
          isMobile={isMobile}
        />
        
        <MobileTabs
          code={code}
          language={language}
          output={output}
          executionTime={executionTime}
          isRunning={isRunning}
          onCodeChange={setCode}
          onClearOutput={clearOutput}
          theme={theme}
        />
      </div>
    );
  }

  // Desktop view with 70-30 split
  return (
    <div className="app" data-theme={theme}>
      <Header 
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        onLanguageChange={setLanguage}
        onRunCode={handleRunCode}
        isRunning={isRunning}
        isMobile={isMobile}
      />
      
      <div className="main-content">
        <div className="panels-container">
          <EditorPanel
            code={code}
            language={language}
            onCodeChange={setCode}
            theme={theme}
          />
          
          <OutputPanel
            output={output}
            executionTime={executionTime}
            isRunning={isRunning}
            onClear={clearOutput}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default App;