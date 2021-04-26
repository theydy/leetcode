function simplifyPath(path: string): string {
  const list = path.split('/');
  const stack: string[] = [];

  for(let i = 0; i < list.length; i++) {
    const val = list[i];

    if (!val || val === '.') {
      continue;
    }

    if (val === '..') {
      stack.length && stack.pop();
    } else {
      stack.push('/' + val);
    }

  }

  return stack.length ? stack.join('') : '/';
};