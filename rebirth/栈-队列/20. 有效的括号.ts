function isValid(s: string): boolean {
  const list = s.split('');
  const stack: string[] = [];
  const leftChars = ['(', '{', '['];

  for(let i = 0; i < list.length; i++) {
    const char = list[i];
    if (leftChars.includes(char)) {
      stack.push(char);
    } else {
      const target = stack[stack.length - 1];
      
      if (
        (char === ')' && target === '(') ||
        (char === '}' && target === '{') ||
        (char === ']' && target === '[')
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !(stack.length > 0);
};