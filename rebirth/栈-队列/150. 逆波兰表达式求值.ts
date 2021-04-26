type OperatorChars = '+' | '-' | '*' | '/';

function calculate(num1: string, num2: string, operator: OperatorChars): string {
  const n1 = parseInt(num1);
  const n2 = parseInt(num2);
  const map = {
    '+': () => n1 + n2,
    '-': () => n1 - n2,
    '*': () => n1 * n2,
    '/': () => n1 / n2,
  }

  return String((map[operator])());
}

function isOperatorChar(char: string): char is OperatorChars {
  const operators = ['+', '-', '*', '/'];
  return operators.includes(char);
}

function evalRPN(tokens: string[]): number {
  const stack: string[] = [];
  
  for(let i = 0; i < tokens.length; i++) {
    const char = tokens[i];
    
    if (!isOperatorChar(char)) {
      stack.push(char);
    } else {
      const n2 = stack.pop();
      const n1 = stack.pop();
      stack.push(calculate(n1, n2, char));
    }
  }

  return parseInt(stack[0]);
};