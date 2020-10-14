const axios = require('axios');

const api = {
    getUser(userInput) {
        try {
            let response = axios

                .get(`https://api.github.com/users/${userInput.username}`);
            return response.data;

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = api;
