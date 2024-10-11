// helper.js

const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

const phoneNumberID = process.env.PHONE_NUMBER_ID; // WhatsApp Business Phone Number ID
const accessToken = process.env.ACCESS_TOKEN; // WhatsApp API Access Token

/**
 * Send a text message to a WhatsApp user
 * @param {string} recipient - WhatsApp number of the recipient in international format
 * @param {string} messageText - Text message to be sent
 */
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

/**
 * Send an image to a WhatsApp user
 * @param {string} recipient - WhatsApp number of the recipient in international format
 * @param {string} imageUrl - URL of the image to be sent
 * @param {string} caption - Optional caption for the image
 */
async function sendImage(recipient, imageUrl, caption = '') {
  const data = {
    messaging_product: 'whatsapp',
    to: recipient,
    type: 'image',
    image: { link: imageUrl, caption: caption }
  };

  try {
    await axios.post(`https://graph.facebook.com/v14.0/${phoneNumberID}/messages`, data, {
      headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' }
    });
    console.log(`Image sent to ${recipient}: ${imageUrl}`);
  } catch (error) {
    console.error('Error sending image message:', error.response ? error.response.data : error.message);
  }
}

/**
 * Get the main menu options as a formatted string
 * @returns {string} - Formatted main menu options
 */
function getMainMenu() {
  return `Welcome! Please select from the following options:\n${menuData.mainMenu.join('\n')}`;
}

/**
 * Get sub-menu options for a given category
 * @param {string} category - Category name (e.g., 'API', 'Intermediates')
 * @returns {string} - Formatted sub-menu options for the given category
 */
function getMenuOptions(category) {
  if (menuData[category]) {
    return `Please select from the following options:\n${menuData[category].options.join('\n')}`;
  } else {
    return `Invalid category. Please select a valid option from the main menu.`;
  }
}

// Export helper functions for use in other files
module.exports = { sendMessage, sendImage, getMainMenu, getMenuOptions };
