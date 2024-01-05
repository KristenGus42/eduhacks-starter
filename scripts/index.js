'use strict';
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up interactive portion of the window
   */
  function init() {
    document.getElementById("chat-btn").addEventListener("click", displayUser);
  }

  /**
   * Displays the user's input on the screen
   */
  function displayUser() {
    // TODO: Write the code to display user information
  }

  /**
   * Requests a response from our own backend
   */
  async function fetchResponse(input) {
    // TODO: Write the code to fetch information from node server
  }

  /**
   * Displays the bot's response on the screen
   * @param {Promise} res information from OpenAI servers
   */
  function displayBot(res) {
    // TODO: Display bot's response
  }

  /**
   * Checks the status of the response recieved
   * @param {Response} res given response to check
   * @returns {Response} indicating the status of the given response
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

})();