const express = require("express");
const axios = require("axios");

const app = express();

// Post ID tracker
var num = 0;

setInterval(() => {
  // Increment post tracker
  num++;
  console.log("Wait for 2 second...");

  // Make GET Request on every 2 second
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${num}`)

    // Print data
    .then((response) => {
      const { id, title } = response.data;
      console.log(`Post ${id}: ${title}\n`);
    })

    // Print error message if occur
    .catch((error) => console.log("Error to fetch data\n"));
}, 2000);

// Dummy database
const posts = [
  {
    title: "Headline 1",
    id: 1,
    body: ``,
    userId: 1,
  },
];

// Loop over the posts
posts.forEach((post) => {
  // Post data to API endpoint
  axios
    .post("localhost:3001", {
      body: post,
    })

    // Print response
    .then((response) => {
      const { id, title } = response.data.body;
      console.log(`Post ${id}: ${title}`);
    })

    // Print error message if occur
    .catch((error) => console.log(error));
});
