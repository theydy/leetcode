var mergeTwoLists = function(l1, l2) {
  let head = new ListNode();
  let curr = head;

  let pushNode = function (curr, node) {
    curr.next = node;
    return node.next;
  };
  while (l1 || l2) {
    let v1 = l1 && l1.val;
    let v2 = l2 && l2.val;
    if (l1 && l2) {
      v1 < v2 ? (l1 = pushNode(curr, l1))
              : (l2 = pushNode(curr, l2));
    } else{
      pushNode(curr, l1 ? l1 : l2);
      break;
    }
    curr = curr.next;
  }
  return head.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    while(lists.length > 1) {
      let l1 = lists.pop();
      let l2 = lists.pop();
      lists.push(mergeTwoLists(l1, l2));
    }
    return lists[0] ? lists[0] : null;
};