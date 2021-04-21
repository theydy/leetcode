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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let res = new ListNode();
  let pre = res;
  res.next = head;

  while(head) {
    if (head.val === val) {
      pre.next = head.next;
    } else {
      pre = head;
    }
    head = head.next;
  }

  return res.next;
};