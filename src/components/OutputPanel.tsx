import React from 'react';
import type { AppTheme } from '../types';
// import { AppTheme } from '../types';

interface OutputPanelProps {
  output: string;
  executionTime: number;
  isRunning: boolean;
  onClear: () => void;
  theme: AppTheme;
}

const OutputPanel: React.FC<OutputPanelProps> = ({
  output,
  executionTime,
  isRunning,
  onClear,
  theme
}) => {
  return (
    <div className="output-panel">
      <div className="panel-header">
        <h3>📤 Output</h3>
        <div className="output-actions">
          {executionTime > 0 && (
            <span className="execution-time">
              ⏱️ {executionTime.toFixed(2)}ms
            </span>
          )}
          <button className="clear-button" onClick={onClear}>
            🗑️ Clear
          </button>
        </div>
      </div>

      <div className="output-container">
        <pre className={`output-content ${isRunning ? 'running' : ''}`}>
          {output || (
            <div className="empty-output">
              <div className="empty-icon">👆</div>
              <div className="empty-text">
                <p>Write your code and click "Run"</p>
                <p>Output will appear here</p>
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
  );
};

export default OutputPanel;