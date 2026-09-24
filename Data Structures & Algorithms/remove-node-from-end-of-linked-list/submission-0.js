/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let count = n;
        let back = new ListNode(null, head);
        let front = head;

        while (count > 0) {
            front = front.next;
            count--;
        }

        while(front !== null) {
            front = front.next;
            back = back.next;
        }

        if (back.next === head) {
            return back.next.next
        }
        back.next = back.next.next
        return head;
    }
}
