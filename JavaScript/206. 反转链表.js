/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head;
  let res = null;
  if (head && head.next) {
    head = head.next;
    res = reverseList(head);
    head.next = cur;
    cur.next = null;
  } else {
    return cur;
  }
  return res;
};