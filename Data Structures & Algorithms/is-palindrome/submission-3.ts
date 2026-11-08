class Solution {
    /**
     * Check if a character is alphanumeric
     * @param {char} char
     * return {boolean}
     */
    isAlphanumeric(char: string): boolean {
        return (
            (char >= "a" && char <= "z") || 
            (char >= "A" && char <= "Z") || 
            (char >= "0" && char <= "9")
        )
    }

    /**
     * Reverse string approach.
     * Clean the string and compare it with its reverse.
     * 
     * Time: O(n) - we go through the string a few times
     * Space: O(n) - creates a cleaned copy and reversed copy of the string
     * 
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let newStr = '';
        for (const c of s) {
            if (this.isAlphanumeric(c)) {
                newStr += c.toLowerCase();
            }
        }

        return newStr === newStr.split("").reverse().join("");
    }
}
