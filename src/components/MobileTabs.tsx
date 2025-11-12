import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
// import { ProgrammingLanguage, AppTheme } from '../types';
import { LANGUAGE_CONFIG } from '../utils/languages';
import { SAMPLE_CODES } from '../utils/samples';
import type { AppTheme, ProgrammingLanguage } from '../types';

interface MobileTabsProps {
  code: string;
  language: ProgrammingLanguage;
  output: string;
  executionTime: number;
  isRunning: boolean;
  onCodeChange: (code: string) => void;
  onClearOutput: () => void;
  theme: AppTheme;
}

type ActiveTab = 'editor' | 'output';

const MobileTabs: React.FC<MobileTabsProps> = ({
  code,
  language,
  output,
  executionTime,
  isRunning,
  onCodeChange,
  onClearOutput,
  theme
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('editor');

  const loadSampleCode = () => {
    onCodeChange(SAMPLE_CODES[language]);
  };

  // Convert our AppTheme to Monaco theme
  const monacoTheme = theme === 'dark' ? 'vs-dark' : 'vs';

  return (
    <div className="mobile-container">
      {/* Tab Navigation */}
      <div className="mobile-tabs">
        <button 
          className={`tab-button ${activeTab === 'editor' ? 'active' : ''}`}
          onClick={() => setActiveTab('editor')}
        >
          📝 Editor
        </button>
        <button 
          className={`tab-button ${activeTab === 'output' ? 'active' : ''}`}
          onClick={() => setActiveTab('output')}
        >
          📤 Output
          {executionTime > 0 && (
            <span className="tab-badge">⏱️</span>
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'editor' ? (
          <div className="mobile-editor">
            <div className="mobile-editor-actions">
              <button className="sample-button" onClick={loadSampleCode}>
                📝 Sample
              </button>
            </div>
            <div className="mobile-editor-container">
              <Editor
                height="100%"
                language={LANGUAGE_CONFIG[language].monacoLang}
                value={code}
                onChange={(value) => onCodeChange(value || '')}
                theme={monacoTheme}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  wordWrap: 'on',
                  automaticLayout: true,
                  scrollBeyondLastLine: false,
                  lineNumbers: 'on',
                  folding: true,
                }}
              />
            </div>
          </div>
        ) : (
          <div className="mobile-output">
            <div className="mobile-output-actions">
              {executionTime > 0 && (
                <span className="execution-time">
                  ⏱️ {executionTime.toFixed(2)}ms
                </span>
              )}
              <button className="clear-button" onClick={onClearOutput}>
                🗑️ Clear
              </button>
            </div>
            <div className="mobile-output-container">
              <pre className={`output-content ${isRunning ? 'running' : ''}`}>
                {output || (
                  <div className="empty-output">
                    <div className="empty-icon">👆</div>
                    <div className="empty-text">
                      <p>Switch to Editor tab</p>
                      <p>Write code and click Run</p>
                    </div>
                  </div>
                )}
              </pre>
              
              {isRunning && (
                <div className="running-overlay">
                  <div className="spinner"></div>
                  <p>Executing your code...</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileTabs;