class LRUCache {
  length: number;
  list: number[];
  map: Map<number, number>;
  
  constructor(capacity: number) {
    this.length = capacity;
    this.list = [];
    this.map = new Map<number, number>();
  }

  _update(key: number) {
    const index = this.list.findIndex(item => item === key);
    this.list.splice(index, 1);
    this.list.push(key);
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const res = this.map.get(key);
      this._update(key);

      return res;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this._update(key);
      this.map.set(key, value);
    } else {
      if (this.list.length >= this.length) {
        const target = this.list.shift();
        this.map.delete(target);
      }
      this.map.set(key, value);
      this.list.push(key);
    }
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/