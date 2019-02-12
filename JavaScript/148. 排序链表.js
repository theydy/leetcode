const merge = function (l, r) {
  let head = new ListNode();
  let current = head;

  while (l && r) {
    if (l.val < r.val) {
      current.next = l;
      l = l.next;
      current = current.next;
    } else {
      current.next = r;
      r = r.next;
      current = current.next;
    }
  }
  current.next = l || r;
  return head.next;
}

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
var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let fast = head;
  let slow = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  const mid = slow.next;
  slow.next = null;

  return merge(sortList(head), sortList(mid));
};