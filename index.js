const express = require('express');

const app = express();


app.listen(80);

app.get('/test', (req,res) => {
    res.json({server: 'Mirza\'s server', version: '1.0.0'});
});