class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        while (nums.length > 0) {
            const firstNum = nums.shift();
            if (firstNum === undefined) return false;

            const isDuplicate = nums.includes(firstNum);
            if (isDuplicate) return true;
        }

        return false;
    }
}
