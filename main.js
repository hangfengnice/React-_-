var sortString = function (s) {
  const num = Array(26).fill(0)

  for(let ch of s) {
    num[ch.codePointAt() - 97] ++
  }

  let ret = ''
  while(ret.length < s.length) {
    for(let i = 0; i < 26; i ++) {
      if (num[i]) {
        ret += String.fromCodePoint(i + 97)
        num[i] --
      }
    }
    for(let i = 25; i >= 0; i --) {
      if (num[i]) {
        ret += String.fromCodePoint(i + 97)
        num[i] --
      }
    }
  }
  return ret
}

let res = sortString("aaaabbbbcccc")

console.log(res);
