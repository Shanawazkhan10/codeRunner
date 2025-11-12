// import { LanguageConfig, ProgrammingLanguage } from '../types';

import type { LanguageConfig, ProgrammingLanguage } from "../types";

export const LANGUAGE_CONFIG: Record<ProgrammingLanguage, LanguageConfig> = {
  javascript: {
    value: 'javascript',
    label: 'JavaScript',
    extension: 'js',
    monacoLang: 'javascript',
    icon: '🟨'
  },
  typescript: {
    value: 'typescript',
    label: 'TypeScript',
    extension: 'ts',
    monacoLang: 'typescript',
    icon: '🔷'
  },
  python: {
    value: 'python',
    label: 'Python',
    extension: 'py',
    monacoLang: 'python',
    icon: '🐍'
  },
  java: {
    value: 'java',
    label: 'Java',
    extension: 'java',
    monacoLang: 'java',
    icon: '☕'
  },
  cpp: {
    value: 'cpp',
    label: 'C++',
    extension: 'cpp',
    monacoLang: 'cpp',
    icon: '⚡'
  }
};