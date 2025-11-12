import React from 'react';
import Editor from '@monaco-editor/react';
// import { ProgrammingLanguage, AppTheme } from '../types';
import { LANGUAGE_CONFIG } from '../utils/languages';
import { SAMPLE_CODES } from '../utils/samples';
import type { AppTheme, ProgrammingLanguage } from '../types';

interface EditorPanelProps {
  code: string;
  language: ProgrammingLanguage;
  onCodeChange: (code: string) => void;
  theme: AppTheme;
}

const EditorPanel: React.FC<EditorPanelProps> = ({
  code,
  language,
  onCodeChange,
  theme
}) => {
  const loadSampleCode = () => {
    onCodeChange(SAMPLE_CODES[language]);
  };

  // Convert our AppTheme to Monaco theme
  const monacoTheme = theme === 'dark' ? 'vs-dark' : 'vs';

  return (
    <div className="editor-panel">
      <div className="panel-header">
        <h3>
          {LANGUAGE_CONFIG[language].icon} Editor ({LANGUAGE_CONFIG[language].label})
        </h3>
        <div className="editor-actions">
          <button className="sample-button" onClick={loadSampleCode}>
            📝 Load Sample
          </button>
        </div>
      </div>

      <div className="editor-container">
        <Editor
          height="100%"
          language={LANGUAGE_CONFIG[language].monacoLang}
          value={code}
          onChange={(value) => onCodeChange(value || '')}
          theme={monacoTheme}
          options={{
            minimap: { enabled: true },
            fontSize: 14,
            wordWrap: 'on',
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 16 },
            lineNumbers: 'on',
            folding: true,
          }}
        />
      </div>
    </div>
  );
};

export default EditorPanel;