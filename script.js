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