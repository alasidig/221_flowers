const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))// prebuilt middleware
app.get('/', (req, res) => res.send('<h2>Welcome to the Flowers Shop Express server</h2>'))

//custom middleware
app.use(function (req, res, next) {
    res.status(404).send('We cant find your page');
});

app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}`))