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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const res = new ListNode();
  res.next = head;

  let pre = res;
  let target: ListNode[] = [];

  while(head) {
    target.push(head);

    if (target.length === 2) {
      target[0].next = head.next;
      head.next = target[0];
      pre.next = head;

      pre = target[0];
      head = target[0].next;
      target = [];
    } else {
      head = head.next;
    }
  }


  return res.next;
};
