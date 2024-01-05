// Sets up node server
import express from 'express';
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// TODO: Import OpenAI and enter your openAI key
const KEY = "YOUR KEY";
import OpenAI from "openai";
const openai = new OpenAI({apiKey: KEY});

//TODO: Create constants openai and messages

/**
 * Gets reponse from OpenAI servers
 * @param {String} query user input
 */
export async function chat(query) {
  // TODO: Create code that compiles past responses and generates a new one by accessing information from OpenAI

}

/**
 * A GET endpoint that will send output to a client
 */
app.get('/response/:message', async (req, res) => {
  // TODO: Create a get endpoint that sends openAI output to client
})

// Set up port and define proper files
app.use(express.static('scripts'));
app.listen(3000)