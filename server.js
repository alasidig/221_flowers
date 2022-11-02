const express = require('express')
const nunjucks = require('nunjucks');
const session = require('express-session')
const app = express()
const port = 3000

// Populates req.session
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'a very strong secret',
    cookie:{httpOnly:false}
}));
const flowerModel = require('./models/flower_model') //use relative path for local modules
app.use(express.static('public'))// prebuilt middleware
nunjucks.configure( 'views', { express: app} ); //setup nunjucks template engin to find the templates in 'views' folder

app.get('/', (req, res) => res.render('index.njk',{flowers:flowerModel.getFlowers(),IMAGES_URL:flowerModel.IMAGES_URL})) //pass the data to the template
app.get('/detail/:flowerId', (req, res)=> {
    const likedFlower = req.session.liked?.includes(req.params.flowerId) 
    console.log({likedFlower,liked:req.session.liked,id:req.params.flowerId})
    res.render('detail.njk',
{
    flower:flowerModel.getFlowerById(req.params.flowerId),
    IMAGES_URL:flowerModel.IMAGES_URL,
    likedFlower
}
  )
})

    app.post('/detail/:flowerID/like',(req, res) => {
        const flowerID = req.params.flowerID;
        if (req.session.liked) {
            const index = req.session.liked.indexOf( flowerID )
            if( index === -1){
                req.session.liked.push(flowerID)
            }else {
                req.session.liked.splice(index,1)
            }
        }else {
            req.session.liked = [flowerID]
        }
        console.log(req.session.liked)
        res.redirect(`/detail/${flowerID}`)
    })
//custom middleware
app.use(function (req, res, next) {
    res.status(404).send('We cant find your page');
});

app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}`))