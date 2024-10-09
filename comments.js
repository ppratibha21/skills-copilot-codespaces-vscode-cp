// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create in-memory database
const comments = [];

// Get all comments
app.get('/comments', (req, res)