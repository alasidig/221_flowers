const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => res.send('<h2>Welcome to the Flowers Shop Express server</h2>'))
app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}`))