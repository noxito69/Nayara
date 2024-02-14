// DOM elements
const beloved = document.getElementById("beloved");
const user = document.getElementById("user");

// Prompt user for info
const belovedName = prompt("What is the name of your beloved?");
const userName = prompt("What is your name?");

// Render info to elements
beloved.textContent = belovedName;
user.textContent = userName;
