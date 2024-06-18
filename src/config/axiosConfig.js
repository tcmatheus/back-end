require('dotenv').config({ path: `./environments/${process.env.NODE_ENV}.env` });

const axios = require('axios');

const ACCESS_TOKEN = process.env.ACCESS_TOKEN; 
const API_URL = process.env.API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
});

module.exports = axiosInstance;