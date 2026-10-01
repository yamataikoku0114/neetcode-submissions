class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for (let i = 0; nums.length > 0; i++) {
            const [target] = nums.splice(0, 1);
            const isDuplicate = nums.includes(target);

            if (isDuplicate) {
                return true;
            }
        }

        return false;
    }
}
