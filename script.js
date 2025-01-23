function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = new Map();

    // Count the frequency of each character
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first character with a frequency of 1
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    // If no non-repeated character is found, return a message
    return "No non-repeated character found";
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
