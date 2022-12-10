"use strict";
import { addComment } from "./utils.js";

let comments = [
    {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        value: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        value: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        value: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
];

const commentContainer = document.querySelector(".cta__comment-container");

comments.forEach((comment) => {
    commentContainer.appendChild(addComment(comment));
});