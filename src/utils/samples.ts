// import { ProgrammingLanguage } from '../types';

import type { ProgrammingLanguage } from "../types";

export const SAMPLE_CODES: Record<ProgrammingLanguage, string> = {
  javascript: `// Fibonacci Series
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("🌟 Fibonacci Sequence:");
for (let i = 0; i < 10; i++) {
  console.log(\`fib(\${i}) = \${fibonacci(i)}\`);
}

// Array Magic
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log("\\n🔢 Numbers:", numbers);
console.log("⬛ Squares:", squares);

// Object Operations
const user = { name: "Coder", level: "Beginner", xp: 100 };
console.log("\\n👤 User Profile:", user);`,

  typescript: `// TypeScript Example
interface User {
  name: string;
  age: number;
  email: string;
}

const users: User[] = [
  { name: "Alice", age: 25, email: "alice@code.com" },
  { name: "Bob", age: 30, email: "bob@dev.com" }
];

function greetUser(user: User): string {
  return \`Hello \${user.name}! You are \${user.age} years old.\`;
}

console.log("👋 TypeScript Greetings:");
users.forEach(user => {
  console.log(greetUser(user));
});

// Generic Function
function identity<T>(arg: T): T {
  return arg;
}

console.log("\\n🔄 Generic Example:", identity<string>("TypeScript Rocks!"));`,

  python: `# Python-style example (runs as JS)
print("🐍 Welcome to Python Mode!")
print("Note: Actual Python execution coming soon!")

# This runs as JavaScript for now
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print("First 10 Fibonacci numbers:")
for i in range(10):
    print(f"fib({i}) = {fibonacci(i)}")`,

  java: `// Java-style example
System.out.println("☕ Java Mode - Coming Soon!");
System.out.println("For now, enjoy JavaScript!");

// This runs as JavaScript
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log("2 + 3 = " + Calculator.add(2, 3));`,

  cpp: `// C++ Style Example
#include <iostream>
using namespace std;

cout << "🚀 C++ Support Coming Soon!" << endl;
cout << "Currently running as JavaScript" << endl;

// JavaScript implementation
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log("5! = " + factorial(5));`
};