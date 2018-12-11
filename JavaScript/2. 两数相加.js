/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var up1 = 0;
  var bitRes = 0;
  var head = new ListNode();
  var curr = head;
  while (l1 || l2) {
    var v1 = (l1 && l1.val) || 0;
    var v2 = (l2 && l2.val) || 0;
    bitRes = v1 + v2 + up1;
    if (bitRes >= 10) {
      up1 = parseInt(bitRes / 10);
    } else {
      up1 = 0;
    }
    curr.next = new ListNode(bitRes % 10);
    curr = curr.next;
    l1 = (l1 && l1.next) || null;
    l2 = (l2 && l2.next) || null;
  }
  if (up1) {
    curr.next = new ListNode(up1);
  }
  return head.next;
};
