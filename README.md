# MongoDB & Mongoose

> November 14, 2022

Hi guys, here you can find the code for our MongoDB & Mongoose session.

## Code structure

Below is a reminder of the steps we took to get to the code found in this repo:

1. We cloned the code from https://github.com/EvolveU-FSD/c9-intro-to-express-part-2
1. We installed `mongoose` and `dotenv`
1. We modified `server.js` to startup asynchronously using an `async` function called `main()`
1. We used `mongoose.connect()` to connect to our MongoDB database using a connection string, DB name, username, and password
   - We stored these credentials/config in a `.env` file that we git-ignored so that we don't commit sensitive information to `git`
   - We called `dotenv.config()` to inject these `.env` environment variables into `process.env`
1. We created a Sandwich schema and model, and re-implemented the old CRUD functions to connect to MongoDB instead of our fake database
1. We converted our model and route functions to be asynchronous, because every operation with MongoDB is asynchronous.
