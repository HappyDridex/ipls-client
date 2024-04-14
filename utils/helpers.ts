export function findElementByKey(items: any[], key: string): any {
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (element.key === key) {
      return element;
    }
    if (element.items) {
      const found = findElementByKey(element.items, key);
      if (found) {
        return found;
      }
    }
  }
  return null;
}
