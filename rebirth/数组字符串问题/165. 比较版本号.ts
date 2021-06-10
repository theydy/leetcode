function getMinList(a: string[], b: string[]): string[] {
  return a.length > b.length ? b : a;
}

function getMaxLength(a: string[], b: string[]): number {
  return a.length > b.length ? a.length : b.length;
}

function compareVersion(version1: string, version2: string): number {
  const listA = version1.split('.');
  const listB = version2.split('.');

  const target = getMinList(listA, listB);
  const length = getMaxLength(listA, listB);

  if (length > target.length) {
    const list = new Array(length - target.length).fill('0');

    target.push(...list);
  }

  for(let i = 0; i < listA.length; i++) {
    if (parseInt(listA[i]) < parseInt(listB[i])){
      return -1;
    } else if (parseInt(listA[i]) > parseInt(listB[i])) {
      return 1;
    }
  }

  return 0;
};