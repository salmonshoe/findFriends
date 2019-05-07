const peopleData = require("../data/friends");

//console.log(peopleData);

module.exports = (app) => {

    app.get('/api/friends', (request, response) => {
        return response.json(peopleData);
    });

    app.post('/api/friends', (request, response) => {
        peopleData.push(request.body);
        response.json(true);
    })
};