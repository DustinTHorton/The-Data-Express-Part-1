const express = require('express'),
    expressSession = require('express-session'),
    pug = require('pug'),
    path = require('path'),
    routes = require('./routes/routes.js'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    bcrypt = require('bcryptjs')

let app = express()
var int = cookiecounter = 0

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname + '/public')))
app.use(cookieParser('This is the passphrase'))

const urlencodedParser = bodyParser.urlencoded({
    extended: false
})

const checkAuth = (req, res, next) => {
    if(req.session.user && req.session.user.isAuthenticated){
        next()
    } else{
        res.redirect('/')
    }
}

app.use(expressSession({
    secret : '12345',
    saveUninitialized: true,
    resave: true
}));

app.get('/', (req, res) => {
    res.render('login')
})

app.post('/', urlencodedParser, (req, res) => {
    console.log(req.body.username)
    if(req.body.username == 'user' && req.body.password == 'pass'){
        req.session.user = {
            isAuthenticated: true,
            user:req.body.username
        }
        res.redirect('/private')
    }
})

app.get('/private', checkAuth, (req, res) => {
    res.send(`Authorized access: Welcome ${req.session.user.username} br/>`)
})

app.get('/public', (req, res) => {
    res.send('Public Access')
})

app.get('logout', (req, res) => {

})

app.get('layout', (req, res) => {

})

app.get('/', routes.index);
app.get('/create', routes.index);
app.post('create', urlencodedParser, routes.createPerson);
app.get('/edit/:id', routes.edit);
app.post('/edit/:id', urlencodedParser, routes.editPerson);
app.get('/delete/:id', routes.delete);
app.get('/details/:id', routes.details);


app.get('/', (req, res) => {
    cookiecounter++

    if(req.cookies.beenHereBefore == 'yes'){
        cookiecounter++
        res.send(`You have been here ${req.cookies.visited} before.`)
        res.cookie('visited', visted, {maxAge: 9999999999})
    } else {
        res.cookie('beenHereBefore', 'yes', {maxAge: 9999999999})
        res.cookie('visited', 0, {maxAge: 9999999999})
        res.send('This is your first time here.')
    }
})

app.get('/clear', (req, res) => {
    res.clearCookie('beenHereBefore')
    res.cookie('visited', 0, {maxAge: 9999999999})
    res.redirect('/');
})

app.get('/', routes.passwordSalting)

app.listen(3000)