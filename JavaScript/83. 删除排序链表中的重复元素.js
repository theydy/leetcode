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
var deleteDuplicates = function(head) {
    let nodeMap = {};
    let curr = head;
    let pre = head;
    while(curr) {
        if (nodeMap[curr.val]) {
            pre.next = curr.next;
        } else {
            nodeMap[curr.val] = 1;
            pre = curr;
        }
        curr = curr.next;
    }
    return head;
};
