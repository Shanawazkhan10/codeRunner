import React from 'react';
import Editor, { type Theme } from '@monaco-editor/react';
// import { ProgrammingLanguage, Theme } from '../types';
// import { LANGUAGE_CONFIG } from '../utils/languages';
import { SAMPLE_CODES } from '../utils/samples';
import type { ProgrammingLanguage } from '../types';
import { LANGUAGE_CONFIG } from '../utils/languages';

interface EditorPanelProps {
  code: string;
  language: ProgrammingLanguage;
  onCodeChange: (code: string) => void;
  theme: Theme;
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
          theme={theme === 'dark' ? 'vs-dark' : 'vs'}
          options={{
            minimap: { enabled: true },
            fontSize: 14,
            wordWrap: 'on',
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 16 },
            lineNumbers: 'on',
            folding: true,
            suggestOnTriggerCharacters: true,
            parameterHints: { enabled: true }
          }}
        />
      </div>
    </div>
  );
};

export default EditorPanel;