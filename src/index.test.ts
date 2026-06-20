import { describe, it, expect } from 'vitest';
import { add, greet } from './index';

describe('Math functions', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('Greeting function', () => {
  it('should return a personalized greeting', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });
});
