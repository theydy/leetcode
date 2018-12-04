/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  var list = [];
  var curr = head;
  list.push(head);
  while(curr && curr.next) {
    curr = curr.next;
    list.push(curr);
  }
  k = k % list.length;
  for (var i = 0; i < k; i++) {
    var len = list.length;
    var last = list[len - 1];
    var lastSen = list[len - 2];
    last.next = list[0];
    lastSen.next = null;
    list.pop();
    list.unshift(last);
  }
  return list[0] || curr;
  // 这里如果不加 || curr ，输入[], 0 这一条测试有时候能过有时候不能过。
};
