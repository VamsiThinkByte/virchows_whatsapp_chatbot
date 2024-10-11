// server.js

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const menuData = require('./data'); // Import the data structure from data.js
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;
const VERIFY_TOKEN = 'my_verify_token_emnar_service'; // Use the verify token you've defined
const phoneNumberID = process.env.PHONE_NUMBER_ID; // Your WhatsApp Business Phone Number ID
const accessToken = process.env.ACCESS_TOKEN; // Your WhatsApp API Access Token

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Webhook Verification Route (GET request)
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge); // Respond with the challenge token
    } else {
      res.sendStatus(403); // Forbidden if token does not match
    }
  } else {
    res.sendStatus(400); // Bad request if required parameters are missing
  }
});

// Webhook to receive messages and events (POST request)
app.post('/webhook', async (req, res) => {
  const body = req.body;

  if (body.object) {
    const entry = body.entry[0];
    const changes = entry.changes[0];
    const messages = changes.value.messages;

    if (messages) {
      const message = messages[0];
      const from = message.from; // User's WhatsApp number
      const userInput = message.text ? message.text.body.toLowerCase() : ''; // User's input text

      console.log(`Received message: ${userInput} from ${from}`);

      // Handle navigation through menu
      let responseMessage = handleMenuNavigation(userInput);

      // Send the response message back to the user
      await sendMessage(from, responseMessage);
    }

    res.sendStatus(200); // Respond back to WhatsApp with 200 OK
  } else {
    res.sendStatus(404); // Return 404 if no valid message is received
  }
});

// Function to handle menu navigation based on user input
function handleMenuNavigation(userInput) {
  let responseMessage = '';

  // Check if the user is at the main menu level
  if (menuData.mainMenu.map(item => item.toLowerCase()).includes(userInput)) {
    switch (userInput) {
      case '1':
        responseMessage = `API Options:\n${menuData.API.options.join('\n')}`;
        break;
      case '2':
        responseMessage = `Intermediates Options:\n${menuData.Intermediates.options.join('\n')}`;
        break;
      case '3':
        responseMessage = `Finished Dosages Options:\n${menuData.FinishedDosages.options.join('\n')}`;
        break;
      case '4':
        responseMessage = `Biotech Products Options:\n${menuData.BiotechProducts.options.join('\n')}`;
        break;
      default:
        responseMessage = `Invalid choice. Please select from:\n${menuData.mainMenu.join('\n')}`;
    }
  } else {
    // Check if user input matches any subcategories in the API category
    for (let category in menuData.API.subOptions) {
      if (userInput === category.toLowerCase()) {
        responseMessage = `Products in ${category}:\n${menuData.API.subOptions[category].join('\n')}`;
        return responseMessage;
      }
    }

    // Check for subcategories in Intermediates
    for (let category in menuData.Intermediates.subOptions) {
      if (userInput === category.toLowerCase()) {
        responseMessage = `Products in ${category}:\n${menuData.Intermediates.subOptions[category].join('\n')}`;
        return responseMessage;
      }
    }

    // If no match is found, return an error message
    responseMessage = `Invalid choice. Please select from the menu options.`;
  }

  return responseMessage;
}

// Function to send a message back to the WhatsApp user
async function sendMessage(recipient, messageText) {
  const data = {
    messaging_product: 'whatsapp',
    to: recipient,
    type: 'text',
    text: { body: messageText }
  };

  try {
    await axios.post(`https://graph.facebook.com/v14.0/${phoneNumberID}/messages`, data, {
      headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' }
    });
    console.log(`Message sent to ${recipient}: ${messageText}`);
  } catch (error) {
    console.error('Error sending message:', error.response ? error.response.data : error.message);
  }
}

// Start the server and listen on the defined PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
