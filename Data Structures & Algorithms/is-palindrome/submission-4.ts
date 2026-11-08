class Solution {
    /**
     * Check if a character is alphanumeric
     * @param {string} char
     * @return {boolean}
     */
    isAlphanumeric(char: string): boolean {
        return (
            (char >= 'a' && char <= 'z') || 
            (char >= 'A' && char <= 'Z') || 
            (char >= '0' && char <= '9')
        )
    }

    /**
     * Two pointers approach.
     * Move pointers from both ends toward the center,
     * skipping non-alphanumeric characters.
     * 
     * Time: O(n) - each character is visited at most once
     * Space: O(1) - two pointers are used
     * 
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0,
            right = s.length - 1;

        while (left < right) {
            // Skip non-alphanumeric characters from the left
            while (left < right && !this.isAlphanumeric(s[left])) {
                left++;
            }
            
            // Skip non-alphanumeric characters from the right
            while (left < right && !this.isAlphanumeric(s[right])) {
                right--;
            }

            // Compare the left and right characters (case-insensitive)
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            // Move both pointers inward
            left++;
            right--;
        }
        
        return true;
    }
}
