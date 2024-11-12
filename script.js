///Segment 1: Functions with No Parameters and No Return Values

//Basic Greeting
//Create a function called greet that logs the string "Hello, World!" to the console.

function greet() {
    console.log("Hello, World!");
}

greet()
//Favorite Number
//Write a function named favoriteNumber that logs your favorite number (e.g., 42) to the console.

function favoriteNumber() {
    console.log(22)
}

favoriteNumber()

//Magic Eight Ball
//Create a function called magicEightBall that logs a random response from the following list: "Yes", "No", "Maybe", or "Ask again later".

function magicEightBall() {
    const responses = ["Yes", "No", "Maybe", "Ask Again Later"];
    const randomIndex = Math.floor(Math.random() * responses.length);
    console.log(responses[randomIndex]);
};

magicEightBall();

//Current Year
//Write a function called getCurrentYear that logs the current year to the console using the Date object.

function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
}

getCurrentYear()

//Random Joke
//Create a function called tellJoke that logs a random joke from a predefined list of jokes to the console.

function tellJoke() {
    const jokes = [
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why don’t scientists trust atoms? Because they make up everything!",
        "I would avoid the sushi if I was you. It’s a little fishy.",
        "What do you call fake spaghetti? An impasta!"
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    console.log(jokes[randomIndex]);
}

tellJoke();



//Segment 2: Functions with Parameters (One or More)


//Personalized Greeting
//Write a function named personalGreeting that takes a name as a parameter and logs a greeting string (e.g., "Hello, [name]!") to the console.

function personalGreeting() {
    const name = ("Fabian");
    const greeting = ("Hello, " + [name] + "!");
    console.log(greeting);
};

personalGreeting();

//Sum of Two Numbers
//Create a function called add that takes two numbers as parameters and logs their sum to the console.

function add() {
    const num1 = 22;
    const num2 = 23;
    const result = (num1 + num2);
    console.log(result);
}

add();

//Age in Months
//Write a function named ageInMonths that takes a person's age in years as a parameter and logs their age in months (e.g., age * 12).

function ageInMonths() {
    age = 22;
    monthsInAYear = 12;
    console.log(age * monthsInAYear + " " + "Months");
};

ageInMonths();

//Temperature Converter
//Create a function called celsiusToFahrenheit that takes a temperature in Celsius as a parameter and logs the equivalent temperature in Fahrenheit to the console.

function celsiusToFahrenheit() {
    celsius = 11;
    fahrenheitFormula = (celsius * 9.0/5.0) + 32.0;
    console.log(fahrenheitFormula + " " + "fahrenheit");
}

celsiusToFahrenheit();

//Full Name
//Write a function named getFullName that takes two parameters, firstName and lastName, and logs the full name as a single string (e.g., "John Doe") to the console.

function getFullName() {
    firstName = "Fabian";
    lastName = "Olsson";
    console.log(firstName + " " + lastName);
};

getFullName();



//Segment 3: Functions with Parameters and Return Values


//Area of a Rectangle
//Create a function called calculateArea that takes the length and width of a rectangle as parameters and logs the area to the console.

function calculateArea() {
    const length = 5;
    const width = 3;
    console.log("Area of the rectangle is: " + " " + length * width );
}

calculateArea();

//Find Maximum
//Write a function named findMax that takes two numbers as parameters and logs the larger of the two.

function findMax(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else if (num2 > num1) {
        console.log(num2);
    } else {
        console.log("Both numbers are equal.");
    }
}

findMax(10, 15);  // Logs "15"
findMax(20, 5);   // Logs "20"
findMax(7, 7);    //  Logs "Both numbers are equal."

//Count Vowels
//Create a function called countVowels that takes a string as a parameter and logs the number of vowels (a, e, i, o, u) in that string.

function countVowels(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }
    console.log(count);
}

countVowels("Hello World");  



