// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head == null) return null;
        let map = new Map();

        let curr = head;
        let newHead = new Node(head.val, null, null);
        let newCurr = newHead;

        while(curr !== null) {
            map.set(curr, newCurr);
            curr = curr.next;
            newCurr.next = curr ? new Node(curr.val, null, null) : null;
            newCurr = newCurr.next;
        }

        curr = head;
        while(curr !== null) {
            let newListNode = map.get(curr);
            newListNode.random = map.get(curr.random);
            curr = curr.next;
        }

        return newHead;
    }
}
