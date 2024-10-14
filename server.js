const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'styles')));

app.set('view engine', 'ejs');

app.use(function(req,res,next){
    if(new Date().getHours()>17||new Date().getHours()<9){
        res.render("closed.ejs")
        return
    }
    next()
})

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

const PORT =8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
