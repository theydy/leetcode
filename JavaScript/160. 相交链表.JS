/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let last = headB;
  while(last.next !== null) {
    last = last.next;
  }
  last.next = headB;
  
  let fast = headA;
  let slow = headA;
  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = headA;
      while(slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      last.next = null;
      return fast;
    }
  }
  last.next = null;
  return null;
};