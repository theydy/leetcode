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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;

  let index = 0;
  let res = new ListNode(null, head);
  let pre = res;

  while(head) {
    index++;
    if (index > n) {
      pre = pre.next;
    }
    head = head.next;
  }

  pre.next = pre.next.next;

  return res.next;
};