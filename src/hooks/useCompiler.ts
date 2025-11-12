import { useState } from 'react';
// import { ProgrammingLanguage, CompilerResult } from '../types';
import { CodeCompiler } from '../utils/compiler';
import type { CompilerResult, ProgrammingLanguage } from '../types';

export const useCompiler = () => {
  const [output, setOutput] = useState<string>('// Output will appear here\n');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [executionTime, setExecutionTime] = useState<number>(0);

  const runCode = async (code: string, language: ProgrammingLanguage) => {
    setIsRunning(true);
    setOutput('🔄 Running your code...\n');

    try {
      const startTime = performance.now();
      const result: CompilerResult = await CodeCompiler.compile(code, language);
      const endTime = performance.now();

      setExecutionTime(result.executionTime || endTime - startTime);
      
      if (result.error) {
        setOutput(`❌ Error: ${result.error}`);
      } else {
        setOutput(result.output || '✅ Code executed successfully (no output)');
      }
    } catch (error) {
      setOutput(`❌ Execution failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput('');
    setExecutionTime(0);
  };

  return {
    output,
    isRunning,
    executionTime,
    runCode,
    clearOutput
  };
};