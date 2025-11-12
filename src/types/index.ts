export type ProgrammingLanguage = 
  | 'javascript' 
  | 'typescript' 
  | 'python' 
  | 'java' 
  | 'cpp';

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

export type Theme = 'dark' | 'light';