//Discount Price
//Write a function named calculateDiscount that takes the original price and the discount percentage as parameters and logs the price after discount to the console.

function calculateDiscount(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;
    console.log(`The price after discount is: $${finalPrice.toFixed(2)}`);
}

calculateDiscount(100, 20);  

//Reverse String
//Create a function called reverseString that takes a string as a parameter and logs the string reversed to the console.

function reverseString(str) {
    const reversed = str.split('').reverse().join('');
    console.log(reversed);
}

reverseString("Hello World"); 



//Level Intermediate

//Palindrome Checker
//Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase for case-insensitivity
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string and check if it equals the original cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("Hello World")); 



//FizzBuzz
//Create a function named fizzBuzz that takes a number as a parameter and returns:
//"Fizz" if the number is divisible by 3,
//"Buzz" if it is divisible by 5,
//"FizzBuzz" if it is divisible by both, and
//the number itself if none of these conditions are met.

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}

console.log(fizzBuzz(3));   
console.log(fizzBuzz(5));   
console.log(fizzBuzz(15));  
console.log(fizzBuzz(7));   


//Factorial Calculator
//Write a function called factorial that takes a positive integer as a parameter and returns the factorial of that number (e.g., 5! = 5 × 4 × 3 × 2 × 1).

function factorial(n) {
    // Initialize result to 1 as the factorial of 0 is 1, and multiplication identity is 1.
    let result = 1;

    // Loop to multiply numbers from n down to 1.
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));  
console.log(factorial(0));  
console.log(factorial(7));  


//Longest Word
//Create a function named findLongestWord that takes a string (a sentence) as a parameter and returns the longest word in that sentence.

function findLongestWord(sentence) {
    const words = sentence.split(' ');

    const longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, '');

    return longestWord;
}


console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));  
console.log(findLongestWord("I love programming in JavaScript"));  


//Array Average
//Write a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));  
console.log(calculateAverage([10, 20, 30]));     


//Remove Duplicates
//Create a function named removeDuplicates that takes an array as a parameter and returns a new array with duplicate values removed.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));  

//Capitalize First Letter
//Write a function called capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("hello"));  

//Count Occurrences
//Create a function named countOccurrences that takes a string and a character as parameters and returns the number of times the character appears in the string.

function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences("hello", "l"));  
console.log(countOccurrences("world", "o"));  


//Merge Arrays
//Write a function called mergeArrays that takes two arrays as parameters and returns a new array that contains all the elements from both arrays, ensuring no duplicates.

function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]));  



//Random Password Generator
//Write a function called generatePassword that takes a length as a parameter and returns a randomly generated password of that length, using uppercase letters, lowercase letters, and numbers.

function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';

    for (let i = 0; i < length; i++) {
        // Select a random character from the characters string
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

console.log(generatePassword(8));  

//Character Frequency
//Create a function named charFrequency that takes a string as a parameter and returns an object with each character as a key and the number of times it appears in the string as the value.

function charFrequency(str) {
    const frequency = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        // If the character already exists in the object, increment its count
        if (frequency[char]) {
            frequency[char]++;
        } else {
            // If it's the first time we encounter the character, set its count to 1
            frequency[char] = 1;
        }
    }

    return frequency;
}

console.log(charFrequency("javascript"));  

//Intersection of Arrays
//Write a function called arrayIntersection that takes two arrays as parameters and returns a new array containing only the elements that are present in both arrays.

function arrayIntersection(arr1, arr2) {
    // Use filter to return only the elements that are in both arrays
    return arr1.filter(item => arr2.includes(item));
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));  

//String Reversal
//Create a function named reverseWords that takes a string as a parameter and returns the string with the order of the words reversed (e.g., "Hello World" becomes "World Hello").

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("Hello World")); 

//Find Minimum
//Write a function called findMin that takes an array of numbers as a parameter and returns the smallest number in the array.

function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMin([-10, -5, 0, 5, 10]));  