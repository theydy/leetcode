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
var mergeTwoLists = function(l1, l2) {
  let head = new ListNode();
  let curr = head;
  while (l1 || l2) {
    let v1 = l1 && l1.val;
    let v2 = l2 && l2.val;
    if (l1 && l2) {
      if (v1 < v2) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
    } else if (l1) {
      curr.next = l1;
      l1 = l1.next;
    } else if (l2){
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  return head.next;
};