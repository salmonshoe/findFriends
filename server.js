const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

//Express middleware for data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Routing
    //require("./app/routing/htmlRoutes")(app); <-- This didn't direct the way it should have. Will fix, otherwise I'll hard code HTML routes
require("./app/routing/apiRoutes")(app);

app.get('/survey', (request, response) => {
    response.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'app/public/index.html'));
});

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'app/public/index.html'));
});

// Set your server to listen for requests
app.listen(PORT, function() {
    console.log(`You are currently on http://localhost:${PORT}`);
});
