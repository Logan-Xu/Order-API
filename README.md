# Order-API
Technical Test Overview

1. Source code for the solution.

Please check the repository.

2. Setup/installation instructions.

If you have Nodejs and NPM installed, you can run "npm install" to get all the dependencies installed, and then run "npm start" to start the server.

3. Description.

I used Node js and Express because I think it is easier for me. I didn't use any error handling strategy because, to be honest, I don't know where to put those "try...catch" things to make my code stronger. I need to learn more.

4. My assumptions.

Actually, I don't fully understand the data below. I think since the "count" is 17, there should be 10 "id"s in the "orders" array. (because according to the requirements, the "orders" field should contain a list of ids for the last 10 orders that day ). But you see, there are only two items in the "orders" array below. So I was a bit confused, but I just did it as my assumption which is one order can only have one thing ordered because I didn't see an "amount" attribute in the "order" structure.

{
  "type" : "iPhone13",
  "count" : 17,
    "orders" :
      [
        "1",
        "7"
      ],
    "related_customers" :
      [
        "customer-1",
        "customer-3"
      ]
}

5. I think the test is well designed. There are many details I didn't notice at the very beginning. So I had to alter my code a lot of times. It took me several hours to finish because my coding skills are really rusted. I hope I can get this opportunity to work with you, and I will try my best to learn. And I think I will do tasks like this in minutes if I have enough chance to "practice", I mean... to learn in a real job.
