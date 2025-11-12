export type ProgrammingLanguage = 
  | 'javascript' 
  | 'typescript' 
  | 'python' 
  | 'java' 
  | 'cpp';

// Rename to avoid conflict with Monaco's Theme
export type AppTheme = 'dark' | 'light';

export interface CompilerResult {
  output: string;
  error: string;
  executionTime: number;
}

export interface LanguageConfig {
  value: ProgrammingLanguage;
  label: string;
  extension: string;
  monacoLang: string;
  icon: string;
}