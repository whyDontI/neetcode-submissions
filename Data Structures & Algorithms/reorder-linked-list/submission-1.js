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
    reverse (head) {
        // null -> 1 -> 2
        // null -> 2 -> 1
        let prev = null;
        let curr = head;

        while(curr !== null) {
            let tempNext = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tempNext;
        }
        return prev;
    }
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (head == null || head.next === null) {
            return head;
        }
        // 0 1 2 3 4 5 6 

        // 0 1 2 3
        // 6 5 4

        // 1. Find middle of the list
        let mid = null;
        let prev = null;
        let slowPointer = head;
        let fastPointer = head;
        while(fastPointer !== null && fastPointer.next !== null) {
            prev = slowPointer;
            fastPointer = fastPointer?.next?.next;
            slowPointer = slowPointer.next;
        }

        mid = slowPointer;
        // 2. Reverse the second list
        let reversedRightHalf = this.reverse(mid);

        // Cut the list from mid
        prev.next = null;

        // 3. Zip Merge both
        let mergedList = new ListNode(null);
        while(head !== null && reversedRightHalf !== null) {
            mergedList.next = head;
            mergedList = mergedList.next;
            head = head.next;

            mergedList.next = reversedRightHalf;
            mergedList = mergedList.next;
            reversedRightHalf = reversedRightHalf.next;
        }

        mergedList.next = head !== null ? head : reversedRightHalf;

        return mergedList.next;
    }
}
