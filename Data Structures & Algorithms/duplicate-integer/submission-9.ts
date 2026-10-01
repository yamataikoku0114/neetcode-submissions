class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const sortedNums = nums.sort((a, b) => a - b);
        for (let i = 0; i < sortedNums.length; i++) {
            if (sortedNums[i] === sortedNums[i+1]) {
                return true;
            }
        }

        return false;
    }
}
