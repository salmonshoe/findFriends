const path = require('path');

module.exports = (app) => {
    app.get('/survey', (request, response) => {
        response.sendFile(path.join(__dirname, 'app/public/survey.html'));
    });

    app.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, 'app/public/index.html'));
    });

    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname, 'app/public/index.html'));
    });
};

/*Importing this file from server.js gives an error stating
Error: ENOENT: no such file or directory, stat 'C:\Users\Rafael\findFriends\app\routing\app\public\index.html'

I decided to hard code it into the file since I can't export this properly.*/