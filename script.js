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
