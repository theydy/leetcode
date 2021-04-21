/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let curr = head;
  let next = null;
  let pre = null;

  while(curr) {
    next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }

  return pre;
};