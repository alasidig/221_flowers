const flowersList = [//local variable not part of the export
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

const getFlowers = ()=>flowersList
const IMAGES_URL = "https://services.hanselandpetal.com/photos"
//List of the module interface
module.exports={
getFlowers,
IMAGES_URL,
}