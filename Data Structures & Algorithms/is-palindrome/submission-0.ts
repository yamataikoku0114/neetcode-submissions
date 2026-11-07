class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // remove all whitespace
        const removedWhiteSpaceString = s.replaceAll(" ", "");

        // remove all non-alphanumeric
        const removedNonAlphanumericString = removedWhiteSpaceString.replace(/[^a-zA-Z0-9]/g, "")

        // convert all characters to lowercase
        const convertedLowerCaseString = removedNonAlphanumericString.toLocaleLowerCase()

        // reverse the cleaned string
        const reversedString = [...convertedLowerCaseString].reverse().join("")

        // compare the cleaned string with the reversed string
        return convertedLowerCaseString === reversedString;
    }
}
