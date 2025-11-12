// import { CompilerResult, ProgrammingLanguage } from '../types';

import type { CompilerResult, ProgrammingLanguage } from "../types";

export class CodeCompiler {
  static async compile(code: string, language: ProgrammingLanguage): Promise<CompilerResult> {
    const startTime = performance.now();
    
    try {
      switch (language) {
        case 'javascript':
        case 'typescript':
          return await this.compileJavaScript(code);
        
        case 'python':
          return await this.compilePython(code);
        
        default:
          return {
            output: '',
            error: `🚧 ${language} support coming soon! Use JavaScript for now.`,
            executionTime: performance.now() - startTime
          };
      }
    } catch (error) {
      return {
        output: '',
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        executionTime: performance.now() - startTime
      };
    }
  }

  private static async compileJavaScript(code: string): Promise<CompilerResult> {
    return new Promise((resolve) => {
      const startTime = performance.now();
      let consoleOutput = '';

      // Save original console methods
      const originalConsole = {
        log: console.log,
        error: console.error,
        warn: console.warn,
        info: console.info
      };

      // Override console to capture output
      ['log', 'error', 'warn', 'info'].forEach(method => {
        (console as any)[method] = (...args: any[]) => {
          consoleOutput += args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' ') + '\n';
          (originalConsole as any)[method](...args);
        };
      });

      try {
        // Safe execution with async support
        const wrappedCode = `
          (async function() {
            try {
              ${code}
            } catch (e) {
              console.error('Runtime Error:', e.message);
            }
          })()
        `;

        eval(wrappedCode);

        // Restore console after execution
        setTimeout(() => {
          Object.assign(console, originalConsole);
          resolve({
            output: consoleOutput.trim(),
            error: '',
            executionTime: performance.now() - startTime
          });
        }, 100);

      } catch (error) {
        Object.assign(console, originalConsole);
        resolve({
          output: '',
          error: `Syntax Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          executionTime: performance.now() - startTime
        });
      }
    });
  }

private static async compilePython(code: string): Promise<CompilerResult> {
  // Mock Python execution
  void code; // mark as intentionally unused

  return {
    output: '🐍 Python support coming soon!\nTry JavaScript for now.',
    error: '',
    executionTime: performance.now() - performance.now(),
  };
}

}