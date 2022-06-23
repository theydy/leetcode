/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 链表存储的两个数字相加

  // 遍历两个链表的每一位相加，记录进位，生成新链表。
  const res = new ListNode()
  let head = res
  let flag = 0

  while(l1 || l2) {
    head.next = new ListNode(0)
    head = head.next

    if (l1 && l2) {
      const val = l1.val + l2.val + flag
      head.val = val % 10
      flag = Math.floor(val / 10)
      l1 = l1.next
      l2 = l2.next
    } else {
      l1 = l1 || l2

      const val = l1.val + flag
      head.val = val % 10
      flag = Math.floor(val / 10)
      // 这里是为了统一剩余的指针使用 l1，所以如果是 l2 剩余的话需要指空
      l1 = l1.next
      l2 = null
    }
  }

  if (flag) {
    head.next = new ListNode(1)
  }

  return res.next
};