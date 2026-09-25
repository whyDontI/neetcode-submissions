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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let newHead = new ListNode(null, null);
        let newList = newHead;
        while(l1 !== null && l2 !== null) {
            let sum = carry + l1.val + l2.val;
            let newVal = sum % 10;
            carry = Math.floor(sum / 10);
            newList.next = new ListNode(newVal, null);
            newList = newList.next;
            l1 = l1.next;
            l2 = l2.next;
        }

        let remList = l1 !== null ? l1 : l2;

        console.log(l1, l2);

        while(remList !== null) {
            let sum = carry + remList.val
            let newVal = sum % 10;
            carry = Math.floor(sum / 10);
            newList.next = new ListNode(newVal, null)
            newList = newList.next;
            remList = remList.next;
        }

        if (carry) {
            newList.next = new ListNode(carry, null);
        }

        return newHead.next;
    }
}
