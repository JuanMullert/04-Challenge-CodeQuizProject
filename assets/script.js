const questionsArr = [
    {
        question: "Commonly used data types DO NOT include:",
        options: {
            a: "A. strings", 
            b: "B. booleans", 
            c: "C. numbers", 
            d: "D. alerts",
        },
        answer: "d"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        options: {
            a: "A. quotes", 
            b: "B. curly brackets", 
            c: "C. parenthesis", 
            d: "D. square brackets",
        },
        answer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        options: {
            a: "A. numbers and strings", 
            b: "B. other arrays", 
            c: "C. booleans", 
            d: "D. all of the above",
        },
        answer: "d"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        options: {
            a: "A. quotes", 
            b: "B. curly brackets", 
            c: "C. parenthesis", 
            d: "D. commas",
        },
        answer: "a"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: {
            a: "A. JavaScript", 
            b: "B. terminal/bash", 
            c: "C. for loops", 
            d: "D. console.log",            
        },
        answer: "d"
    }
];

var header = document.querySelector(".header");
var opening = document.querySelector(".opening");
var container = document.querySelector(".container");
var divider = document.querySelector(".divider");
var result = document.querySelector(".result");
var scores = [];
var mark = 0;
var index = 0;
var record = [];