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
var detectCycle = function(head) {
  let fast, slow, start;
  if (!head || !head.next) {
    return null;
  }
  slow = head.next;
  fast = head.next.next;
  while (fast && slow && fast !== slow) {
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }

  if (!fast || !slow) {
    return null;
  }

  start = head;
  while (start !== slow) {
    start = start.next;
    slow = slow.next;
  }
  return start;
};