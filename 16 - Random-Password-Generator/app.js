// variables
// password will be generated from these sets of characters
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "!@#$%^&*_+/"

// DOM Elements Selector
const passBox = document.getElementById("result")         // Box where the password will be displayed
const totalChar = document.getElementById("length")       // Input where user sets the password length
const upperInput = document.getElementById("uppercase")   // Checkbox to include uppercase letters
const lowerInput = document.getElementById("lowercase")   // Checkbox to include lowercase letters
const numberInput = document.getElementById("numbers")    // Checkbox to include numbers
const symbolInput = document.getElementById("symbols")    // Checkbox to include symbols


// Function to get a single random character from any given character set
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
    // Math.random() gives a decimal between 0 and 1
    // Multiply it with dataSet length to get a random index
    // Math.floor() rounds it down to a whole number
    // Return the character at that random index
}

const generatePassword = (password = "") => {
    // Add one character from each selected category

    if (upperInput.checked) {
        password += getRandomData(upperSet)     // If uppercase checkbox is checked, add random uppercase letter
    }

    if (lowerInput.checked) {
        password += getRandomData(lowerSet)     // If lowercase checkbox is checked, add random lowercase letter
    }

    if (numberInput.checked) {
        password += getRandomData(numberSet)    // If numbers checkbox is checked, add random number
    }

    if (symbolInput.checked) {
        password += getRandomData(symbolSet)    // If symbols checkbox is checked, add random symbol
    }

    // If password is still shorter than the requested length, call this function again
    if (password.length < totalChar.value) {
        return generatePassword(password)       // Recursive call to keep adding more characters
    }

    // Cut the password to the required length (in case it went a little over)
    // Then show it inside the result box (passBox)
    passBox.innerText = truncateString(password, totalChar.value);
}




generatePassword();

// Add event listener to the Generate button
// So when user clicks "Generate", it makes a new password
document.getElementById("generate").addEventListener(
    "click",
    function () {
        generatePassword();     // Call the password generator again on click
    }
)

// Function to limit the password to the exact number of characters user asked
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);  // If string is too long, cut it down to `num` characters
        return subStr;
    } else {
        return str;  // If string is already the right length or less, return it as-is
    }
}