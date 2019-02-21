const express = require('express');
const PORT = 8888;
const app = express();
var cors = require('cors')
app.use(cors());
app.get('/getStudent', function(req, res) {
    const results = {
        id: 1,
        name: 'ariel'
    };
    res.send(JSON.stringify(results))
});
app.post('/', function(req, res) {

});

app.listen(PORT);