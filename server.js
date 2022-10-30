const express = require('express')
const nunjucks = require('nunjucks');
const app = express()
const port = 3000
const flowersList = [
    {
        "category": "Shrubs",
        "price": 15.99,
        "instructions": "Large double. Good grower, heavy bloomer. Early to mid-season, acid loving plants. Plant in moist well drained soil with pH of 4.0-5.5.",
        "photo": "california_snow.jpg",
        "name": "Azalea",
        "productId": 1
    },
    {
        "category": "Shrubs",
        "price": 33.99,
        "instructions": "Beautiful large royal purple flowers adorn attractive satiny green leaves that turn orange\\/red in cold weather. Grows to up to 18 feet, or prune annually to shorten.",
        "photo": "princess_flower.jpg",
        "name": "Tibouchina Semidecandra",
        "productId": 2
    },
    {
        "category": "Shrubs",
        "price": 12.99,
        "instructions": "Blooms in summer, 20-35 inches high. Fertilize regularly for best results. Full sun, drought tolerant.",
        "photo": "haight_ashbury.jpg",
        "name": "Hibiscus",
        "productId": 3
    },
    {
        "category": "Shrubs",
        "price": 5.99,
        "instructions": "Quick-growing, herbaceous, shrub reaching up to 30 inches in height, forming a rounded, dense bush.",
        "photo": "mona_lavender.jpg",
        "name": "Plectranthus",
        "productId": 4
    },
    {
        "category": "Shrubs",
        "price": 15.99,
        "instructions": "Slow growing, upright to spreading shrub. Oval, glossy, leaves and profuse winter to spring blooming flowers.",
        "photo": "camellia.jpg",
        "name": "Camellia Japonica",
        "productId": 5
    },
    {
        "category": "Shrubs",
        "price": 10.99,
        "instructions": "Thorny woody vine scrambles over other plants with their hooked thorns. Pest free.",
        "photo": "bougainvillea.jpg",
        "name": "Bougainvillea Spectabilis",
        "productId": 6
    },
    {
        "category": "Shrubs",
        "price": 22.99,
        "instructions": "Deep purple colored flowers bushy rounded growth habit to 3 feet tall. Plant in full sun. Water regularly.",
        "photo": "rosa_burgundy.jpg",
        "name": "Rosa Burgundy",
        "productId": 7
    },
    {
        "category": "Shrubs",
        "price": 22.99,
        "instructions": "Deep purple colored flowers bushy rounded growth habit to 3 feet tall. Plant in full sun. Water regularly.",
        "photo": "rosa_iceberg.jpg",
        "name": "Rosa Iceberg",
        "productId": 8
    }
];
app.use(express.static('public'))// prebuilt middleware
nunjucks.configure( 'views', { express: app} ); //setup nunjucks template engin to find the templates in 'views' folder

app.get('/', (req, res) => res.render('index.njk',{flowers:flowersList})) //pass the data to the template
app.get('/detail', (req, res) => res.render('detail.njk'))

//custom middleware
app.use(function (req, res, next) {
    res.status(404).send('We cant find your page');
});

app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}`))