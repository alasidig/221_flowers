const express = require('express')
const nunjucks = require('nunjucks');
const app = express()
const port = 3000
const flowerModel = require('./models/flower_model') //use relative path for local modules
app.use(express.static('public'))// prebuilt middleware
nunjucks.configure( 'views', { express: app} ); //setup nunjucks template engin to find the templates in 'views' folder

app.get('/', (req, res) => res.render('index.njk',{flowers:flowerModel.getFlowers(),IMAGES_URL:flowerModel.IMAGES_URL})) //pass the data to the template
app.get('/detail', (req, res) => res.render('detail.njk'))

//custom middleware
app.use(function (req, res, next) {
    res.status(404).send('We cant find your page');
});

app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}`))