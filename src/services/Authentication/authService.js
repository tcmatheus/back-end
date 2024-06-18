const axios = require("axios");
require('dotenv').config();

const apiUrl = "http://localhost:4004/api"

// const BASE_URL = process.env.BASE_URL;

const receiveCode = async (code) => {
    try {
        const response = await axios.post(`${apiUrl}/oauth/code`, {code: code});
        return(response.data);
        // generateToken(response.data);
        console.log(response.data);
        // ((res) => {
        // // await axios.post(`${BASE_URL}/oauth/code`, code).then((res) => {
        //     // generateToken(res.data);
        //     console.log(res.data);
        //     generateToken(res.data);
        //     return res.data; 
        // });
    } catch (error) {
        return (`Failed to retrieve token: ${error}`);
    }
};

const generateToken = (authorizationCode) =>{
    console.log(authorizationCode);
}

module.exports = { receiveCode, generateToken }