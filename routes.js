const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb+srv://DustinHorton:Kitoshi@cluster0-ug0sk.mongodb.net/TheDataExpress?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true});
//mongoose.connect('mongodb+srv://user:pass1234@cluster0-6simv.mongodb.net/TheDataExpress?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true});


const mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callback =>{
});

const UserSchema = mongoose.Schema(
    {
    avatarUrl : String,    
    name: String,
    password: String,
    email: String,
    age: String,
    questionOne: String,
    questionTwo: String,
    questionThree: String
});

var cookiecounter = 0
let User = mongoose.model("Database_User", UserSchema);

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
        res.render('private',{title: 'Access granted', cookieData: `You have been here ${cookiecounter} time(s) before.`,user: user, avatarUrl: user.avatarUrl})
    } else {
        res.cookie('beenHereBefore', 'yes', {maxAge: 9999999999})
        res.cookie('visited', 0, {maxAge: 9999999999})
        res.render('private',{title: 'Access granted', cookieData: `This is your first time here.`,user: user, avatarUrl: user.avatarUrl})
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
            avatarUrl : '/myAvatars/' + req.body.name,
            name: req.body.name,
            password: hash,
            email: req.body.email,
            age: req.body.age,
            questionOne: req.body.question1,
            questionTwo: req.body.question2,
            questionThree: req.body.question3
        });
        user.save((err, user) => {
            if(err) return console.error(err);
            console.log(user.name + " has been added");
            console.log(user);
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
            user.avatarUrl = req.body.avatarUrl,
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
111111111
const bcrypt = require('bcryptjs')

 exports.passwordSalting = (req, res) => {
     let salt = bcrypt.genSaltSync(10)
     let has = bcrypt.hashSync()
}

exports.avatar = (req,res) => {
    
}

exports.api = (req,res) => {
    User.find({},(err, users) => {
        if (users) {
            var questionOneAnswers = [];
            var questionTwoAnswers = [];
            var questionThreeAnswers = [];
            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                questionOneAnswers.push(user.questionOne);
                questionTwoAnswers.push(user.questionTwo);
                questionThreeAnswers.push(user.questionThree);
            }
            var tootsieAnswerOne = questionOneAnswers.filter(answer => answer == '1').length;
            var tootsieAnswerTwo = questionOneAnswers.filter(answer => answer == '11').length;
            var tootsieAnswerThree = questionOneAnswers.filter(answer => answer == '364').length;
            var tootsieAnswerFour = questionOneAnswers.filter(answer => answer == 'Other').length;
            var videoGameAnswerOne = questionTwoAnswers.filter(answer => answer == 'Yes').length;
            var videoGameAnswerTwo = questionTwoAnswers.filter(answer => answer == 'No').length;
            var videoGameAnswerThree = questionTwoAnswers.filter(answer => answer == 'Maybe').length;
            var videoGameAnswerFour = questionTwoAnswers.filter(answer => answer == 'Other').length;
            var accountAnswerOne = questionThreeAnswers.filter(answer => answer == 'Yes').length;
            var accountAnswerTwo = questionThreeAnswers.filter(answer => answer == 'No').length;
            var accountAnswerThree = questionThreeAnswers.filter(answer => answer == 'Maybe').length;
            var accountAnswerFour = questionThreeAnswers.filter(answer => answer == 'Other').length;
            //Converting to Percentages
            var tootsiePercentOne = Math.round(tootsieAnswerOne / users.length * 100);
            var tootsiePercentTwo = Math.round(tootsieAnswerTwo / users.length * 100);
            var tootsiePercentThree = Math.round(tootsieAnswerThree / users.length * 100);
            var tootsiePercentFour = Math.round(tootsieAnswerFour / users.length * 100);
            var videoGamePercentOne = Math.round(videoGameAnswerOne / users.length * 100);
            var videoGamePercentTwo = Math.round(videoGameAnswerTwo / users.length * 100);
            var videoGamePercentThree = Math.round(videoGameAnswerThree / users.length * 100);
            var videoGamePercentFour = Math.round(videoGameAnswerFour / users.length * 100);
            var accountPercentOne = Math.round(accountAnswerOne / users.length * 100);
            var accountPercentTwo = Math.round(accountAnswerTwo / users.length * 100);
            var accountPercentThree = Math.round(accountAnswerThree / users.length * 100);
            var accountPercentFour = Math.round(accountAnswerFour / users.length * 100);
            res.send({data:{
                tootsiePercentages:[
                    tootsiePercentOne,tootsiePercentTwo,tootsiePercentThree,tootsiePercentFour
                ],
                videoGamePercentages:[
                    videoGamePercentOne,videoGamePercentTwo,videoGamePercentThree,videoGamePercentFour    
                ],
                accountPercentages:[
                    accountPercentOne,accountPercentTwo,accountPercentThree,accountPercentFour
                ]
            }})
        }else{
            res.send({data:{
                tootsiePercentages:[
                    0,0,0,0
                ],
                videoGamePercentages:[
                    0,0,0,0    
                ],
                accountPercentages:[
                    0,0,0,0
                ]
            }});
        }
    });
}