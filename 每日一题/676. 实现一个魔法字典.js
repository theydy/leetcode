var MagicDictionary = function() {
  this.map = {}
};

/** 
* @param {string[]} dictionary
* @return {void}
*/
MagicDictionary.prototype.buildDict = function(dictionary) {
  dictionary.map(item => {
    if (!this.map[item.length]) {
      this.map[item.length] = [item]
    } else {
      this.map[item.length].push(item)
    }
  })
};

/** 
* @param {string} searchWord
* @return {boolean}
*/
MagicDictionary.prototype.search = function(searchWord) {
  const list = this.map[searchWord.length]
  
  if (!list) return false
  
  // 变一个字母能够匹配 map 中的字符，说明，两个字符 diff 不同的字符只有一个
  for(let i = 0; i < list.length; i++) {
    const item = list[i]
    let diff = 0

    for(let j = 0; j < item.length; j++) {
      if (item[j] !== searchWord[j]) {
        diff++
        if (diff > 1) {
          break
        }
      }
    }

    if (diff === 1) {
      return true
    }
  }

  return false
};

/**
* Your MagicDictionary object will be instantiated and called as such:
* var obj = new MagicDictionary()
* obj.buildDict(dictionary)
* var param_2 = obj.search(searchWord)
*/