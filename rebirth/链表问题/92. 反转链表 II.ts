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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head || !head.next || left === right) return head;

  let cur = head;
  let pre = null;
  let next = null;

  let lPre = null;
  let lNode = null;
  let rNode = null;

  let index = 1;

  while(cur && index < left) {
    next = cur.next;
    pre = cur;
    cur = next;
    index++;
  }
  lPre = pre;
  lNode = cur;

  while(cur && index <= right) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    index++;
  }

  rNode = pre;

  lNode.next = next;
  lPre && (lPre.next = rNode);

  return left === 1 ? rNode : head;
  
};