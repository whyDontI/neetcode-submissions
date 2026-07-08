class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        // L -> R max
        const leftMax = [];
        let max = 0;
        for (let i = 0; i < heights.length; i++) {
            if (heights[i] > max) {
                max = heights[i]
            }

            leftMax[i] = max;
        }

        const rightMax = [];
        max = 0;
        for (let i = heights.length - 1; i >= 0; i--) {
            if (heights[i] > max) {
                max = heights[i]
            }

            rightMax[i] = max;
        }

        let area = []
        for (let i = 0; i < heights.length; i++) {
            area[i] = Math.min(leftMax[i], rightMax[i]) - heights[i];
        }

        return area.reduce((a, c) => a + c, 0);
    }
}
