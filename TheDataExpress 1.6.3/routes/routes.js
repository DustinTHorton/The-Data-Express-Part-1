  
const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb+srv://DustinHorton:Kitoshi@cluster0-ug0sk.mongodb.net/TheDataExpress?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true});
// mongoose.connect('mongodb+srv://user:pass1234@cluster0-6simv.mongodb.net/TheDataExpress?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true});

const mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callback =>{
});

let userSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String,
    age: String,
    questionOne: String,
    questionTwo: String,
    questionThree: String
});

var cookiecounter = 0
let User = mongoose.model('Database_User', userSchema);

exports.index = (req, res) => {
    User.find((err, user)=> {
        if (err) return console.error(err);
    res.render('index', {
        title: "Users List",
        userList: user
    })
  })
}

exports.private = (req,res) => {
    User.findOne({name:req.session.user.user}, (err, user) => {
        if (err) return console.error(err);
        cookiecounter = cookiecounter + 1;
    if(req.cookies.beenHereBefore == 'yes'){
        res.cookie('visited', cookiecounter, {maxAge: 9999999999})
        res.render('private',{title: 'Access granted', cookieData: `You have been here ${cookiecounter} time(s) before.`,user: user})
    } else {
        res.cookie('beenHereBefore', 'yes', {maxAge: 9999999999})
        res.cookie('visited', 0, {maxAge: 9999999999})
        res.render('private',{title: 'Access granted', cookieData: `This is your first time here.`,user: user})
    }
    })
}

exports.create = (req, res) => {
    res.render('create',{
        title: 'Add New User'
    });
}

exports.createUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        let user = new User({
            name: req.body.name,
            password: hash,
            email: req.body.email,
            age: req.body.age,
            questionOne: req.body.questionOne,
            questionTwo: req.body.questionTwo,
            questionThree: req.body.questionThree
        });
        user.save((err, user) => {
            if(err) return console.error(err);
            console.log(req.body.name + " has been added");
        });
    })
    
    res.redirect('/submitted');
};

exports.edit = (req, res) => {
    console.log(req.session.user.user);
    User.findOne({name:req.session.user.user}, (err, user) => {
        console.log(user)
        if (err) return console.error(err);
        res.render('edit', {
            title:'Edit User',
            user:user
        });
    });
};

exports.editUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        User.findOne({name:req.params.id}, (err, user) => {
            if(err) return console.error(err);
            req.session.user.user = req.body.name,
            console.log("Session user:" + req.session.user.user);
            user.name = req.body.name,
            user.password = hash,
            user.email = req.body.email,
            user.age = req.body.age,
            user.questionOne = req.body.questionOne,
            user.questionTwo = req.body.questionTwo,
            user.questionThree = req.body.questionThree

            res.redirect('/private');

            user.save((err, user) => {
                if(err) return console.error(err);
                console.log(req.body.name + ' has been updated');
            });
        });
    });
    
};


exports.dealWithData = (req, res) => {
    let user = {
        name: req.body.name, 
        age: req.body.email,
        species: req.body.age
    };
    res.render('submitted', {
        user
    })
}

const bcrypt = require('bcryptjs')

 exports.passwordSalting = (req, res) => {
     let salt = bcrypt.genSaltSync(10)
     let has = bcrypt.hashSync()
}