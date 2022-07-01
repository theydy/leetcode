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
  // 相交后，从相交节点开始，后面部分两条链表完全一样
  // 所以长链表先走到长度和短链表相同后，两条链表以前往前比较节点是否相同

  let lenA = 0
  let lenB = 0
  let head

  head = headA
  while(head) {
    lenA++
    head = head.next
  }

  head = headB
  while(head) {
    lenB++
    head = head.next
  }

  head = lenA > lenB ? headA : headB
  headA = lenA > lenB ? headB : headA

  for(let i = 0; i < Math.abs(lenA - lenB); i++) {
    head = head.next
  }

  while(head && headA) {
    if (head === headA){
      return head
    } else {
      head = head.next
      headA = headA.next
    }
  }
  return null
};