import readlineSync from "readline-sync";
console.log("Hello World");
import { chalkBlueLog } from "./utils.js";

chalkBlueLog();
// Wait for user's response.
const userName = readlineSync.question("May I have your name? ");
console.log("Hi " + userName + "!!!!!");

// Handle the secret text (e.g. password).
const favFood = readlineSync.question("What is your favorite food? ", {
  hideEchoBack: true, // The typed text on screen is hidden by `*` (default).
});
console.log("Oh, " + userName + " loves " + favFood + "!");
