class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // remove all non-alphanumeric
        const removedNonAlphanumericString = s.replace(/[^a-zA-Z0-9]/g, "")

        // convert all characters to lowercase
        const convertedLowerCaseString = removedNonAlphanumericString.toLowerCase()

        // reverse the cleaned string
        const reversedString = [...convertedLowerCaseString].reverse().join("")

        // compare the cleaned string with the reversed string
        return convertedLowerCaseString === reversedString;
    }
}
