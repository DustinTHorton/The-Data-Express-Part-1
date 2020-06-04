const express = require('express'),
    mongoose = require('mongoose'),
    expressSession = require('express-session'),
    pug = require('pug'),
    path = require('path'),
    routes = require('./routes/routes.js'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    bcrypt = require('bcryptjs'),
    avatarsMiddleware = require('adorable-avatars')

const app = express()

app.use('/myAvatars', avatarsMiddleware);

let userSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String,
    age: String,
    questionOne: String,
    questionTwo: String,
    questionThree: String
});

let User = mongoose.model('Database_User');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')));
app.use(cookieParser('This is the passphrase'));

const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

const checkAuth = (req, res, next) => {
    if(req.session.user && req.session.user.isAuthenticated){
        next()
    } else{
        res.redirect('/')
    }
};

app.use(expressSession({
    secret : '12345',
    saveUninitialized: true,
    resave: true
}));

app.get('/', (req, res) => {
    res.render('login') 
});

app.post('/', urlencodedParser, async (req, res) => {
    const user = await User.findOne({name:req.body.username});
    console.log(user.name + " logged in")
    var validPassword = false;
    if (user) {
        validPassword = await bcrypt.compare(req.body.password, user.password);
        if(req.body.username == user.name && validPassword){
            req.session.user = {
                isAuthenticated: true,
                user:req.body.username
            }
            res.redirect('/private')
        }
    } else {
        res.redirect('/public')
    }
});

app.get('/private', checkAuth, routes.private);

app.get('/public', (req, res) => {
    res.render('create')
});

app.get('/logout', (req, res) => {
    req.session.user = null;
    res.redirect('/')
});

app.get('/private')

app.get('/api',routes.api)
app.get('/create', routes.create);
app.post('/create', urlencodedParser, routes.createUser);
app.get('/edit/:id', routes.edit);
app.post('/edit/:id', urlencodedParser, routes.editUser);
app.get('/submitted', (req, res) =>{
    res.render('submitted')
});


app.get('/clear', (req, res) => {
    res.clearCookie('beenHereBefore')
    res.cookie('visited', 0, {maxAge: 9999999999})
    res.redirect('/');
});


app.get('/avatarEdit/:id', routes.avatarEdit);
app.post('/avatarEdit/:id', routes.avatar);

app.listen(3000);